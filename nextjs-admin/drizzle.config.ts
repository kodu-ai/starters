import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  dialect: 'sqlite', // "mysql" | "sqlite" | "postgresql"
  schema: './lib/db.ts',
  out: './drizzle',
  dbCredentials: {
    url: 'db.sqlite',
  },
});
