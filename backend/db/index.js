const mysql = require("mysql");

const mysqlconnection = mysql.createConnection({
   host: "localhost",
   user: "aravind",
   password: "hakunaMATATA02",
   database: "shared_kitchen",
  port: 3306
});
module.exports = { mysqlconnection };
