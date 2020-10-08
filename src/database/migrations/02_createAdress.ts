import Knex from "knex";

export async function up(knex:Knex) {
  return knex.schema.createTable('adress',table=>{
    table.string("id").primary().notNullable().unique();
    table.string('street').notNullable();
    table.integer('streetNumber').notNullable();
    table.string('cep').notNullable();
    table.string('complemento').notNullable();
    table.integer('frete');
  })

}
export async function down(knex:Knex) {
  return knex.schema.dropTable('adress');
  
}