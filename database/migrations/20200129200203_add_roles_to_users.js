exports.up = function(knex) {
  return knex.schema.table("users", tbl => {
    tbl.string("role", 80);
  });
};

exports.down = function(knex) {
  return knex.schema.table("users", tbl => {
    tbl.dropColumn("role");
  });
};
