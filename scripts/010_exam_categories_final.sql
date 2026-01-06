-- Exam Categories Setup Script
-- This script is for reference only - the data has already been inserted via direct SQL execution

-- The exam_categories table structure:
-- id (uuid), name (text), slug (text), description (text), image_url (text), display_order (int), is_active (boolean), created_at (timestamp)

-- Current categories in database:
-- 1. Haryana Exams (slug: haryana)
-- 2. SSC Exams (slug: ssc)
-- 3. Railway Exams (slug: railway)
-- 4. Uttarakhand Exams (slug: uttarakhand)

-- To add a new exam category:
-- INSERT INTO exam_categories (name, slug, description, image_url, display_order, is_active) 
-- VALUES ('Category Name', 'slug', 'Description', '/images/category.jpg', 5, true);

-- To link an exam to a category:
-- UPDATE exams SET category_id = (SELECT id FROM exam_categories WHERE slug = 'haryana') WHERE name = 'Exam Name';

SELECT 'Exam categories have been set up successfully' as status;
