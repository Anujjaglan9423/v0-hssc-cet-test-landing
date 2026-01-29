-- Create study materials table
CREATE TABLE IF NOT EXISTS study_materials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  material_type TEXT NOT NULL DEFAULT 'link', -- 'link', 'pdf', 'image'
  content TEXT NOT NULL, -- URL for links/files or direct content
  file_url TEXT, -- File URL for PDFs and images stored in storage
  category TEXT NOT NULL DEFAULT 'general', -- 'study_material', 'general_info'
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create RLS policies for study materials
ALTER TABLE study_materials ENABLE ROW LEVEL SECURITY;

-- Allow admins to manage study materials
CREATE POLICY "admin_can_manage_study_materials"
  ON study_materials
  FOR ALL
  USING (admin_id = auth.uid() OR EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

-- Allow students to view active study materials
CREATE POLICY "students_can_view_study_materials"
  ON study_materials
  FOR SELECT
  USING (is_active = true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_study_materials_admin_id ON study_materials(admin_id);
CREATE INDEX IF NOT EXISTS idx_study_materials_category ON study_materials(category);
CREATE INDEX IF NOT EXISTS idx_study_materials_is_active ON study_materials(is_active);
CREATE INDEX IF NOT EXISTS idx_study_materials_created_at ON study_materials(created_at DESC);
