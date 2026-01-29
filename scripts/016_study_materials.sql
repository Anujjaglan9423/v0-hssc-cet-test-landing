-- Drop existing study_materials table if exists (cleanup from failed migrations)
DROP TABLE IF EXISTS study_materials CASCADE;

-- Create study materials table
CREATE TABLE study_materials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  material_type TEXT NOT NULL DEFAULT 'link' CHECK (material_type IN ('image', 'pdf', 'link')),
  content TEXT NOT NULL,
  file_url TEXT,
  category TEXT NOT NULL DEFAULT 'general' CHECK (category IN ('study_material', 'general_info')),
  is_active BOOLEAN DEFAULT true,
  uploaded_by UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_study_materials_category ON study_materials(category);
CREATE INDEX idx_study_materials_is_active ON study_materials(is_active);
CREATE INDEX idx_study_materials_created_at ON study_materials(created_at DESC);
CREATE INDEX idx_study_materials_uploaded_by ON study_materials(uploaded_by);
