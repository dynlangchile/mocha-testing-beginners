
var should = require('should')
var programa = require('../lib/programa')

// Declaramos el primer test
suite('Primer Test', primeraSuite);

function primeraSuite () {
  test('Siempre va a funcionar, ya que no hace nada', primerTest)
  test('Igualdad de valores', segundoTest)
  test('Campo `nombre` existe', tercerTest)
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
