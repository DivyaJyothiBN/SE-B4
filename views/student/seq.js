const Sequelize = require('sequelize');
/*
const sequelize = new Sequelize('tms', 'postgres','',{
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
 // storage: 'path/to/database.sqlite'
});
*/

console.log('here\n');
const sequelize = new Sequelize('postgres://postgres:5432/tms');


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Or you can simply use a connection uri
//