const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();


// create connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Shubham@2210',
  database: 'delta_app',
  password: "Shubham@2210"
});

let getRandomUser = () => {
  return [
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password(),
    
  ];
};


//home route 
 
app.get("/", (req, res) => {
  let q = "SELECT count(*) AS total FROM user";

  connection.query(q, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Database Error");
    }

    console.log(result);

    res.send(result); // ✅ better than res.send
  });
});

// show user route 

app.get("/user", (req, res) => {
    let q = "SELECT * FROM users";
    connection.query(q, (err, users) => {
    res.render("showusers.ejs", {users});
    });
});

app.listen("8080" , () => {
    console.log("server is on")
});

