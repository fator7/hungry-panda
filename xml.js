var XML = require('pixl-xml');
var fs = require('fs');

exports.leitura = function(res){

  fs.readFile('status-db.xml', function (err, data) {
    if (err) throw err;

    var text = data.toString();

    var retorno = convertXML(text);

    res.send(retorno);

  });
}

function convertXML(texto){
  var doc = XML.parse( texto );


  console.log(doc.area);
  return doc.area;
}
