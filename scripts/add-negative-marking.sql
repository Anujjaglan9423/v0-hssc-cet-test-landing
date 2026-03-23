-- Add negative marking columns to tests table
ALTER TABLE tests 
ADD COLUMN IF NOT EXISTS has_negative_marking BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS negative_marking_percent DECIMAL(5,2) DEFAULT 0;

-- Update existing tests to have negative marking disabled
UPDATE tests 
SET has_negative_marking = false, negative_marking_percent = 0 
WHERE has_negative_marking IS NULL;
