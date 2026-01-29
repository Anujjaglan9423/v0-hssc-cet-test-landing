-- Create study materials table
CREATE TABLE IF NOT EXISTS study_materials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type VARCHAR(50) NOT NULL CHECK (type IN ('general_information', 'study_material')),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  file_url VARCHAR(500),
  file_type VARCHAR(50), -- 'pdf', 'image', 'video_link'
  video_url VARCHAR(500),
  thumbnail_url VARCHAR(500),
  created_by UUID NOT NULL REFERENCES auth.users(id),
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_study_materials_type ON study_materials(type);
CREATE INDEX IF NOT EXISTS idx_study_materials_created_at ON study_materials(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_study_materials_active ON study_materials(is_active);

-- Enable RLS
ALTER TABLE study_materials ENABLE ROW LEVEL SECURITY;

-- Public can view active study materials
CREATE POLICY "Allow public to view active study materials" ON study_materials
  FOR SELECT
  USING (is_active = true);

-- Only admins can insert
CREATE POLICY "Only admins can insert study materials" ON study_materials
  FOR INSERT
  WITH CHECK (auth.jwt() ->> 'user_role' = 'admin');

-- Only creators and admins can update
CREATE POLICY "Only creators and admins can update study materials" ON study_materials
  FOR UPDATE
  USING (created_by = auth.uid() OR auth.jwt() ->> 'user_role' = 'admin')
  WITH CHECK (created_by = auth.uid() OR auth.jwt() ->> 'user_role' = 'admin');

-- Only creators and admins can delete
CREATE POLICY "Only creators and admins can delete study materials" ON study_materials
  FOR DELETE
  USING (created_by = auth.uid() OR auth.jwt() ->> 'user_role' = 'admin');
