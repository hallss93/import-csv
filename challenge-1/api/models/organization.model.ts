import db from "../database/dbConfig";

import { Organization } from "../interfaces/organization.interface";

async function create(organization: Organization) {
  const [id] = await db("organizations").insert(organization, "id");
  return id;
}

function find() {
  return db("organizations as o").select(
    "o.uuid",
    "o.name",
    "o.website",
    "o.country",
    "o.description",
    "o.founded",
    "o.industry",
    "o.employees"
  );
}

async function countOrganizations(): Promise<any> {
  return db("organizations as o").count("id as ONT");
}

async function findBy(uuid: string) {
  const [organization] = await db("organizations").where({ uuid });
  return organization;
}

function findById(id: number) {
  return db("organizations").where({ id }).first();
}

export { create, find, findBy, findById, countOrganizations };
