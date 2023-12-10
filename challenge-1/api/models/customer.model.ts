import db from "../database/dbConfig";

import { Customer } from "../interfaces/customer.interface";

async function create(customer: Customer) {
  const [id] = await db("customers").insert(customer, "id");
  return id;
}

function find() {
  return db("customers as c").select(
    "c.uuid",
    "c.first_name",
    "c.last_name",
    "c.company",
    "c.city",
    "c.country",
    "c.phone1",
    "c.phone2",
    "c.email",
    "c.subscription_date",
    "c.website"
  );
}

async function findBy(uuid: string) {
  const [customer] = await db("customers").where({ uuid });
  return customer;
}

function findById(id: number) {
  return db("customers").where({ id }).first();
}

export { create, find, findBy, findById };
