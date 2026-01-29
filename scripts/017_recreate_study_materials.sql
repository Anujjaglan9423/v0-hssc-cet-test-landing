-- Drop existing study_materials table and recreate
DROP TABLE IF EXISTS public.study_materials CASCADE;

-- Study Materials table
CREATE TABLE public.study_materials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  content_type TEXT NOT NULL CHECK (content_type IN ('pdf', 'image', 'youtube')),
  file_url TEXT,
  youtube_url TEXT,
  created_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true
);

-- Enable RLS on study_materials
ALTER TABLE public.study_materials ENABLE ROW LEVEL SECURITY;

-- Everyone can view active study materials (no auth required)
CREATE POLICY "Anyone can view active study materials" ON public.study_materials
  FOR SELECT USING (is_active = true);

-- Create storage bucket for study materials if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('study-materials', 'study-materials', true)
ON CONFLICT (id) DO NOTHING;
