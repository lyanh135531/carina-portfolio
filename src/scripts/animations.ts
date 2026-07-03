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

const heroImage = document.querySelector<HTMLElement>("[data-hero-image]");

if (heroImage) {
  const media = gsap.matchMedia();

  media.add("(min-width: 901px)", () => {
    gsap.to(heroImage, {
      yPercent: 6,
      scale: 1.035,
      ease: "none",
      scrollTrigger: {
        trigger: "[data-hero]",
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      },
    });
  });

  media.add("(max-width: 900px)", () => {
    gsap.to(heroImage, {
      yPercent: 3,
      scale: 1.015,
      ease: "none",
      scrollTrigger: {
        trigger: "[data-hero]",
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      },
    });
  });
}
