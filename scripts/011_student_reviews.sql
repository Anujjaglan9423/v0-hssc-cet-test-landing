create table if not exists public.student_reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  display_name text not null check (char_length(btrim(display_name)) between 2 and 80),
  rating smallint not null check (rating between 1 and 5),
  review_text text not null check (char_length(btrim(review_text)) between 20 and 1000),
  is_verified_student boolean not null default false,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  consent_to_publish boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists student_reviews_one_active_per_user
  on public.student_reviews (user_id)
  where status in ('pending', 'approved');

create index if not exists student_reviews_public_listing_idx
  on public.student_reviews (created_at desc)
  where status = 'approved' and consent_to_publish = true;

alter table public.student_reviews enable row level security;

create policy "Public can read approved student reviews"
  on public.student_reviews for select
  using (status = 'approved' and consent_to_publish = true);

create policy "No direct student review inserts"
  on public.student_reviews for insert with check (false);

create policy "No direct student review updates"
  on public.student_reviews for update using (false);

create policy "No direct student review deletes"
  on public.student_reviews for delete using (false);

create or replace function public.set_student_reviews_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists student_reviews_updated_at on public.student_reviews;
create trigger student_reviews_updated_at
before update on public.student_reviews
for each row execute function public.set_student_reviews_updated_at();
