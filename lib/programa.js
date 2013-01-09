
var request = require('request')

exports.sumarleCuatro = function (a) {
  return a + 4
}

exports.entregameUnObjeto = function () {
  var obj = {
    'id'        : 123
  , 'nombre'    : 'Luis'
  , 'apellido'  : 'Perez'
  }

  return obj
}

exports.abreUnaURL = function (url, callback) {
  var options = {
    'url' : 'http://' + url
  }

  request(options, onResponse)

  function onResponse (error, response, body) {
    if (error) return callback(error)

    return callback(null, response)
  }
}
