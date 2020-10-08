import Knex from "knex";

export async function up(knex:Knex) {
  return knex.schema.createTable('users',table=>{
    table.string('id').primary().notNullable().unique();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('telNumber').notNullable();
    table.string('password').notNullable();
    table.string('pedidosCount');

  })
}
export async function down(knex:Knex) {
  return knex.schema.dropTable('users');
  
}