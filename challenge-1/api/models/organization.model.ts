import { Organization } from "api/interfaces/organization.interface";

const db = require("../database/dbConfig.js");

async function create(organization: Organization) {
  const [id] = await db("organizations").insert(organization, "id");
  return id;
}

function find() {
  return db("organizations as c").select(
    "c.uuid",
    "c.name",
    "c.website",
    "c.country",
    "c.description",
    "c.founded",
    "c.industry",
    "c.employees"
  );
}

async function findBy(uuid: string) {
  const [organization] = await db("organizations").where({ uuid });
  return organization;
}

function findById(id: number) {
  return db("organizations").where({ id }).first();
}

module.exports = {
  create,
  find,
  findBy,
  findById,
};
