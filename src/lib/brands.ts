export interface Brand {
  name: string;
  brandColor: string;
  shopifyDomain: string;
  storeDomain: string;
  description: string;
  logo: string;
  invertLogo?: boolean;
}

const BASE_PATH = process.env.NODE_ENV === "production" ? "/zion-corporate" : "";

export const brands: Brand[] = [
  {
    name: "charme",
    brandColor: "#ec4899",
    shopifyDomain: "db4ea1-fd.myshopify.com",
    storeDomain: "charmeofficial.site",
    description: "エレガンスとモダンの融合",
    logo: `${BASE_PATH}/brands/charme.png`,
  },
  {
    name: "SUTORE",
    brandColor: "#8b5cf6",
    shopifyDomain: "b86980-4.myshopify.com",
    storeDomain: "sutoreofficial.com",
    description: "ストリートの新定義",
    logo: `${BASE_PATH}/brands/SUTORE.png`,
  },
  {
    name: "SAREON",
    brandColor: "#8b5cf6",
    shopifyDomain: "g1j0wx-3n.myshopify.com",
    storeDomain: "sareon.jp",
    description: "洗練された日常着",
    logo: `${BASE_PATH}/brands/SAREON.png`,
  },
  {
    name: "Mearicheek",
    brandColor: "#f59e0b",
    shopifyDomain: "59998e-92.myshopify.com",
    storeDomain: "mearicheek.com",
    description: "遊び心あるスタイル",
    logo: `${BASE_PATH}/brands/Mearicheek.png`,
    invertLogo: true,
  },
  {
    name: "100StarS",
    brandColor: "#ef4444",
    shopifyDomain: "b92f06-2.myshopify.com",
    storeDomain: "100starsofficial.com",
    description: "大胆な自己表現",
    logo: `${BASE_PATH}/brands/100StarS.png`,
  },
  {
    name: "SLAMZ",
    brandColor: "#06b6d4",
    shopifyDomain: "t9bvj7-a4.myshopify.com",
    storeDomain: "slamz.jp",
    description: "アクティブ＆クール",
    logo: `${BASE_PATH}/brands/SLAMZ.png`,
  },
  {
    name: "GEEK",
    brandColor: "#3b82f6",
    shopifyDomain: "6cdd7f-3.myshopify.com",
    storeDomain: "geek-official.site",
    description: "カルチャーを纏う",
    logo: `${BASE_PATH}/brands/GEEK.png`,
  },
  {
    name: "WEVIA",
    brandColor: "#10b981",
    shopifyDomain: "g9w6sg-s5.myshopify.com",
    storeDomain: "www.wevia.jp",
    description: "ナチュラル＆ミニマル",
    logo: `${BASE_PATH}/brands/WEVIA.png`,
  },
];
