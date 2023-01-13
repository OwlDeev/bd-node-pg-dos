const { Pool } = require("pg");

const pool = new Pool({
  host: "postgresql-owldev.alwaysdata.net", //'postgresql-dev-mt.alwaysdata.net',
  user: "owldev",
  password: "Ellaberinto1",
  database: "owldev_prueba1",
  port: 5432,
  allowExitOnIdle: true,
});

module.exports = pool;
