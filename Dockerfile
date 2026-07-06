# Build stage
FROM node:22-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and build the static site
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Replace default Nginx configuration with our own to fix reverse proxy redirects
RUN echo "server { \
    listen 4321; \
    server_name localhost; \
    absolute_redirect off; \
    port_in_redirect off; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files \$uri \$uri/ /index.html; \
    } \
}" > /etc/nginx/conf.d/default.conf

# Copy built static files from build stage to Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 4321 inside the container
EXPOSE 4321

CMD ["nginx", "-g", "daemon off;"]
