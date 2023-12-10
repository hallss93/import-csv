import dotenv from "dotenv";
import knex from "knex";
import knexConfig from "../../knexfile";
dotenv.config();
const env = process.env.DB_ENV ?? "development";
const knexEvn = (knexConfig as any)[env];
export = knex(knexEvn);
