-- Exam alert persistence support
-- Safe to run against the existing public.blogs table.

CREATE INDEX IF NOT EXISTS blogs_exam_alert_category_created_at_idx
  ON public.blogs (category, created_at DESC);

CREATE INDEX IF NOT EXISTS blogs_exam_alert_source_url_idx
  ON public.blogs (featured_image_url);

COMMENT ON COLUMN public.blogs.featured_image_url IS
  'For exam alerts, stores the canonical official government notice URL.';
