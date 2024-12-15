import dotenv from "dotenv";
dotenv.config();
import { neon } from "@neondatabase/serverless";
export const sql = neon(`${process.env.DATABASE_URL}`);

//for executing all the querys
export const executeQuery = async (query: any) => {
  try {
    const result = await query();
    console.log(result, "result is this");
    return result;
  } catch (error) {
    console.error("Database query error:", error);
    return { error: true, message: "something went wrong" };
  }
};
