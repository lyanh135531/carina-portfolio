import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector<HTMLElement>("[data-header]");
const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const nav = document.querySelector<HTMLElement>("[data-nav]");

const updateHeaderState = (): void => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

toggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open") ?? false;
  toggle.setAttribute("aria-expanded", String(isOpen));
});

const revealItems = gsap.utils.toArray<HTMLElement>(".reveal");

revealItems.forEach((element) => {
  gsap.fromTo(
    element,
    { autoAlpha: 0, y: 36 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 86%",
      },
    },
  );
});

const heroImage = document.querySelector<HTMLElement>("[data-hero-image]");

if (heroImage) {
  gsap.to(heroImage, {
    yPercent: 8,
    scale: 1.05,
    ease: "none",
    scrollTrigger: {
      trigger: "[data-hero]",
      start: "top top",
      end: "bottom top",
      scrub: 0.7,
    },
  });
}
