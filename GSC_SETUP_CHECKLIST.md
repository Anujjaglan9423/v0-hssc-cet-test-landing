# Google Search Console Setup Checklist - HSSC CET Test

## Step 1: Initial Setup (5-10 minutes)

### In Google Search Console:
- [ ] Go to https://search.google.com/search-console
- [ ] Click "Start now" if first time
- [ ] Add property: cettest.site
- [ ] Choose verification method (Domain or URL prefix)

### Domain Verification:
- [ ] If using Domain verification:
  - Add DNS TXT record provided by Google
  - Record: `google-site-verification=lm_5SF7FbX7_uM8Ze3BkTudNFttvMjDieo6Tz0hQqEY`
  - (This is already in your layout.tsx)

### URL Prefix Method (Alternative):
- [ ] Add `https://cettest.site`
- [ ] Choose "HTML file" or "HTML tag" verification
- [ ] Upload or add meta tag to layout.tsx (already done ✓)

## Step 2: Submit Sitemap (2-3 minutes)

- [ ] Go to "Sitemaps" section in GSC
- [ ] Click "Add/test sitemap"
- [ ] Enter: `https://cettest.site/sitemap.xml`
- [ ] Click "Submit"
- [ ] Wait 30 seconds for processing
- [ ] Verify status shows "Successful"

## Step 3: Monitor Coverage (Ongoing)

### Coverage Report:
- [ ] Click "Coverage" in sidebar
- [ ] Check for errors and warnings
- [ ] Fix any "Excluded by noindex" issues
- [ ] Monitor "Valid" URLs (should be increasing)

Expected Coverage:
- Homepage ✓
- About page ✓
- Mock test page ✓
- HSSC CET Guide (new) ✓
- Blog pages ✓
- Student dashboard pages (might be behind login)

## Step 4: Performance Monitoring (Weekly)

### Performance Report:
- [ ] Click "Performance" in sidebar
- [ ] Check "Total Clicks" (goal: increasing)
- [ ] Check "Total Impressions" (goal: increasing)
- [ ] Monitor "Average Position" (goal: improving)
- [ ] Check "CTR" (goal: >15%)

### Target Keywords to Monitor:
- [ ] "HSSC CET test"
- [ ] "HSSC CET mock test"
- [ ] "free HSSC CET mock tests"
- [ ] "Haryana exam preparation"
- [ ] "CET exam"
- [ ] "HSSC exam"
- [ ] "free mock tests"

## Step 5: Core Web Vitals (2-3 minutes)

### In GSC:
- [ ] Go to "Core Web Vitals" section
- [ ] Check Desktop scores (target: Green ✓)
- [ ] Check Mobile scores (target: Green ✓)
- [ ] Fix any issues that appear

Key Metrics:
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1

## Step 6: Settings & Security (5 minutes)

### Crawl Settings:
- [ ] Go to "Settings"
- [ ] Set crawl rate: "Let Google optimize"
- [ ] Check "User-declared canonical" if applicable

### URL Parameters:
- [ ] Skip if not applicable

### Security & Manual Actions:
- [ ] Check for any manual actions (target: None)
- [ ] Check for security issues (target: None)
- [ ] Enable email notifications

## Step 7: Test Your Pages

### URL Inspection Tool:
For each important page:
- [ ] Click "URL Inspection" in sidebar
- [ ] Enter page URL
- [ ] Click "Inspect"
- [ ] Verify:
  - [ ] URL is indexable
  - [ ] No crawl errors
  - [ ] Mobile friendly
  - [ ] All resources load

### Pages to Test:
- [ ] https://cettest.site/
- [ ] https://cettest.site/hssc-cet-guide
- [ ] https://cettest.site/mock-test
- [ ] https://cettest.site/about

## Step 8: Structured Data Validation (2-3 minutes)

### Check JSON-LD Implementation:
- [ ] Go to Rich Results Test: https://search.google.com/test/rich-results
- [ ] Enter: https://cettest.site/
- [ ] Verify these show:
  - [ ] Organization schema
  - [ ] WebApplication schema
  - [ ] FAQ schema (on homepage)

### For new HSSC CET Guide page:
- [ ] Run through Rich Results Test
- [ ] Should show proper schema markup

## Step 9: Links & SEO

### Backlinks Report:
- [ ] Monitor "Links" section regularly
- [ ] See which sites link to you
- [ ] Identify link building opportunities
- [ ] Monitor top referring domains

### Internal Links:
- [ ] Verify internal linking structure
- [ ] Check for broken links in GSC

## Step 10: Ongoing Monitoring (Weekly)

### Every Monday:
- [ ] Check Performance metrics
- [ ] Review new keywords appearing
- [ ] Monitor ranking positions
- [ ] Check Coverage for new issues

### Monthly Review:
- [ ] Analyze top performing keywords
- [ ] Plan new blog content
- [ ] Check competitor keywords
- [ ] Review Core Web Vitals
- [ ] Create blog posts for low-hanging fruit keywords

## Important GSC Reports to Watch

1. **Performance Report** 
   - Shows search impressions and clicks
   - Reveals which keywords bring traffic
   - Shows average ranking position

2. **Coverage Report**
   - Shows indexed pages
   - Alerts to crawl errors
   - Highlights excluded content

3. **Enhancement Reports**
   - Mobile usability issues
   - AMP errors (if applicable)
   - Mobile usability

4. **Links Report**
   - Top linking sites
   - New backlinks
   - Internal linking structure

## Ranking Timeline Expectations

### Weeks 1-2:
- Google crawls your site
- New HSSC CET guide page discovered
- Sitemap processed

### Weeks 2-4:
- Pages begin to rank for generic terms
- Check GSC for first impressions
- Expect "HSSC CET" related keywords

### Months 2-3:
- More specific keywords appear
- Click-through rate increases
- Ranking positions improve
- Blog posts start appearing

### Months 3-6:
- Target high-volume keywords rank
- Organic traffic growth increases
- Build more content
- Focus on backlink building

### Months 6+:
- Established rankings
- Consistent organic traffic
- Continue content strategy
- Monitor and optimize

## Common Issues & Fixes

### Issue: "Submitted URL not in index"
**Fix**: 
- [ ] Wait 24-48 hours
- [ ] Check for robots.txt blocks
- [ ] Verify page is crawlable
- [ ] Check for noindex tags

### Issue: "Mobile usability errors"
**Fix**:
- [ ] Run through Mobile-Friendly Test
- [ ] Fix viewport settings
- [ ] Ensure buttons are large enough
- [ ] Fix any JavaScript issues

### Issue: "Low CTR for appearing keywords"
**Fix**:
- [ ] Improve meta descriptions
- [ ] Make titles more compelling
- [ ] Add rich snippets
- [ ] Improve content relevance

### Issue: "URL marked as duplicate"
**Fix**:
- [ ] Check canonical tags
- [ ] Ensure consistent URL structure
- [ ] Remove duplicate content

## Quick Links

- Google Search Console: https://search.google.com/search-console
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- Rich Results Test: https://search.google.com/test/rich-results
- Page Speed Insights: https://pagespeed.web.dev/
- Google Analytics: https://analytics.google.com

## Notes

- Already verified: `meta name="google-site-verification"` ✓
- Already created: sitemap.xml ✓
- Already created: robots.txt ✓
- Already added: JSON-LD schema markup ✓
- Already created: HSSC CET guide page ✓

**Next Action**: Go to Google Search Console and submit your sitemap!
