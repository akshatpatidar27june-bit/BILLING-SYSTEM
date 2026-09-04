import { Pool } from "pg";

let pool: Pool | undefined;
let schemaReady: Promise<void> | undefined;

function getPool() {
  const url = process.env.DATABASE_URL?.trim();
  if (!url) throw new Error("DATABASE_URL is not configured.");

  if (!pool) {
    const parsed = new URL(url);
    const explicitSsl = process.env.DATABASE_SSL?.trim().toLowerCase();
    const sslEnabled = explicitSsl ? explicitSsl === "true" : parsed.searchParams.get("sslmode") === "require" || process.env.RENDER !== "true";
    pool = new Pool({
      connectionString: url,
      ssl: sslEnabled ? { rejectUnauthorized: false } : false,
      max: 5,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
      maxLifetimeSeconds: 300,
    });
    pool.on("error", (error) => console.error("PostgreSQL pool error:", error.message));
  }
  return pool;
}

async function ensureSchema() {
  const p = getPool();
  await p.query(`
    create table if not exists enquiries(id bigserial primary key,name text not null,partner text,phone text not null,email text not null,services text[] not null default '{}',wedding_date date,city text,venue text,events text,story text,reference_link text,status text not null default 'new',created_at timestamptz not null default now());
    create table if not exists bookings(id bigserial primary key,enquiry_id bigint references enquiries(id) on delete set null,client_name text not null,wedding_date date not null,city text,venue text,services text[] not null default '{}',status text not null default 'booked',created_at timestamptz not null default now());
    create table if not exists site_content(key text primary key,value text not null,updated_at timestamptz not null default now());
    create table if not exists media(id bigserial primary key,title text not null,file_name text not null,mime_type text not null,data bytea not null,created_at timestamptz not null default now());
    insert into site_content(key,value) values
      ('hero_title','Your story deserves to be seen.'),('hero_text','Films, photography and reels for weddings, cars, brands, events and the places that matter.'),('works_intro','A selection of films, photographs and social edits — each made around the people, product or place in front of the camera.'),('services_text','Wedding films, pre-wedding stories, automobile and car-delivery films, brand campaigns, product visuals, events, portraits, reels and destination shoots.'),('style_text','Natural moments, thoughtful framing, clean edits and a little cinematic magic. The goal is never to make your story feel staged.'),('process_text','Tell us the idea, date and place. We understand the brief, plan the shoot, capture the important moments and deliver polished visuals ready to watch and share.'),('location_text','Based in India and available for projects across cities, destinations and outstation locations.'),('about_text','StoryCreateEditor is a visual studio for people, brands, automobiles, celebrations and places. We create films, photography and short-form content with a simple, modern visual approach.'),('booking_intro','Have a project in mind? Tell us the details and we will turn your answers into a clear brief for a direct conversation.'),('contact_text','Tell us your date, place and what you are creating. We will take it from there.'),('footer_text','FILMS · PHOTOGRAPHY · REELS · CREATIVE CONTENT')
      on conflict(key) do nothing;
  `);
}

export async function db() {
  if (!schemaReady) {
    schemaReady = ensureSchema().catch((error) => {
      schemaReady = undefined;
      throw error;
    });
  }
  await schemaReady;
  return getPool();
}
