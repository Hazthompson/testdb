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


// knex.select('*').from('famous_people')
//   .whereRaw('first_name = ? OR last_name = ? ', [firstName, lastName, date])
//   .asCallback(function(err, rows) {
//     if (err) {
//         console.log("error:", err);
//       }


    // knex.schema.createTable('famous_people', (table) => {
    //     table.increments('id')
    //     table.string('first_name')
    //     table.string('last_name')
    // })
    // Make the change

};
  });
