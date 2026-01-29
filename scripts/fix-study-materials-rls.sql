-- Fix RLS Policies for study_materials table

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public to read active materials" ON study_materials;
DROP POLICY IF EXISTS "Allow admins to insert" ON study_materials;
DROP POLICY IF EXISTS "Allow admins to update" ON study_materials;
DROP POLICY IF EXISTS "Allow admins to delete" ON study_materials;

-- Create policies
-- 1. Allow anyone to read active materials
CREATE POLICY "Allow public to read active materials"
ON study_materials
FOR SELECT
USING (is_active = true);

-- 2. Allow admins to insert
CREATE POLICY "Allow admins to insert"
ON study_materials
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM users 
    WHERE users.id = auth.uid() 
    AND users.role = 'admin'
  )
);

-- 3. Allow admins to update
CREATE POLICY "Allow admins to update"
ON study_materials
FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM users 
    WHERE users.id = auth.uid() 
    AND users.role = 'admin'
  )
);

-- 4. Allow admins to delete
CREATE POLICY "Allow admins to delete"
ON study_materials
FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM users 
    WHERE users.id = auth.uid() 
    AND users.role = 'admin'
  )
);

-- Ensure RLS is enabled
ALTER TABLE study_materials ENABLE ROW LEVEL SECURITY;
