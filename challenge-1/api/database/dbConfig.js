const dotenv = require("dotenv");
const knex = require("knex");
const knexConfig = require("../knexfile.js");

dotenv.config();
const env = process.env.DB_ENV || "development";

module.exports = knex(knexConfig[env]);
