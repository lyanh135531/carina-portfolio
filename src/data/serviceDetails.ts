import type { ImageAsset, Locale, LocalizedText, ServiceId } from "@/data/site";
import { getLocalizedPath } from "@/data/site";

export type ServiceDetailSection = Readonly<{
  title: LocalizedText;
  body: LocalizedText;
}>;

export type ServiceDetail = Readonly<{
  id: ServiceId;
  canonicalSlug: string;
  aliases: readonly string[];
  sourceUrl: string | null;
  title: LocalizedText;
  shortTitle: LocalizedText;
  hero: ImageAsset;
  intro: LocalizedText;
  sections: readonly ServiceDetailSection[];
  gallery: readonly ImageAsset[];
  localeContent: Readonly<Record<Locale, readonly string[]>>;
}>;

export type ServiceDetailStaticPath = Readonly<{
  params: Readonly<{ slug: string }>;
  props: Readonly<{ detail: ServiceDetail }>;
}>;

const text = (vi: string, en: string): LocalizedText => ({ vi, en });

const image = (src: string, vi: string, en: string): ImageAsset => ({
  src,
  alt: text(vi, en),
});

const section = (title: LocalizedText, body: LocalizedText): ServiceDetailSection => ({
  title,
  body,
});

export const serviceDetails: readonly ServiceDetail[] = [
  {
    id: "commercial",
    canonicalSlug: "commercial-campaign",
    aliases: ["chup-hinh-anh-quang-cao"],
    sourceUrl: "https://tronhouse.com/commercial-campaign",
    title: text("Commercial Campaign", "Commercial Campaign"),
    shortTitle: text("Commercial", "Commercial"),
    hero: image(
      "/assets/tronhouse/service-commercial/cover-fb-75d2016aa4.png",
      "Commercial campaign cover",
      "Commercial campaign cover",
    ),
    intro: text(
      "Dịch vụ hình ảnh thương mại dành cho thương hiệu cần key visual, ảnh sản phẩm, campaign visual và bộ ảnh bán hàng có cùng một ngôn ngữ sáng tạo.",
      "Commercial visuals for brands that need key visuals, product photography, campaign assets and sales-ready imagery in one creative language.",
    ),
    sections: [
      section(
        text("Concept-first production", "Concept-first production"),
        text(
          "TRÒN bắt đầu từ mục tiêu truyền thông, sản phẩm và bối cảnh sử dụng để xây dựng mood, set design, ánh sáng và hậu kỳ nhất quán.",
          "TRÒN starts from the communication goal, product and media context, then builds a consistent mood, set design, lighting and retouching direction.",
        ),
      ),
      section(
        text("Campaign-ready assets", "Campaign-ready assets"),
        text(
          "Output được tổ chức cho nhiều điểm chạm: social, ecommerce, banner, POSM và bộ tư liệu thương hiệu nội bộ.",
          "Outputs are shaped for multiple touchpoints: social, ecommerce, banners, POSM and internal brand libraries.",
        ),
      ),
    ],
    gallery: [
      image("/assets/tronhouse/service-commercial/chup-anh-concept-sang-tao-11-1-de0714cf60.png", "Ảnh concept sáng tạo", "Creative concept image"),
      image("/assets/tronhouse/service-commercial/vuong-a7978c7ea4.gif", "Campaign visual động", "Animated campaign visual"),
      image("/assets/tronhouse/service-commercial/cleanser-final-archived-fb-f5e47451f8.jpg", "Ảnh sản phẩm cleanser", "Cleanser product image"),
      image("/assets/tronhouse/service-commercial/rsz-1th-white1-11fef30035.png", "Ảnh thương mại sản phẩm", "Commercial product image"),
      image("/assets/tronhouse/service-commercial/banner-web-mobile-68289326f2.gif", "Banner campaign mobile", "Mobile campaign banner"),
      image("/assets/tronhouse/service-commercial/crop-thumbs-412cf512e9.jpg", "Commercial thumbnail", "Commercial thumbnail"),
    ],
    localeContent: {
      vi: [
        "Phù hợp cho thương hiệu cần một bộ hình ảnh đồng bộ từ ý tưởng đến triển khai.",
        "Tập trung vào tính bán hàng, tính nhận diện và khả năng tái sử dụng trên nhiều kênh.",
      ],
      en: [
        "Built for brands that need a coherent visual set from concept to execution.",
        "Focused on sales clarity, brand recognition and multi-channel reuse.",
      ],
    },
  },
  {
    id: "fashion",
    canonicalSlug: "fashion-campaign",
    aliases: ["chup-anh-thoi-trang-lookbook"],
    sourceUrl: "https://tronhouse.com/fashion-campaign",
    title: text("Fashion Campaign", "Fashion Campaign"),
    shortTitle: text("Fashion", "Fashion"),
    hero: image(
      "/assets/tronhouse/service-fashion/chup-hinh-lookbook-cover-c6baf08d11.jpg",
      "Fashion campaign cover",
      "Fashion campaign cover",
    ),
    intro: text(
      "Fashion service tập trung vào lookbook, campaign, editorial và visual thương mại cho thương hiệu thời trang, phụ kiện và lifestyle.",
      "Fashion service focused on lookbooks, campaigns, editorials and commercial visuals for fashion, accessories and lifestyle brands.",
    ),
    sections: [
      section(
        text("Styling and mood", "Styling and mood"),
        text(
          "Layout, styling, pose, ánh sáng và bối cảnh được xử lý như một hệ thống để giữ tinh thần bộ sưu tập rõ ràng.",
          "Layout, styling, pose, lighting and setting work as one system to keep the collection's attitude clear.",
        ),
      ),
      section(
        text("Lookbook to campaign", "Lookbook to campaign"),
        text(
          "Một buổi sản xuất có thể mở rộng thành lookbook, ecommerce crop, social cutdown và key visual campaign.",
          "One production can extend into lookbook assets, ecommerce crops, social cutdowns and campaign key visuals.",
        ),
      ),
    ],
    gallery: [
      image("/assets/tronhouse/service-fashion/unispace-thumb-dv-1-e4cfc69756.jpg", "Fashion lookbook Unispace", "Unispace fashion lookbook"),
      image("/assets/tronhouse/service-fashion/unispace-thumb-dv-02-0d13fca2cc.jpg", "Fashion visual Unispace", "Unispace fashion visual"),
      image("/assets/tronhouse/service-fashion/000elegant-e337a66df8.jpg", "Elegant fashion visual", "Elegant fashion visual"),
      image("/assets/tronhouse/service-fashion/6-0a69b11fb8.jpg", "Fashion campaign image", "Fashion campaign image"),
      image("/assets/tronhouse/service-fashion/thumb-597700df6d.png", "Fashion thumbnail", "Fashion thumbnail"),
      image("/assets/tronhouse/service-fashion/beautyplus-20221104100716413-save-3be480b2c5.jpg", "Fashion portrait", "Fashion portrait"),
    ],
    localeContent: {
      vi: [
        "Giữ tinh thần bộ sưu tập trong từng khung hình.",
        "Tối ưu cùng lúc cho cảm xúc thương hiệu và nhu cầu bán hàng.",
      ],
      en: [
        "Preserves the spirit of the collection in every frame.",
        "Balances brand emotion with practical selling needs.",
      ],
    },
  },
  {
    id: "creative-design",
    canonicalSlug: "creative-concept",
    aliases: ["chup-hinh-mon-an"],
    sourceUrl: "https://tronhouse.com/creative-concept",
    title: text("Creative Concept", "Creative Concept"),
    shortTitle: text("Creative Design", "Creative Design"),
    hero: image(
      "/assets/tronhouse/service-creative-concept/khung-ngang-thumb-insid-5872fb4d36.jpg",
      "Creative concept cover",
      "Creative concept cover",
    ),
    intro: text(
      "Creative Concept biến sản phẩm và câu chuyện thương hiệu thành hình ảnh có ý tưởng, có bối cảnh và có điểm nhớ.",
      "Creative Concept turns products and brand stories into visuals with a clear idea, setting and memorable hook.",
    ),
    sections: [
      section(
        text("Visual idea system", "Visual idea system"),
        text(
          "Mỗi concept được phát triển từ insight, chất liệu thương hiệu và tình huống sử dụng hình ảnh.",
          "Each concept is developed from insight, brand material and the context where the visual will be used.",
        ),
      ),
      section(
        text("Design-led production", "Design-led production"),
        text(
          "Art direction, set, màu sắc và hậu kỳ được phối hợp để hình ảnh có tính nhận diện cao.",
          "Art direction, set, color and post-production are aligned so the image carries strong recognition.",
        ),
      ),
    ],
    gallery: [
      image("/assets/tronhouse/service-creative-concept/trung-thu-7d57d88379.jpg", "Creative concept Trung Thu", "Mid-autumn creative concept"),
      image("/assets/tronhouse/service-creative-concept/0cheese-f4072adc6c.jpg", "Creative food concept", "Creative food concept"),
      image("/assets/tronhouse/service-creative-concept/ezgif-com-gif-maker-74d4c27280.gif", "Creative concept animation", "Creative concept animation"),
      image("/assets/tronhouse/service-creative-concept/balo-opt4-no-text-vuong-1-b89067aa4c.jpg", "Product creative concept", "Product creative concept"),
      image("/assets/tronhouse/service-creative-concept/main-sequence-0606-sub-0100-26cc2c4e7d.jpg", "CGI concept frame", "CGI concept frame"),
      image("/assets/tronhouse/service-creative-concept/thumb-a4e693b2b7.jpg", "Creative thumbnail", "Creative thumbnail"),
    ],
    localeContent: {
      vi: [
        "Tạo hình ảnh có câu chuyện thay vì chỉ là ảnh đẹp.",
        "Phù hợp cho campaign, launch sản phẩm và social concept series.",
      ],
      en: [
        "Creates visuals with story, not only polished images.",
        "Useful for campaigns, product launches and social concept series.",
      ],
    },
  },
  {
    id: "commercial-videography",
    canonicalSlug: "tvc-videography-film",
    aliases: ["film-videography-viral"],
    sourceUrl: "https://tronhouse.com/tvc-videography-film",
    title: text("TVC Videography Film", "TVC Videography Film"),
    shortTitle: text("Commercial Videography", "Commercial Videography"),
    hero: image(
      "/assets/tronhouse/service-videography/3d-animation-2d16be8ed1.jpg",
      "Commercial videography cover",
      "Commercial videography cover",
    ),
    intro: text(
      "Video thương mại cho sản phẩm, thương hiệu và chiến dịch cần chuyển động, nhịp dựng và visual direction rõ ràng.",
      "Commercial video for products, brands and campaigns that need motion, rhythm and a clear visual direction.",
    ),
    sections: [
      section(
        text("From storyboard to cutdown", "From storyboard to cutdown"),
        text(
          "Quy trình đi từ ý tưởng, storyboard, sản xuất đến hậu kỳ và các phiên bản ngắn cho social.",
          "The workflow moves from idea, storyboard and production to post-production and short social cutdowns.",
        ),
      ),
      section(
        text("Motion that sells", "Motion that sells"),
        text(
          "Tập trung vào khoảnh khắc sản phẩm, texture, hành động và nhịp xem phù hợp từng kênh.",
          "Focuses on product moments, texture, action and viewing rhythm for each channel.",
        ),
      ),
    ],
    gallery: [
      image("/assets/tronhouse/service-videography/2b-f5a52c50a8.png", "Videography frame", "Videography frame"),
      image("/assets/tronhouse/service-videography/corporation-7c97a485b4.jpg", "Corporate video", "Corporate video"),
      image("/assets/tronhouse/service-videography/fashion-thumb-0d157ca37f.jpg", "Fashion video", "Fashion video"),
      image("/assets/tronhouse/service-videography/thumb-moi-1916a65dc5.gif", "Stop motion video", "Stop motion video"),
    ],
    localeContent: {
      vi: [
        "Dành cho TVC, digital video, stop motion và campaign film.",
        "Có thể triển khai nhiều format từ một production master.",
      ],
      en: [
        "For TVC, digital video, stop motion and campaign films.",
        "Can produce multiple formats from one production master.",
      ],
    },
  },
  {
    id: "catalogue-ecommerce",
    canonicalSlug: "catalogue-ecommerce",
    aliases: [],
    sourceUrl: null,
    title: text("Catalogue Ecommerce", "Catalogue Ecommerce"),
    shortTitle: text("Catalogue Ecommerce", "Catalogue Ecommerce"),
    hero: image(
      "/assets/tronhouse/home/dich-vu-cata-800-1068-px-06bf8e6505.gif",
      "Catalogue ecommerce preview",
      "Catalogue ecommerce preview",
    ),
    intro: text(
      "Trang local placeholder cho dịch vụ catalogue ecommerce, giữ người xem ở trong portfolio private thay vì chuyển sang domain ngoài.",
      "A local placeholder page for catalogue ecommerce, keeping viewers inside the private portfolio instead of sending them to an external domain.",
    ),
    sections: [
      section(
        text("Consistent product sets", "Consistent product sets"),
        text(
          "Tập trung vào crop, ánh sáng, màu sắc và layout ổn định cho danh mục sản phẩm lớn.",
          "Focused on stable crop, lighting, color and layout for large product catalogs.",
        ),
      ),
      section(
        text("Ecommerce-ready output", "Ecommerce-ready output"),
        text(
          "Hình ảnh được chuẩn bị cho listing, marketplace, website và bộ quản trị nội dung.",
          "Images are prepared for listings, marketplaces, websites and content management libraries.",
        ),
      ),
    ],
    gallery: [
      image("/assets/tronhouse/home/dich-vu-cata-800-1068-px-06bf8e6505.gif", "Catalogue ecommerce motion", "Catalogue ecommerce motion"),
      image("/assets/tronhouse/home/amazon-final-77423225dd.png", "Amazon logo", "Amazon logo"),
      image("/assets/tronhouse/home/lazada-9b63437c3f.png", "Lazada logo", "Lazada logo"),
      image("/assets/tronhouse/home/ikea-final-2b83fd3f5c.png", "IKEA logo", "IKEA logo"),
    ],
    localeContent: {
      vi: [
        "Placeholder nội bộ cho phase này vì source gốc trỏ sang domain khác.",
        "Có thể thay bằng trang chi tiết đầy đủ khi có source hoặc nội dung riêng.",
      ],
      en: [
        "Internal placeholder for this phase because the source card points to another domain.",
        "Can be replaced with a full detail page once source or custom content is available.",
      ],
    },
  },
  {
    id: "digital-image-retouch",
    canonicalSlug: "digital-image-retouch",
    aliases: ["chinh-sua-hinh-anh"],
    sourceUrl: "https://tronhouse.com/digital-image-retouch",
    title: text("Digital Image Retouch", "Digital Image Retouch"),
    shortTitle: text("Digital Image Retouch", "Digital Image Retouch"),
    hero: image(
      "/assets/tronhouse/service-retouch/untitled-2-894d4c0aee.gif",
      "Digital image retouch before after",
      "Digital image retouch before after",
    ),
    intro: text(
      "Dịch vụ hậu kỳ ảnh chuyên nghiệp cho ảnh sản phẩm, ghost mannequin, clipping path, tách nền, cân chỉnh màu và high-end model retouch.",
      "Professional post-production for product images, ghost mannequin, clipping path, background removal, color correction and high-end model retouching.",
    ),
    sections: [
      section(
        text("Clean production finish", "Clean production finish"),
        text(
          "Ảnh được xử lý để đồng bộ màu sắc, bề mặt, ánh sáng và cảm giác chất liệu mà vẫn giữ tính thật của sản phẩm.",
          "Images are finished for consistent color, surface, lighting and material feel while keeping the product believable.",
        ),
      ),
      section(
        text("Scalable retouch workflow", "Scalable retouch workflow"),
        text(
          "Phù hợp cho bộ ảnh campaign nhỏ lẫn volume ảnh ecommerce cần chất lượng ổn định.",
          "Works for small campaign sets as well as ecommerce volumes that need stable quality.",
        ),
      ),
    ],
    gallery: [
      image("/assets/tronhouse/service-retouch/untitled-2-894d4c0aee.gif", "Retouch comparison one", "Retouch comparison one"),
      image("/assets/tronhouse/service-retouch/step-111f2ddb0d.gif", "Retouch workflow step", "Retouch workflow step"),
      image("/assets/tronhouse/service-retouch/untitled-3-44f878f617.gif", "Retouch comparison two", "Retouch comparison two"),
    ],
    localeContent: {
      vi: [
        "Bao gồm retouch sản phẩm, ghost mannequin, clipping path và cân chỉnh màu.",
        "Hỗ trợ chuẩn hóa visual cho campaign, marketplace và catalogue.",
      ],
      en: [
        "Includes product retouching, ghost mannequin, clipping path and color correction.",
        "Helps standardize visuals for campaigns, marketplaces and catalogs.",
      ],
    },
  },
  {
    id: "integrated-marketing",
    canonicalSlug: "IMC",
    aliases: ["tu-van-chien-luoc"],
    sourceUrl: "https://tronhouse.com/IMC",
    title: text("Integrated Marketing Communication", "Integrated Marketing Communication"),
    shortTitle: text("IMC", "IMC"),
    hero: image(
      "/assets/tronhouse/service-imc/bg-tu-van-chien-luoc-74b42a6748.jpg",
      "Integrated marketing communication background",
      "Integrated marketing communication background",
    ),
    intro: text(
      "Tư vấn định hướng hình ảnh và brand style guide cho thương hiệu cần một hệ thống nhận diện nhất quán hơn trên các kênh truyền thông.",
      "Visual direction and brand style guide consulting for brands that need a more consistent identity system across communication channels.",
    ),
    sections: [
      section(
        text("Brand style guide", "Brand style guide"),
        text(
          "Xác định cá tính, mood, màu sắc, cách dùng hình ảnh và nguyên tắc triển khai để đội ngũ dễ lặp lại.",
          "Defines personality, mood, color, image usage and execution rules so teams can repeat the system.",
        ),
      ),
      section(
        text("Communication direction", "Communication direction"),
        text(
          "Kết nối insight, kênh sử dụng và mục tiêu thương hiệu thành định hướng visual có thể sản xuất.",
          "Connects insight, channel usage and brand goals into a visual direction that can be produced.",
        ),
      ),
    ],
    gallery: [
      image("/assets/tronhouse/service-imc/bg-tu-van-chien-luoc-74b42a6748.jpg", "Brand style guide background", "Brand style guide background"),
      image("/assets/tronhouse/home/brand1-c2f5e204b6.gif", "Brand guide service motion", "Brand guide service motion"),
      image("/assets/tronhouse/home/all-0008-sony-1-11a297f028.png", "Sony client mark", "Sony client mark"),
      image("/assets/tronhouse/home/all-0005-vivo-4486d770b9.png", "Vivo client mark", "Vivo client mark"),
    ],
    localeContent: {
      vi: [
        "Dành cho thương hiệu cần chuẩn hóa visual direction trước khi mở rộng sản xuất nội dung.",
        "Tập trung vào tính nhất quán, khả năng triển khai và định vị hình ảnh dài hạn.",
      ],
      en: [
        "For brands that need to standardize visual direction before scaling content production.",
        "Focused on consistency, execution clarity and long-term visual positioning.",
      ],
    },
  },
  {
    id: "animation",
    canonicalSlug: "2D-3D-animation-cgi",
    aliases: ["chup-hinh-kien-truc-noi-that"],
    sourceUrl: "https://tronhouse.com/2D-3D-animation-cgi",
    title: text("2D - 3D Animation Video Campaign", "2D - 3D Animation Video Campaign"),
    shortTitle: text("2D - 3D Animation Videography", "2D - 3D Animation Videography"),
    hero: image(
      "/assets/tronhouse/service-animation/cover-fb-0310-f99ecb726b.jpg",
      "2D 3D animation cover",
      "2D 3D animation cover",
    ),
    intro: text(
      "Dịch vụ animation, CGI và VFX dành cho campaign cần chuyển động, không gian ảo, FOOH hoặc key visual 3D.",
      "Animation, CGI and VFX for campaigns that need motion, virtual space, FOOH or 3D key visuals.",
    ),
    sections: [
      section(
        text("CGI and VFX storytelling", "CGI and VFX storytelling"),
        text(
          "Kết hợp sản phẩm, bối cảnh 3D và chuyển động để tạo những khoảnh khắc visual khó thực hiện bằng production truyền thống.",
          "Combines products, 3D environments and motion to create visual moments that are difficult with traditional production.",
        ),
      ),
      section(
        text("Campaign motion assets", "Campaign motion assets"),
        text(
          "Output có thể mở rộng thành hero film, social loop, animated key visual và still frame cho campaign.",
          "Outputs can extend into hero films, social loops, animated key visuals and still frames for campaigns.",
        ),
      ),
    ],
    gallery: [
      image("/assets/tronhouse/service-animation/screenshot-1955-a645bd25e1.png", "Animation campaign frame", "Animation campaign frame"),
      image("/assets/tronhouse/service-animation/bahari-efc96f2a5f.png", "3D campaign Bahari", "Bahari 3D campaign"),
      image("/assets/tronhouse/service-animation/genesis-thumbnail-57b0018af4.jpg", "Genesis animation thumbnail", "Genesis animation thumbnail"),
      image("/assets/tronhouse/service-animation/behance-cover-248aeb3701.jpg", "CGI visual cover", "CGI visual cover"),
      image("/assets/tronhouse/service-animation/3dfashion-5eecf1733c.png", "3D fashion visual", "3D fashion visual"),
      image("/assets/tronhouse/service-animation/behance-cover-manytouches-9d2f6492f2.jpg", "Many Touches animation cover", "Many Touches animation cover"),
    ],
    localeContent: {
      vi: [
        "Phù hợp cho FOOH, CGI key visual, animation campaign và visual có yếu tố ảo.",
        "Tạo chuyển động cho những ý tưởng vượt khỏi giới hạn studio vật lý.",
      ],
      en: [
        "Useful for FOOH, CGI key visuals, animation campaigns and virtual visual ideas.",
        "Adds motion to ideas that go beyond the limits of physical studio production.",
      ],
    },
  },
];

const buildServiceDetailSlugMap = (): ReadonlyMap<string, ServiceDetail> => {
  const slugMap = new Map<string, ServiceDetail>();

  for (const detail of serviceDetails) {
    const slugs = [detail.canonicalSlug, ...detail.aliases];

    for (const slug of slugs) {
      if (slugMap.has(slug)) {
        throw new Error(`Duplicate service detail slug: ${slug}`);
      }

      slugMap.set(slug, detail);
    }
  }

  return slugMap;
};

export const serviceDetailSlugMap = buildServiceDetailSlugMap();

export const getServiceDetailBySlug = (slug: string): ServiceDetail | undefined =>
  serviceDetailSlugMap.get(slug);

export const getServiceDetailPath = (locale: Locale, detail: ServiceDetail): string =>
  getLocalizedPath(locale, `/${detail.canonicalSlug}`);

export const getServiceDetailStaticPaths = (): readonly ServiceDetailStaticPath[] =>
  serviceDetails.flatMap((detail) =>
    [detail.canonicalSlug, ...detail.aliases].map((slug) => ({
      params: { slug },
      props: { detail },
    })),
  );
