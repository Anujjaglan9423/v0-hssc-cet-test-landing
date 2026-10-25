// import { MetadataRoute } from 'next'
// import { staticBlogs } from '@/lib/blog-data'

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = 'https://cettest.site'
//   const now = new Date()

//   return [
//     // 🔥 Homepage
//     {
//       url: baseUrl,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 1.0,
//     },

//     // 🔐 Auth Pages
//     {
//       url: `${baseUrl}/login`,
//       lastModified: now,
//       changeFrequency: 'monthly',
//       priority: 0.6,
//     },
//     {
//       url: `${baseUrl}/signup`,
//       lastModified: now,
//       changeFrequency: 'monthly',
//       priority: 0.7,
//     },

//     // 🎯 Core Pages
//     {
//       url: `${baseUrl}/mock-test`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.95,
//     },
//     {
//       url: `${baseUrl}/study-materials-hub`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.95,
//     },

//     // 🔔 Live exam alerts
//     {
//       url: `${baseUrl}/exam-alerts`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 1.0,
//     },

//     // 📄 Informational
//     {
//       url: `${baseUrl}/about`,
//       lastModified: now,
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/contact`,
//       lastModified: now,
//       changeFrequency: 'monthly',
//       priority: 0.7,
//     },

//     // 📝 Blog index
//     {
//       url: `${baseUrl}/blog`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },

//     // ⚖️ Legal
//     {
//       url: `${baseUrl}/privacy-policy`,
//       lastModified: now,
//       changeFrequency: 'yearly',
//       priority: 0.4,
//     },
//     {
//       url: `${baseUrl}/terms-of-service`,
//       lastModified: now,
//       changeFrequency: 'yearly',
//       priority: 0.4,
//     },
//     // {
//     //   url: `${baseUrl}/refund-policy`,
//     //   lastModified: now,
//     //   changeFrequency: 'yearly',
//     //   priority: 0.4,
//     // },

//     // 📚 Exams Pages
//     {
//       url: `${baseUrl}/exams`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.95,
//     },
//     {
//       url: `${baseUrl}/exams/ssc`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/exams/ssc-cgl`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/exams/railway`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/exams/railway-rrb-ntpc`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/exams/haryana`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/exams/hssc-cet`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/exams/uksssc`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },

//     // 🧪 Demo index
//     {
//       url: `${baseUrl}/demo`,
//       lastModified: now,
//       changeFrequency: 'weekly',
//       priority: 0.7,
//     },

//     // 📖 Public resource pages
//     {
//       url: `${baseUrl}/careers`,
//       lastModified: now,
//       changeFrequency: 'monthly',
//       priority: 0.6,
//     },
//     {
//       url: `${baseUrl}/study-materials-hub/asian-games-2026`,
//       lastModified: now,
//       changeFrequency: 'weekly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/haryana-previous-year-papers`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },

//     // Haryana Exam Syllabus Pages
//     {
//       url: `${baseUrl}/haryana-exam-syllabus`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/haryana-cet-group-c-syllabus`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 1,
//     },
//     {
//       url: `${baseUrl}/haryana-cet-group-d-syllabus`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 1,
//     },
//     {
//       url: `${baseUrl}/haryana-police-constable-syllabus`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 1,
//     },

//     // Haryana GK Study Material Pages
//     {
//       url: `${baseUrl}/haryana-gk`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/haryana-basic-info`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/ancient-history`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/medieval-history`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/modern-history`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/climate`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/formation-of-haryana`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/geographical-structure`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/soil-resources`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/drainage-system`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/forest-resources`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/national-parks`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/irrigation`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/agriculture`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/industries`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/minerals-energy`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/judiciary`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/transport`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/administration`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/panchayati-raj`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/district-profile`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/archaeological-sites`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/tourism`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/art-crafts`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/famous-personalities`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/haryana-gk/welfare-schemes`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//      {
//       url: `${baseUrl}/haryana-gk/sports-awards`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//      {
//       url: `${baseUrl}/haryana-gk/demographics`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//      {
//       url: `${baseUrl}/haryana-gk/education-health`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//      {
//       url: `${baseUrl}/haryana-gk/languages-literature`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//      {
//       url: `${baseUrl}/haryana-gk/cultural-heritage`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//      {
//       url: `${baseUrl}/haryana-gk/fairs-festivals`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//      {
//       url: `${baseUrl}/haryana-gk/music-dance`,
//       lastModified: now,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },

//       // UKSSSC Exam Syllabus Pages
//       {
//         url: `${baseUrl}/syllabus`,
//         lastModified: now,
//         changeFrequency: 'daily',
//         priority: 0.9,
//       },
//       {
//         url: `${baseUrl}/uksssc-exam-syllabus`,
//         lastModified: now,
//         changeFrequency: 'daily',
//         priority: 1,
//       },
//       {
//         url: `${baseUrl}/uksssc-vdo-syllabus`,
//         lastModified: now,
//         changeFrequency: 'daily',
//         priority: 1,
//       },
//       {
//         url: `${baseUrl}/uksssc-police-constable-syllabus`,
//         lastModified: now,
//         changeFrequency: 'daily',
//         priority: 1,
//       },

//       // Current Affairs Pages
//       {
//         url: `${baseUrl}/current-affairs`,
//         lastModified: now,
//         changeFrequency: 'daily',
//         priority: 1,
//       },
//       {
//         url: `${baseUrl}/current-affairs/january-2026`,
//         lastModified: now,
//         changeFrequency: 'daily',
//         priority: 0.9,
//       },
//       {
//         url: `${baseUrl}/current-affairs/february-2026`,
//         lastModified: now,
//         changeFrequency: 'daily',
//         priority: 0.9,
//       },
//       {
//         url: `${baseUrl}/current-affairs/march-2026`,
//         lastModified: now,
//         changeFrequency: 'daily',
//         priority: 0.9,
//       },
//       {
//         url: `${baseUrl}/current-affairs/october-2025`,
//         lastModified: now,
//         changeFrequency: 'daily',
//         priority: 0.9,
//       },
//       {
//         url: `${baseUrl}/current-affairs/november-2025`,
//         lastModified: now,
//         changeFrequency: 'daily',
//         priority: 0.9,
//       },
//       {
//         url: `${baseUrl}/current-affairs/december-2025`,
//         lastModified: now,
//         changeFrequency: 'monthly',
//         priority: 0.9,
//       },
//       {
//         url: `${baseUrl}/current-affairs/september-2026`,
//         lastModified: now,
//         changeFrequency: 'daily',
//         priority: 0.9,
//       },
//       ...staticBlogs.map((post) => ({
//         url: `${baseUrl}/blog/${post.slug}`,
//         lastModified: post.date,
//         changeFrequency: 'monthly' as const,
//         priority: 0.8,
//       })),
//   ]
// }


import { MetadataRoute } from 'next'
import { staticBlogs } from '@/lib/blog-data'

// Topic IDs from the current-affairs topic cards. Keep this list in sync with published routes.
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
  'india-101st-ramsar-site-2026',
  'commonwealth-games-2026',
  'padma-awards-2026',
  'national-international-current-affairs-2026',
  'scheme-2026',
  'science-technology-2026',
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
  const now = new Date()

  return [
    // 🔥 Homepage
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // 🔐 Auth Pages
    {
      url: `${baseUrl}/login`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // 🎯 Core Pages
    {
      url: `${baseUrl}/mock-test`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/study-materials-hub`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },

    // 🔔 Live exam alerts
    {
      url: `${baseUrl}/exam-alerts`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // 📄 Informational
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // 📝 Blog index
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },

    // ⚖️ Legal
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: now,
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
    {
      url: `${baseUrl}/exams`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/exams/ssc`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exams/ssc-cgl`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exams/railway`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exams/railway-rrb-ntpc`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exams/haryana`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exams/hssc-cet`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exams/uksssc`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },

    // 🧪 Demo index
    {
      url: `${baseUrl}/demo`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // 📖 Public resource pages
    {
      url: `${baseUrl}/careers`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/study-materials-hub/asian-games-2026`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/haryana-previous-year-papers`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },

    // Haryana Exam Syllabus Pages
    {
      url: `${baseUrl}/haryana-exam-syllabus`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/haryana-cet-group-c-syllabus`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/haryana-cet-group-d-syllabus`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/haryana-police-constable-syllabus`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },

    // Haryana GK Study Material Pages
    {
      url: `${baseUrl}/haryana-gk`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/haryana-basic-info`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/ancient-history`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/medieval-history`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/modern-history`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/climate`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/formation-of-haryana`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/geographical-structure`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/soil-resources`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/drainage-system`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/forest-resources`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/national-parks`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/irrigation`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/agriculture`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/industries`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/minerals-energy`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/judiciary`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/transport`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/administration`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/panchayati-raj`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/district-profile`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/archaeological-sites`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/tourism`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/art-crafts`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/famous-personalities`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/haryana-gk/welfare-schemes`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
     {
      url: `${baseUrl}/haryana-gk/sports-awards`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
     {
      url: `${baseUrl}/haryana-gk/demographics`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
     {
      url: `${baseUrl}/haryana-gk/education-health`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
     {
      url: `${baseUrl}/haryana-gk/languages-literature`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
     {
      url: `${baseUrl}/haryana-gk/cultural-heritage`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
     {
      url: `${baseUrl}/haryana-gk/fairs-festivals`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
     {
      url: `${baseUrl}/haryana-gk/music-dance`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },

      // UKSSSC Exam Syllabus Pages
      {
        url: `${baseUrl}/syllabus`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/uksssc-exam-syllabus`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/uksssc-vdo-syllabus`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/uksssc-police-constable-syllabus`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 1,
      },

      // Current Affairs Pages
      {
        url: `${baseUrl}/current-affairs`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/current-affairs/january-2026`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/current-affairs/february-2026`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/current-affairs/march-2026`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/current-affairs/october-2025`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/current-affairs/november-2025`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/current-affairs/december-2025`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/current-affairs/september-2026`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      // Topic-wise Current Affairs: 54 individual pages
      ...currentAffairsTopicSlugs.map((slug) => ({
        url: `${baseUrl}/current-affairs/by-topic/${slug}`,
        lastModified: now,
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