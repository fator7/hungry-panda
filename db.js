var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3308,
  user     : 'root',
  password : '',
  database : 'poasocorro'
});

exports.connect = function(){
  var retorno;

  connection.connect();

  connection.query('SELECT * FROM `tb_estabelecimento` WHERE 1', function(err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows[0]);

    // res.send(rows);

    retorno = rows;



  });

  connection.end();

  return retorno;



}

