var mysql = require("mysql2");

export const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "bdbiblioteca",
  port: 3306

});

