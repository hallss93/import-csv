/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("organizations", (tbl) => {
    tbl.increments();
    tbl.string("uuid", 255).notNullable();
    tbl.string("name", 255).notNullable();
    tbl.string("website", 255).notNullable();
    tbl.string("country", 255).notNullable();
    tbl.string("description", 255).notNullable();
    tbl.integer("founded").notNullable();
    tbl.string("industry", 255).notNullable();
    tbl.integer("employees").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("organizations");
};
