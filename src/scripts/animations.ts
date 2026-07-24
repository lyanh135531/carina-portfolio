import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let activeScrollListener: (() => void) | null = null;
let activeMenuEscapeListener: ((event: KeyboardEvent) => void) | null = null;
let activePointerMoveListener: ((event: MouseEvent) => void) | null = null;

const initAnimations = (): void => {
  // Clear any existing ScrollTriggers and scroll listeners to prevent memory leaks in ClientRouter
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  if (activeScrollListener) {
    window.removeEventListener("scroll", activeScrollListener);
    activeScrollListener = null;
  }
  if (activeMenuEscapeListener) {
    document.removeEventListener("keydown", activeMenuEscapeListener);
    activeMenuEscapeListener = null;
  }
  if (activePointerMoveListener) {
    window.removeEventListener("mousemove", activePointerMoveListener);
    activePointerMoveListener = null;
  }

  const header = document.querySelector<HTMLElement>("[data-header]");
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const nav = document.querySelector<HTMLElement>("[data-nav]");

  const updateHeaderState = (): void => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
  activeScrollListener = updateHeaderState;

  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let frameId: number | null = null;
    let pointerX = window.innerWidth * 0.5;
    let pointerY = window.innerHeight * 0.35;

    const updatePointerGlow = (): void => {
      frameId = null;
      document.documentElement.style.setProperty("--pointer-x", `${pointerX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${pointerY}px`);
    };

    const updatePointerPosition = (event: MouseEvent): void => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (frameId === null) frameId = window.requestAnimationFrame(updatePointerGlow);
    };

    window.addEventListener("mousemove", updatePointerPosition, { passive: true });
    activePointerMoveListener = updatePointerPosition;
    updatePointerGlow();
  }

  toggle?.addEventListener("click", () => {
    const isOpen = nav?.classList.toggle("is-open") ?? false;
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? (document.documentElement.lang === "vi" ? "Đóng menu" : "Close menu") : (document.documentElement.lang === "vi" ? "Mở menu" : "Open menu"));
    document.body.classList.toggle("menu-is-open", isOpen);
  });

  nav?.querySelectorAll<HTMLAnchorElement>("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
      toggle?.setAttribute("aria-label", document.documentElement.lang === "vi" ? "Mở menu" : "Open menu");
      document.body.classList.remove("menu-is-open");
    });
  });

  const closeMenuOnEscape = (event: KeyboardEvent): void => {
    if (event.key !== "Escape" || !nav?.classList.contains("is-open")) return;
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", document.documentElement.lang === "vi" ? "Mở menu" : "Open menu");
    document.body.classList.remove("menu-is-open");
    toggle?.focus();
  };
  document.addEventListener("keydown", closeMenuOnEscape);
  activeMenuEscapeListener = closeMenuOnEscape;

  const revealItems = gsap.utils.toArray<HTMLElement>(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    gsap.set(revealItems, { autoAlpha: 1, y: 0 });
    return;
  }

  revealItems.forEach((element) => {
    gsap.fromTo(
      element,
      { autoAlpha: 0, y: 42 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.05,
        ease: "expo.out",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
        },
      },
    );
  });

  const scrollProgress = document.querySelector<HTMLElement>("[data-scroll-progress]");
  if (scrollProgress) {
    gsap.to(scrollProgress, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1
      }
    });
  }

};

// Listen to Astro ClientRouter page load event for proper client-side route navigation setup
document.addEventListener("astro:page-load", initAnimations);

