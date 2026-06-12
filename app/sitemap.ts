import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: "https://opennovaia.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: "https://opennovaia.com/agentes-ia",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: "https://opennovaia.com/automatizacion-whatsapp",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: "https://opennovaia.com/casos-de-exito",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85
    },
    {
      url: "https://opennovaia.com/chatbots-ia",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85
    },
    {
      url: "https://opennovaia.com/demo",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: "https://opennovaia.com/propuesta",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85
    },
    {
      url: "https://opennovaia.com/embudo",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    }
  ];

  const blogRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://opennovaia.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85
    },
    ...blogPosts.map((post) => ({
      url: `https://opennovaia.com/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.75
    }))
  ];

  return [...routes, ...blogRoutes];
}
