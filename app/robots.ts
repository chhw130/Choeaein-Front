import { MetadataRoute } from "next";

export const robot = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap: "https://www.choeaein.click/sitemap.xml",
  };
};
