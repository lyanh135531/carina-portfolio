const sourceOrigin = "https://tronhouse.com";
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
  { id: "services", route: "/services", sourcePath: "/services" },
  { id: "about", route: "/about", sourcePath: "/about" },
  { id: "credential", route: "/credential", sourcePath: "/credential" },
  { id: "blog", route: "/blog", sourcePath: "/blog" },
  { id: "contact", route: "/contact", sourcePath: "/contact" },
  { id: "service-commercial", route: "/commercial-campaign", sourcePath: "/commercial-campaign" },
  { id: "service-fashion", route: "/fashion-campaign", sourcePath: "/fashion-campaign" },
  { id: "service-creative-concept", route: "/creative-concept", sourcePath: "/creative-concept" },
  { id: "service-videography", route: "/tvc-videography-film", sourcePath: "/tvc-videography-film" },
  { id: "service-catalogue-ecommerce", route: "/catalogue-ecommerce", sourcePath: null },
  { id: "service-retouch", route: "/digital-image-retouch", sourcePath: "/digital-image-retouch" },
  { id: "service-imc", route: "/IMC", sourcePath: "/IMC" },
  { id: "service-animation", route: "/2D-3D-animation-cgi", sourcePath: "/2D-3D-animation-cgi" },
];


export const getSourceUrl = (page) => {
  if (!page.sourcePath) {
    throw new Error(`QA page has no sourcePath: ${page.id}`);
  }

  return `${sourceOrigin}${page.sourcePath}`;
};

export const getLocalUrl = (page, locale) => {
  const localePath = locale === "vi" ? "" : `/${locale}`;
  const route = page.route === "/" ? "" : page.route;

  return `${localOrigin}${localePath}${route || "/"}`;
};
