
var should = require('should')
var programa = require('../lib/programa')

// Declaramos el primer test
suite('Primer Test', primeraSuite)

function primeraSuite () {
  test('Siempre va a funcionar, ya que no hace nada', primerTest)
  test('Igualdad de valores', segundoTest)
  test('Campo `nombre` existe', tercerTest)
  test('Abre una url', cuartoTest)
}

function primerTest () {
  // No hacemos NADA
}

function segundoTest () {
  // Esperemos que 2 + 4 = 6
  programa.sumarleCuatro(2).should.equal(6)
}

function tercerTest () {
  // Esperemos que el campo nombre sea 'Luis'
  programa.entregameUnObjeto().should.have.property('nombre')
  programa.entregameUnObjeto().nombre.should.equal('Luis')
}

function cuartoTest (done) {
  // Veamos si existe 'www.google.com'
  programa.abreUnaURL('www.google.com', onResponse)

  function onResponse (err, res) {
    // No deberíamos tener errores
    should.not.exist(err)

    // Si llegamos acá, entonces tenemos un response.
    // Comprobemos si tenemos el campo body
    res.should.have.property('body')
    // Y comprobemos que el título sea google
    res.body.should.match(/<title>Google<\/title>/)

    // Terminamos la ejecución del test asincrónico
    done()
  }
}
