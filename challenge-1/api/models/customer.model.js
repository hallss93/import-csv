const db = require("../database/dbConfig.js");

async function addCustomer(customer) {
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

async function findBy(uuid) {
  const [customer] = await db("customers").where({ uuid });
  return customer;
}

function findById(id) {
  return db("customers").where({ id }).first();
}

module.exports = {
  addCustomer,
  find,
  findBy,
  findById,
};
