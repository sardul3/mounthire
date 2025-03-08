import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mounthire.com' // Replace with your actual domain when deployed
  
  // Define your routes
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/blog',
  ]
  
  // Current date for lastModified
  const currentDate = new Date()
  
  // Generate sitemap entries
  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
} 