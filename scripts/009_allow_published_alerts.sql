-- Allow scraper-created exam alerts to be published.
ALTER TABLE public.blogs DROP CONSTRAINT IF EXISTS blogs_status_check;
ALTER TABLE public.blogs ADD CONSTRAINT blogs_status_check
  CHECK (status IN ('draft', 'published', 'archived'));
