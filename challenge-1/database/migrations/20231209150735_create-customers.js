/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("customers", (tbl) => {
    tbl.increments();
    tbl.string("uuid", 255).notNullable();
    tbl.string("first_name", 255).notNullable();
    tbl.string("last_name", 255).notNullable();
    tbl.string("company", 255).notNullable();
    tbl.string("city", 255).notNullable();
    tbl.string("country", 255).notNullable();
    tbl.string("phone1", 255).notNullable();
    tbl.string("phone2", 255).notNullable();
    tbl.string("email", 255).notNullable();
    tbl.date("subscription_date").notNullable();
    tbl.string("website", 255).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("customers");
};
