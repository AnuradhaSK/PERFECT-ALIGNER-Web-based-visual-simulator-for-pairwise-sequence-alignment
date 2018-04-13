const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'msa'
});

//connection.connect()

/*connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err
  console.log('Connected!');
})*/

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
  console.log(rows);
});

module.exports = {connection};

//connection.end()
