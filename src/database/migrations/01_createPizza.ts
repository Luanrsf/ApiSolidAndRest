import Knex from "knex";

export async function up(knex:Knex) {
  return knex.schema.createTable('pizza',table=>{
    table.string('userName').primary().notNullable().unique();
    table.string('size').notNullable();
    table.string('flavors').notNullable().unique();
    table.string('frete').notNullable();
  })
}
export async function down(knex:Knex) {
  return knex.schema.dropTable('users');
  
}