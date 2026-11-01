import { MetadataRoute } from 'next'
import { staticBlogs } from '@/lib/blog-data'

const currentAffairsTopicSlugs = [
  'brics-summit-2026',
  'sco-summit-2026',
  'nepal-flash-flood-2026',
  'nfhs-6',
  'capf-act-2026',
  'artemis-ii',
  'nato-withdrawal',
  'ircc-india',
  'fcra-amendment-2026',
  'constitution-131st-amendment',
  'posh-act',
  'adi-shankaracharya',
  'super-el-nino',
  'uae-exit-opec',
  'ncrb-2024',
  'biodiversity-project',
  'ganga-expressway',
  'india-ndc-2035',
  'abraham-accords',
  'ebola-outbreak-2026',
  'semiconductor-roadmap',
  'srs-2024',
  'india-uae-agreements',
  'india-nz-fta',
  'seat-mission',
  'vb-ram-g',
  'somnath-amrut-parv',
  'coal-gasification',
  'unpaid-domestic-labour',
  'g7-summit-2026',
  'relos',
  'kishau-dam',
  'project-ganga',
  'india-japan-summit',
  'sd-report-2026',
  'isp-index',
  'india-unsc-2028',
  'national-honour-amendment-2026',
  'sarnath-unesco',
  'public-exams-amendment-2026',
  'tribunals-reforms-bill-2026',
  'ramsar-sites-2026',
  'commonwealth-games-2026',
  'padma-awards-2026',
  'national-international-current-affairs-2026',
  'scheme-2026',
  'science-technology',
  'defence',
  'awards-honours-2026',
  'sports',
  'indexes-rankings-reports-2026',
  'important-days-themes-2026',
  'persons-in-news-2026',
  'one-liner-current-affairs-2026',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cettest.site'
  // Only include lastModified when an actual content update date is known.

  return [
    // 🔥 Homepage
    {
      url: baseUrl,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // 🎯 Core Pages
    {
      url: `${baseUrl}/mock-test`,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/study-materials-hub`,
      changeFrequency: 'daily',
      priority: 0.95,
    },

    // 🔔 Live exam alerts
    // {
    //   url: `${baseUrl}/exam-alerts`,
    //   lastModified: now,
    //   changeFrequency: 'daily',
    //   priority: 1.0,
    // },

    // 📄 Informational
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // 📝 Blog index
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'daily',
      priority: 0.9,
    },

    // ⚖️ Legal
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    // {
    //   url: `${baseUrl}/refund-policy`,
    //   lastModified: now,
    //   changeFrequency: 'yearly',
    //   priority: 0.4,
    // },

    // 📚 Exams Pages
    // {
    //   url: `${baseUrl}/exams`,
    //   lastModified: now,
    //   changeFrequency: 'daily',
    //   priority: 0.95,
    // },
    {
      url: `${baseUrl}/exams/ssc`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exams/ssc-cgl`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exams/railway`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exams/railway-rrb-ntpc`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exams/haryana`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exams/hssc-cet`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exams/uksssc`,
      changeFrequency: 'daily',
      priority: 0.9,
    },

    // 🧪 Demo index
    // {
    //   url: `${baseUrl}/demo`,
    //   lastModified: now,
    //   changeFrequency: 'weekly',
    //   priority: 0.7,
    // },

    // 📖 Public resource pages
    // {
    //   url: `${baseUrl}/careers`,
    //   lastModified: now,
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
    {
      url: `${baseUrl}/study-materials-hub/asian-games-2026`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // {
    //   url: `${baseUrl}/haryana-previous-year-papers`,
    //   lastModified: now,
    //   changeFrequency: 'daily',
    //   priority: 0.9,
    // },

    // Haryana Exam Syllabus Pages
    {
      url: `${baseUrl}/haryana-exam-syllabus`,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/haryana-cet-group-c-syllabus`,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/haryana-cet-group-d-syllabus`,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/haryana-police-constable-syllabus`,
      changeFrequency: 'daily',
      priority: 1,
    },

    // Haryana GK Study Material Pages
    {
      url: `${baseUrl}/haryana-gk`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/haryana-basic-info`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/ancient-history`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/medieval-history`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/modern-history`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/climate`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/formation-of-haryana`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/geographical-structure`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/soil-resources`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/drainage-system`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/forest-resources`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/national-parks`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/irrigation`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/agriculture`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/industries`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/minerals-energy`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/judiciary`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/transport`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/administration`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/panchayati-raj`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/district-profile`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/archaeological-sites`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/tourism`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/art-crafts`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/famous-personalities`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/welfare-schemes`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
     {
      url: `${baseUrl}/haryana-gk/sports-awards`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
     {
      url: `${baseUrl}/haryana-gk/demographics`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
     {
      url: `${baseUrl}/haryana-gk/education-health`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
     {
      url: `${baseUrl}/haryana-gk/languages-literature`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
     {
      url: `${baseUrl}/haryana-gk/cultural-heritage`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
     {
      url: `${baseUrl}/haryana-gk/fairs-festivals`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
     {
      url: `${baseUrl}/haryana-gk/music-dance`,
      changeFrequency: 'daily',
      priority: 0.9,
    },

      // UKSSSC Exam Syllabus Pages
      {
        url: `${baseUrl}/syllabus`,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/uksssc-exam-syllabus`,
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/uksssc-vdo-syllabus`,
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/uksssc-police-constable-syllabus`,
        changeFrequency: 'daily',
        priority: 1,
      },

      // Current Affairs Pages
      {
        url: `${baseUrl}/current-affairs`,
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/current-affairs/september-2026`,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      // Topic-wise Current Affairs: 54 individual pages
      ...currentAffairsTopicSlugs.map((slug) => ({
        url: `${baseUrl}/current-affairs/by-topic/${slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      })),

      ...staticBlogs.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      })),
  ]
}
