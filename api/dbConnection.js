const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config");

const sequalize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

module.exports = sequalize;
