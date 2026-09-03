import { Pool } from "pg";

let pool: Pool | undefined;
let schemaReady: Promise<void> | undefined;

function getPool() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured.");
  }
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      max: 5,
    });
  }
  return pool;
}

export async function db() {
  const p = getPool();
  if (!schemaReady) {
    schemaReady = p.query(`
      create table if not exists enquiries (
        id bigserial primary key,
        name text not null,
        partner text,
        phone text not null,
        email text not null,
        services text[] not null default '{}',
        wedding_date date,
        city text,
        venue text,
        events text,
        story text,
        reference_link text,
        status text not null default 'new',
        created_at timestamptz not null default now()
      );
      create table if not exists bookings (
        id bigserial primary key,
        enquiry_id bigint references enquiries(id) on delete set null,
        client_name text not null,
        wedding_date date not null,
        city text,
        venue text,
        services text[] not null default '{}',
        status text not null default 'booked',
        created_at timestamptz not null default now()
      );
      create table if not exists site_content (
        key text primary key,
        value text not null,
        updated_at timestamptz not null default now()
      );
      create table if not exists media (
        id bigserial primary key,
        title text not null,
        file_name text not null,
        mime_type text not null,
        data bytea not null,
        created_at timestamptz not null default now()
      );
      insert into site_content(key, value) values
        ('hero_title', 'Wedding films that feel like you.'),
        ('hero_text', 'Cinematic wedding films, reels and same-day edits.'),
        ('about_text', 'StoryCreateEditor creates cinematic wedding stories with a clean, emotional and modern editing style.'),
        ('contact_text', 'Tell us your date, place and the story you want to remember.')
      on conflict (key) do nothing;
    `).then(() => undefined).catch((error) => {
      schemaReady = undefined;
      throw error;
    });
  }
  await schemaReady;
  return p;
}
