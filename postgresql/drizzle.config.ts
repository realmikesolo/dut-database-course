import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/drizzle/schema.ts',
  out: './migrations',
  verbose: true,
  strict: true,
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DB_CLIENT_URL!,
  },
} satisfies Config;
