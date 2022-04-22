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

const Pool = require('pg').Pool
const pool = new Pool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: 5438,
})
