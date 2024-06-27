import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const queryClient = postgres(process.env.DB_CLIENT_URL!);
export const db = drizzle(queryClient);
