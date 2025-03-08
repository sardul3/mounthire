/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mounthire.com', // Replace with your actual domain when deployed
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://mounthire.com/sitemap.xml', // Replace with your actual domain when deployed
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
    ],
  },
  exclude: ['/private/*', '/admin/*'],
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
} 