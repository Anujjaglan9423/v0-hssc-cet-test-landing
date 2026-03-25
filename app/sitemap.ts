import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cettest.site'

  return [
    // Public/Main Pages (Before Login)
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/demo`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mock-test`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Legal Pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    // HSSC CET Exam Pages
    {
      url: `${baseUrl}/exams/hssc-cet`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/exams/haryana-police`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/exams/haryana-clerk`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/exams/hssc-group-d`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    // SSC Exam Pages
    {
      url: `${baseUrl}/exams/ssc-cgl`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/exams/ssc-chsl`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/exams/ssc-mts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    // RRB Railway Exam Pages
    {
      url: `${baseUrl}/exams/railway-rrb-ntpc`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/exams/railway-group-d`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/exams/rrb-alp`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    // UKSSSC Uttarakhand Exam Pages
    {
      url: `${baseUrl}/exams/uksssc`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/exams/uttarakhand-vdo`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/exams/uttarakhand-patwari`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    // Category Pages (if applicable)
    {
      url: `${baseUrl}/exams/ssc`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exams/railway`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exams/haryana`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exams/uttarakhand`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
