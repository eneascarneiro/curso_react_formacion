//const pool = require("./db.js");
const dbConfig = require("../config/db.config.js");
const Pool = require('pg').Pool
const pool = new Pool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.port,
})
// constructor
const Tutorial = function(tutorial) {
  this.title = tutorial.title;
  this.description_libro = tutorial.description_libro;
  this.published = tutorial.published;
};

Tutorial.create = (newTutorial, result) => {
  const arr = Object.keys(newTutorial).map((key) => [key, newTutorial[key]]);
  console.log(arr)
  pool.query(`INSERT INTO tutorials ( title  ,description_libro ,published  ) values ( "${newTutorial.title}","${newTutorial.description_libro}", ${newTutorial.published}) `, arr, (err, res) => {
    if (err) {
      console.log("error en create: ", err);
      result(err, null);
      return;
    }

    console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
    result(null, { id: res.insertId, ...newTutorial });
  });
};

Tutorial.findById = (id, result) => {
  console.log(id)
  let query = "SELECT * FROM tutorials  WHERE id = " +  id;

  pool.query(query, (err, res) => {
    if (err) {
      console.log("error findById: ", err);
      result(err, null);
      return;
    }
    console.log(res)
    if (res.rowCount) {
      console.log("found tutorial: ", res.rows);
      result(null, res.rows);
      return;
    }
    console.log('aqui')
    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Tutorial.getAll = (title, result) => {
  let query = "SELECT * FROM tutorials";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  pool.query(query, (err, res) => {
    if (err) {
      console.log("error: ", res.rows);
      result(null, err);
      return;
    }

    console.log("tutorials: ", res.rows);
    result(null, res.rows);
  });
};

Tutorial.getAllPublished = result => {
  pool.query("SELECT * FROM tutorials WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tutorials: ", res.rows);
    result(null, res.rows);
  });
};

Tutorial.updateById = (id, tutorial, result) => {
  pool.query(
    "UPDATE tutorials SET title = ?, description_libro = ?, published = ? WHERE id = ?",
    [tutorial.title, tutorial.description_libro, tutorial.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated tutorial: ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};

Tutorial.remove = (id, result) => {
  pool.query("DELETE FROM tutorials WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tutorial with id: ", id);
    result(null, res);
  });
};

Tutorial.removeAll = result => {
  pool.query("DELETE FROM tutorials", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} tutorials`);
    result(null, res);
  });
};

module.exports = Tutorial;
