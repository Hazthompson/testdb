
const settings = require("./settings");
//move the info over?

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

var someName = process.argv[2];

//why just rows below?

knex.select('*').from('famous_people')
  .whereRaw('first_name = ? OR last_name = ? ', [someName, someName])
  .asCallback(function(err, rows) {
    if (err) {
        console.log("error:", err);
      } else {
        for (var object of rows) {
          let valuesString = Object.values(object);
          string3 = String(valuesString[3]);
          let newstring =
          `${valuesString[0]}: ${valuesString[1]}, ${valuesString[2]}, born ${string3.slice(0, -24)}`;
          console.log(newstring);
        }
      }
  });




  // function getFamousPerson(arg) {
  // client.query(
  //   "SELECT * FROM famous_people WHERE first_name = $1 OR last_name = $1",
  //   [someName],
  //   (err, res) => {
  //     if (err) {
  //       console.log("error:", err);
  //     } else {
  //       for (var object of res.rows) {
  //         let valuesString = Object.values(object);
  //         string3 = String(valuesString[3]);
  //         let newstring =
  //         `${valuesString[0]}: ${valuesString[1]}, ${valuesString[2]}, born ${string3.slice(0, -24)}`;
  //         console.log(newstring);
  //       }
  //       client.end();
  //     }
  //   }
  // );