var express = require('express');
var app = express();
var progress = require('./execut_progress.js');
var xml = require('./xml.js');
var db = require('./db.js');

app.use(express.static('public'));


app.get('/', function (req, res) {
});


app.get('/xml', function (req, res) {
  xml.leitura(res);
});


app.get('/banco', function (req, res) {

  var retorno = db.connect();

  res.send(retorno);

});


app.listen(3000, console.log('Servidor iniciado na porta 3000!'));

setInterval(function(){ console.log(progress.resultado()); console.log((process.memoryUsage().rss /1024 /1024).toFixed(2) + 'MB');}, 6000);