require("dotenv").config();
const express = require("express");
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

require("./app/routes/notes.routes")(app);
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Easy-Notes application." });
});

// set port, listen for requests
const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});