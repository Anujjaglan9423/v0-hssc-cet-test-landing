-- Create blog-images storage bucket
INSERT INTO storage.buckets (id, name, owner, public)
VALUES ('blog-images', 'blog-images', NULL, true)
ON CONFLICT (id) DO NOTHING;

-- Set up public access policy for blog-images bucket
CREATE POLICY "Public read access" ON storage.objects
  FOR SELECT USING (bucket_id = 'blog-images');

CREATE POLICY "Authenticated uploads" ON storage.objects
  FOR INSERT 
  WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Authenticated update" ON storage.objects
  FOR UPDATE 
  USING (bucket_id = 'blog-images')
  WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Authenticated delete" ON storage.objects
  FOR DELETE 
  USING (bucket_id = 'blog-images');

