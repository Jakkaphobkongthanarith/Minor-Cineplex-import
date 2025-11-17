import * as pg from "pg";
const { Pool } = pg.default;
import "dotenv/config";

const connectionPool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
console.log("connectionPool", connectionPool);

connectionPool
  .query("SELECT NOW()")
  .then((res) => console.log("DB Connected:", res.rows))
  .catch((err) => console.error("DB Connection Error:", err));

export default connectionPool;
