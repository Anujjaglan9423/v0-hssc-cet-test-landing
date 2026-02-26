-- Performance optimization: Add indexes suggested by Supabase index advisor
-- These indexes improve the tests query that joins with test_attempts and orders by created_at
-- Expected improvement: startup cost from ~2998 to ~620 (79% reduction)

-- Index on tests.created_at for ORDER BY created_at DESC queries
CREATE INDEX IF NOT EXISTS idx_tests_created_at ON public.tests USING btree (created_at);

-- Index on test_attempts.test_id for LEFT JOIN LATERAL lookups on test_attempts
CREATE INDEX IF NOT EXISTS idx_test_attempts_test_id ON public.test_attempts USING btree (test_id);

-- Additional indexes for other frequent join/filter patterns in the tests query
-- Index on questions.test_id for LEFT JOIN LATERAL lookups on questions
CREATE INDEX IF NOT EXISTS idx_questions_test_id ON public.questions USING btree (test_id);

-- Index on test_results.test_id for LEFT JOIN LATERAL lookups on test_results
CREATE INDEX IF NOT EXISTS idx_test_results_test_id ON public.test_results USING btree (test_id);

-- Composite index on tests for the common filter pattern: WHERE exam_id = X AND is_active = true ORDER BY created_at DESC
CREATE INDEX IF NOT EXISTS idx_tests_exam_active_created ON public.tests USING btree (exam_id, is_active, created_at DESC);
