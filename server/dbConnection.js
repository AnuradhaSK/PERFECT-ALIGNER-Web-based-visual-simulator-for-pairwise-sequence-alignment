const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'msa'
});

connection.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

connection.query('SELECT * FROM tcoffee', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:\n');
  rows.forEach( (row) => {
    console.log(`${row.ID} is in ${row.Name}`);
  });
});

module.exports = {connection};
