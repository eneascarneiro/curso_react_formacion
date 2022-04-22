//const mysql = require("pg");
const dbConfig = require("../config/db.config.js");
/*
var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
module.exports = connection;
*/

const Pool = require('mariadb')
const pool = new Pool.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.port,
})

