const pg = require("pg");
const settings = require("./settings");

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

client.connect(err => {
  if (err) {
    return console.error("Connection Error", err);
  }
});

var someName = process.argv[2];

function getFamousPerson(arg) {
  client.query(
    "SELECT * FROM famous_people WHERE first_name = $1 OR last_name = $1",
    [someName],
    (err, res) => {
      if (err) {
        console.log("error:", err);
      } else {
        for (var object of res.rows) {
          let valuesString = Object.values(object);
          string3 = String(valuesString[3]);
          let newstring =
          `${valuesString[0]}: ${valuesString[1]}, ${valuesString[2]}, born ${string3.slice(0, -24)}`;
          console.log(newstring);
        }
        client.end();
      }
    }
  );
}

getFamousPerson(someName);
