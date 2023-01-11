import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const config = {
  server: {
    port: process.env.SERVER_PORT || 3001,
  },
  database: {
    pg_host: process.env.PG_SERVER_HOST || "localhost",
    pg_port: process.env.PG_SERVER_PORT || 5432,
    pg_user_name: process.env.PG_USER_NAME || "postgres",
    pg_password: process.env.PG_USER_PASSWORD || "master",
    pg_db: process.env.PG_DATABASE || "enviatrackdb",
    db_driver: process.env.DB_DRIVER || "postgres",
  },
};

export default config;
