const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  logging:false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

sequelize.authenticate()
.then(()=>{
    console.log("database connected");
})
.catch(err=>{
    console.log("database connection refused");
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.notes = require("./notes.model.js")(sequelize, Sequelize);
module.exports = db;