const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todos"
});

// open the MySQL connection
db.connect(error => {
    if (error) throw error;
    console.log("DB connected");
});

module.exports = db;