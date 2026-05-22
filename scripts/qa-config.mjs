export const sourceOrigin = "https://tronhouse.com";
export const localOrigin = process.env.QA_LOCAL_ORIGIN ?? "http://127.0.0.1:4321";
export const qaOutputRoot = ".qa";
export const captureDelayMs = 1600;
export const localServerPort = 4321;

export const viewports = [
  { id: "desktop", width: 1440, height: 1600 },
  { id: "tablet", width: 768, height: 1200 },
  { id: "mobile", width: 390, height: 1200 },
];

export const qaPages = [
  { id: "home", route: "/", sourcePath: "/" },
  { id: "services", route: "/tron-services", sourcePath: "/tron-services" },
  { id: "about", route: "/about-tron", sourcePath: "/about-tron" },
  { id: "credential", route: "/tron-credential", sourcePath: "/tron-credential" },
  { id: "blog", route: "/blog", sourcePath: "/blog" },
  { id: "contact", route: "/contact", sourcePath: "/contact" },
];

export const localePaths = [
  { locale: "vi", prefix: "" },
  { locale: "en", prefix: "/en" },
];

export const getSourceUrl = (page) => `${sourceOrigin}${page.sourcePath}`;

export const getLocalUrl = (page, locale) => {
  const localePath = locale === "vi" ? "" : `/${locale}`;
  const route = page.route === "/" ? "" : page.route;

  return `${localOrigin}${localePath}${route || "/"}`;
};
