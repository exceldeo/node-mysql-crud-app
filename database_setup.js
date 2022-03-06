const fs = require("fs");
const mysql = require("mysql");
const dotenv = require("dotenv");
const { exit } = require("process");
dotenv.config();

create_db();

function create_db() {
  const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    //   database: process.env.DB_DATABASE,
  });

  // connect to database
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("Connected to database");
    // Read the SQL file
    const dataSql = fs.readFileSync("./create_db.sql").toString();
    const dataArr = dataSql.toString().split(";");
    dataArr.forEach((query) => {
      if (query) {
        query.replace(/[&\/\\#+$~%.`'":*?<>{}]/g, "");
        console.log(query);
        db.query(query, (err) => {
          if (err) throw err;
        });
      }
    });
    db.end;
  });
}
