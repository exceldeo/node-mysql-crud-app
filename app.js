const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const playerRoutes = require("./routes/player.routes");
const homeRoutes = require("./routes/index.routes");

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// connect to database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});
global.db = db;

// configure middleware
app.set("port", process.env.PORT); // set express to use this port
app.set("views", __dirname + "/views"); // set express to look in this folder to render our view
app.set("view engine", "ejs"); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, "public"))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app
app.use("/", homeRoutes);
app.use("/player", playerRoutes);
app.get("*", function (req, res, next) {
  res.status(404);

  res.render("404.ejs", {
    title: "Page Not Found",
  });
});

// set the app to listen on the port
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
