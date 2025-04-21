// db.js
import mssql from "mssql";
import dotenv from "dotenv";
dotenv.config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

let pool;

export const connectionToDatabase = async () => {
  try {
    if (!pool) {
      pool = await mssql.connect(config);
      console.log("Connected to SQL Server");
    }
    return pool;
  } catch (err) {
    console.error("Database connection failed:", err.message);
    throw err;
  }
};
