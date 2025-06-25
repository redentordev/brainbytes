import { drizzle } from "drizzle-orm/neon-serverless";
import * as schema from "./schema";
import { Resource } from "sst";

export const db = drizzle({
  connection: {
    connectionString: Resource.DatabaseUrl.value,
  },
  schema,
});
