import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle({
  connection: {
    connectionString:
      process.env.DATABASE_URL || "postgresql://localhost:5432/defaultdb",
  },
});
