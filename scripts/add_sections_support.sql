-- Add sections support for section-wise tests

-- Create sections table
CREATE TABLE IF NOT EXISTS public.sections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  test_id UUID REFERENCES public.tests(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  section_order INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create test_sections table with timing info
CREATE TABLE IF NOT EXISTS public.test_sections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  test_id UUID REFERENCES public.tests(id) ON DELETE CASCADE,
  section_id UUID REFERENCES public.sections(id) ON DELETE CASCADE,
  duration INTEGER, -- NULL if combined time
  question_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(test_id, section_id)
);

-- Add columns to tests table for section-wise configuration
ALTER TABLE public.tests 
  ADD COLUMN IF NOT EXISTS is_section_wise BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS is_section_timed BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS combined_duration INTEGER;

-- Add section_id to questions table
ALTER TABLE public.questions
  ADD COLUMN IF NOT EXISTS section_id UUID REFERENCES public.sections(id) ON DELETE CASCADE;

-- Enable RLS on new tables
ALTER TABLE public.sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.test_sections ENABLE ROW LEVEL SECURITY;

-- Policies for sections table
CREATE POLICY IF NOT EXISTS "Anyone can view sections of active tests" ON public.sections
  FOR SELECT TO authenticated USING (
    EXISTS (
      SELECT 1 FROM public.tests 
      WHERE tests.id = sections.test_id AND tests.is_active = true
    )
  );

CREATE POLICY IF NOT EXISTS "Admins can manage sections" ON public.sections
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Policies for test_sections table
CREATE POLICY IF NOT EXISTS "Anyone can view test_sections of active tests" ON public.test_sections
  FOR SELECT TO authenticated USING (
    EXISTS (
      SELECT 1 FROM public.tests 
      WHERE tests.id = test_sections.test_id AND tests.is_active = true
    )
  );

CREATE POLICY IF NOT EXISTS "Admins can manage test_sections" ON public.test_sections
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Update questions RLS to support sections
CREATE POLICY IF NOT EXISTS "Questions can have sections" ON public.questions
  USING (true);
