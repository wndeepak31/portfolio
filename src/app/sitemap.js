export default function sitemap() {
  const baseUrl = 'https://www.apextechplus.com';
  const currentDate = new Date().toISOString();

  const routes = [
    // Core Pages
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/track-record', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/expertise', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/company', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/mission', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/how-to-use', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },

    // Core Service Specializations
    { path: '/services/custom-saas', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/services/headless-shopify', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/services/webgl-3d-configurators', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/services/ai-automation', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/cloud-architecture', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/frontend-excellence', priority: 0.8, changeFrequency: 'monthly' },

    // Compliance & Legal
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/refund', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/security', priority: 0.4, changeFrequency: 'monthly' },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
