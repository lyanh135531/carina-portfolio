#!/bin/bash
# nport-renew.sh — Auto-renew nport tunnel every 4 hours
# Usage: ./renew_nport.sh
# Or run via cron: 0 */4 * * * /path/to/renew_nport.sh

# Thiết lập PATH để đảm bảo cron có thể chạy được lệnh nport
export PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH

PORT="${NPORT_PORT:-4321}"
SERVICE="${NPORT_SERVICE:-carina}"

# Đảm bảo thư mục lưu trữ an toàn trong thư mục HOME của user
NPORT_DIR="${HOME}/.nport"
mkdir -p "$NPORT_DIR"
chmod 700 "$NPORT_DIR"

PIDFILE="${NPORT_DIR}/nport-${PORT}.pid"
LOGFILE="${NPORT_DIR}/nport-${PORT}.log"
LOCKFILE="${NPORT_DIR}/nport-${PORT}.lock"
DAEMON_PIDFILE="${NPORT_DIR}/nport-renew-daemon-${PORT}.pid"

RENEW_INTERVAL=14400  # 4 hours in seconds

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOGFILE"
}

# Sử dụng flock để ngăn chạy đồng thời nhiều script sửa đổi tunnel
acquire_lock() {
    exec 9>"$LOCKFILE"
    if ! flock -n 9; then
        log "WARNING: Another instance of this script is already running or modifying the tunnel (lock held). Exiting."
        exit 0  # Thoát thành công để tránh lỗi cron gửi mail cảnh báo giả
    fi
}

start_tunnel() {
    # Kill existing nport process for this port
    if [ -f "$PIDFILE" ]; then
        local old_pid
        old_pid=$(cat "$PIDFILE" 2>/dev/null)
        if [ -n "$old_pid" ] && kill -0 "$old_pid" 2>/dev/null; then
            log "Killing old nport process: $old_pid"
            kill "$old_pid" 2>/dev/null
            sleep 2
        fi
        rm -f "$PIDFILE"
    fi

    # Also kill any other nport processes on this port
    pkill -f "nport ${PORT}([[:space:]]|$)" 2>/dev/null
    sleep 1

    # Start new tunnel in background
    log "Starting nport tunnel: port=$PORT service=$SERVICE"
    nohup nport "$PORT" -s "$SERVICE" >> "$LOGFILE" 2>&1 &
    local pid=$!
    echo "$pid" > "$PIDFILE"
    log "nport started with PID: $pid"

    # Wait a moment and check if it's still running
    sleep 3
    if kill -0 "$pid" 2>/dev/null; then
        log "nport tunnel is running"
    else
        log "ERROR: nport tunnel failed to start"
        rm -f "$PIDFILE"
        return 1
    fi
}

check_tunnel() {
    # Check if nport process is running
    if [ -f "$PIDFILE" ]; then
        local pid
        pid=$(cat "$PIDFILE" 2>/dev/null)
        if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
            # Process is running, check if tunnel is responsive
            if [ -f "$LOGFILE" ]; then
                local last_line
                last_line=$(tail -1 "$LOGFILE" 2>/dev/null)
                log "Tunnel OK (PID: $pid) — Last: $last_line"
            else
                log "Tunnel OK (PID: $pid)"
            fi
            return 0
        fi
    fi

    # Process not running, restart
    log "Tunnel not running, restarting..."
    start_tunnel
}

# ── Main ──
case "${1:-start}" in
    run)
        acquire_lock
        # Run in loop mode (foreground daemon)
        echo "$$" > "$DAEMON_PIDFILE"
        log "=== nport-renew daemon started (PID: $$) ==="
        log "Port: $PORT, Service: $SERVICE, Renew interval: ${RENEW_INTERVAL}s"
        start_tunnel
        while true; do
            sleep "$RENEW_INTERVAL"
            log "Renewing tunnel (4h interval)..."
            start_tunnel
        done
        ;;
    check)
        acquire_lock
        check_tunnel
        ;;
    start)
        acquire_lock
        start_tunnel
        ;;
    stop)
        # Kill the daemon if running
        if [ -f "$DAEMON_PIDFILE" ]; then
            dpid=$(cat "$DAEMON_PIDFILE" 2>/dev/null)
            if [ -n "$dpid" ] && kill -0 "$dpid" 2>/dev/null; then
                log "Killing daemon process: $dpid"
                kill "$dpid" 2>/dev/null
            fi
            rm -f "$DAEMON_PIDFILE"
        fi

        # Kill nport process
        if [ -f "$PIDFILE" ]; then
            pid=$(cat "$PIDFILE" 2>/dev/null)
            if [ -n "$pid" ]; then
                kill "$pid" 2>/dev/null
                log "Stopped nport (PID: $pid)"
            fi
            rm -f "$PIDFILE"
        fi
        pkill -f "nport ${PORT}([[:space:]]|$)" 2>/dev/null
        ;;
    status)
        if [ -f "$DAEMON_PIDFILE" ]; then
            dpid=$(cat "$DAEMON_PIDFILE" 2>/dev/null)
            if [ -n "$dpid" ] && kill -0 "$dpid" 2>/dev/null; then
                echo "nport daemon is running (PID: $dpid)"
            fi
        fi

        if [ -f "$PIDFILE" ]; then
            pid=$(cat "$PIDFILE" 2>/dev/null)
            if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
                echo "nport tunnel is running (PID: $pid)"
                echo "Port: $PORT, Service: $SERVICE"
                echo "Log: $LOGFILE"
                tail -5 "$LOGFILE" 2>/dev/null
            else
                echo "nport tunnel is NOT running (stale PID file)"
            fi
        else
            echo "nport tunnel is NOT running"
        fi
        ;;
    *)
        echo "Usage: $0 {run|check|start|stop|status}"
        echo "  run   - Run as daemon, auto-renew every 4h"
        echo "  check - Single check/restart if needed (for cron)"
        echo "  start - Start tunnel once (default)"
        echo "  stop  - Stop tunnel"
        echo "  status - Show status"
        exit 1
        ;;
esac
