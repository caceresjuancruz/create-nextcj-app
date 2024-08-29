import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url:
        process.env.NEXT_PUBLIC_SITE_URL + '/example' ||
        'http://localhost:3000/example',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6
    }
  ]
}
