create extension if not exists "pgcrypto";

create table public.forests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  neighbourhood text not null,
  description text,
  latitude double precision not null,
  longitude double precision not null,
  image_url text,
  status text not null default 'Active',
  created_at timestamptz not null default now()
);

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  skills text[] default '{}',
  role text not null default 'volunteer',
  created_at timestamptz not null default now()
);

create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  forest_id uuid not null references public.forests(id) on delete cascade,
  title text not null,
  description text,
  starts_at timestamptz,
  skill text default 'Everyone',
  people_needed integer not null default 1,
  status text not null default 'open',
  created_at timestamptz not null default now()
);

create table public.task_claims (
  task_id uuid references public.tasks(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  claimed_at timestamptz not null default now(),
  primary key (task_id, user_id)
);

create table public.hour_logs (
  id uuid primary key default gen_random_uuid(),
  task_id uuid references public.tasks(id) on delete set null,
  user_id uuid not null references public.profiles(id) on delete cascade,
  hours numeric(5,2) not null check (hours > 0),
  notes text,
  created_at timestamptz not null default now()
);

create table public.harvest_entries (
  id uuid primary key default gen_random_uuid(),
  forest_id uuid not null references public.forests(id) on delete cascade,
  name text not null,
  status text not null,
  months text,
  lesson text,
  image_url text,
  created_at timestamptz not null default now()
);

alter table public.forests enable row level security;
alter table public.profiles enable row level security;
alter table public.tasks enable row level security;
alter table public.task_claims enable row level security;
alter table public.hour_logs enable row level security;
alter table public.harvest_entries enable row level security;

create policy "Public forests are readable" on public.forests for select using (true);
create policy "Public tasks are readable" on public.tasks for select using (true);
create policy "Public harvest is readable" on public.harvest_entries for select using (true);
create policy "Users read own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users claim tasks" on public.task_claims for insert with check (auth.uid() = user_id);
create policy "Users remove own claims" on public.task_claims for delete using (auth.uid() = user_id);
create policy "Users read own claims" on public.task_claims for select using (auth.uid() = user_id);
create policy "Users log own hours" on public.hour_logs for insert with check (auth.uid() = user_id);
create policy "Users read own hours" on public.hour_logs for select using (auth.uid() = user_id);
