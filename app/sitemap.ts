import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.choeaein.click",
      lastModified: new Date(),
    },
    {
      url: "https://www.choeaein.click/mypage",
      lastModified: new Date(),
    },
  ];
}
