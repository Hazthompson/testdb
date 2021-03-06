const settings = require("./settings");
var knex = require('knex')({
  client: 'pg',
  // version: '7.2',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

const firstName = process.argv[2];
const lastName = process.argv[3];
const date = process.argv[4];


       knex('famous_people').insert([
          {first_name: firstName, //if this is in separate objects then each will be a separate row.
          last_name: lastName,
           birthdate: date }])
       .asCallback(function(err, rows) {
    if (err) {
        console.log("error:", err);
      } else {
        console.log("success")
      }
    });

