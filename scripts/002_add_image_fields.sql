-- Add image fields to questions table
-- This allows storing image references for questions and options

-- Add image fields to questions table
ALTER TABLE public.questions
ADD COLUMN IF NOT EXISTS question_image_url TEXT,
ADD COLUMN IF NOT EXISTS option_a_image_url TEXT,
ADD COLUMN IF NOT EXISTS option_b_image_url TEXT,
ADD COLUMN IF NOT EXISTS option_c_image_url TEXT,
ADD COLUMN IF NOT EXISTS option_d_image_url TEXT;

-- Add comments to document the fields
COMMENT ON COLUMN public.questions.question_image_url IS 'URL or file path to the image for the question';
COMMENT ON COLUMN public.questions.option_a_image_url IS 'URL or file path to the image for option A';
COMMENT ON COLUMN public.questions.option_b_image_url IS 'URL or file path to the image for option B';
COMMENT ON COLUMN public.questions.option_c_image_url IS 'URL or file path to the image for option C';
COMMENT ON COLUMN public.questions.option_d_image_url IS 'URL or file path to the image for option D';
