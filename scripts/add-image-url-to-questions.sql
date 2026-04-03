-- Add image_url column to questions table for storing question images
-- This allows questions to have associated figures/diagrams

ALTER TABLE public.questions 
ADD COLUMN IF NOT EXISTS image_url TEXT DEFAULT NULL;

-- Add comment for documentation
COMMENT ON COLUMN public.questions.image_url IS 'URL to question image stored in Vercel Blob storage';
