mocha-testing-beginners
=======================

Vamos a mostrar las cosas básicas que podemos hacer con la herramienta de testing [mocha](https://github.com/visionmedia/mocha) ([documentación acá](http://visionmedia.github.com/mocha/)).

# Pre-requisitos

* Instalar [nodeJS](http://nodejs.org/)

# Agregar mocha a tu sistema

````bash
$ [sudo] npm install -g mocha
````

No lo quieres en tu sistema? Entonces, crea una carpeta temporal y:

````bash
$ npm install mocha
````
Desde ahí, quedará una carpeta `/mocha` instalada dentro de `node_modules`, simplemente la debes mover y acceder al archivo `./bin/mocha`.

# La estructura de un test formato TDD en mocha

Partimos con un mini test sencillo para mostrar la estructura. Este test no hará _nada_ (en serio). Pero invoca _mocha_ y, al no haber error entrega un positivo.

Creemos en nuestro repositorio el directorio `test`:

````bash
$ mkdir test
````

Dentro de test, editemos el archivo `test_1.js`

* `test/test_1.js`

````js
// Declaramos el primer test
suite('Primer Test', primeraSuite);

function primeraSuite () {
  test('Siempre va a funcionar, ya que no hace nada', primerTest)
}

function primerTest () {
  // No hacemos NADA
}
````

Utilizamos `suite()` y `test()`, dado que este es un tutorial de TDD. Estos son análogos a los `describe()` e `it()` del BDD. Por default mocha es BDD.

Otra nota: En NodeJS podemos usar funciones anónimas, en otras palabras podríamos haber escrito:

````js
// Declaramos el primer test
suite('Primer Test', function () {
  test('Siempre va a funcionar, ya que no hace nada', function () {
    // No hacemos NADA
  })
});
````

Lo cual puede ser más compacto y claro para algunos (o muchos). Este _approach_ en lo personal (opinión propia, BEWARE) se puede prestar en varios casos para confusiones (el infame _callback_hell) o malas mantenciones. Por lo que siempre lo trabajaré con funciones separadas y declaradas abajo. Pero insisto, es una elección personal del desarrollador.

# Ejecución de un Test en mocha

Ya que estamos en TDD y no BDD como es default, usaremos este comando en la raíz del repositorio. Mocha buscará el directorio `test` y ejecutará los archivos `.js` ahí. En este caso nuestro archivo.

````bash
$ mocha -u tdd
````

La respuesta es:

![Pantallazo](http://cl.ly/image/2t3X3g1I2Z0h/Screen%20Shot%202013-01-09%20at%202.38.56%20PM.png)

Por supuesto, nos cansaremos de tipear una y otra vez el parámetro. Para ellos en `test` creamos un archivo llamado `mocha.opts` e ingresaremos:

* `test/mocha.opts`

````
--ui tdd
--reporter spec
````

El parámetro `u` cambia a `ui` en el archivo y agregamos el _reporter_ `spec` que (en lo personal también) es mejor detallado.

Obtendremos esta respuesta al tipear `mocha`:

![Pantallazo](http://cl.ly/image/0r0T2O0D0K2H/Screen%20Shot%202013-01-09%20at%202.43.28%20PM.png)

# Ejemplos rápidos de Tests

Con todo lo que hemos aprendido. Es hora que creemos una librería _dummy_ con funciones y la testeemos.

La librería se llamará ingeniosa y creativamente `programa.js`. Deliberadamente habrán errores en todas las funciones, los que corregiremos con nuestros tests:

- `lib/programa.js`

````js
exports.sumarleCuatro = function (a) {
  return a + 3;
}


````

## Librerías adicionales

Para hacer nuestros tests necesitaremos librerías adicionales:

* [should.js](https://github.com/visionmedia/should.js/)

Un `assert` reforzado, dispara una excepción si no se cumple lo específicado en la definición, y es esta excepción la que nos permite determinar si hubo o no error en nuestro test.

Agregaremos la libreríaen `package.json`, luego haremos un `npm install`, para posteriormente requerir `should`en nuestro archivo de tests:

- `package.json`

````json
{   "name"            : "mocha-tutorial-basico"
  , "version"         : "1.0.0"
  , "private"         : true
  , "dependencies"    : {
      "should"        : "1.2.1"
    }
}
````

- línea de comandos

````bash
$ npm install
````

- `test/test_1.js`

````js
var should = require('should')
````

El primer test ya lo hicimos (bueno, no hace nada, pero lo realizamos), por lo que empezaremos del segundo:

## Segundo Test (Igualdad de Valores)

Invocaremos a la función `segundoTest()` de `lib/programa.js`, con el valor `3` y comprobaremos que nos retorne `4`:

- `test/test_1.js`

````js
var should = require('should')
var programa = require('../lib/programa')

// Declaramos el primer test
suite('Primer Test', primeraSuite);

function primeraSuite () {
  test('Siempre va a funcionar, ya que no hace nada', primerTest)
  test('Igualdad de valores', segundoTest)
}

function primerTest () {
  // No hacemos NADA
}

function segundoTest () {
  // Esperemos que 2 + 4 = 6
  should.equal(6, programa.sumarleCuatro(2))
}

````

![Pantallazo](http://cl.ly/image/3O0A460B0B1K/Screen%20Shot%202013-01-09%20at%203.23.39%20PM.png)

Obviamente arroja un error (queríamos eso), ya que sabemos que `2 + 3 = 5`, por lo que sustituímos en nuestro `programa.js `:

````js
exports.sumarleCuatro = function (a) {
  return a + 4;
}
````

Y obtenemos:

![Pantallazo](http://cl.ly/image/2Y3n220b443s/Screen%20Shot%202013-01-09%20at%203.24.19%20PM.png)

## Tercer Test

(TODO)

## Cuarto Test

(TODO)

## Quinto Test

(TODO)

# Conclusión

Existen más variantes, se puede configurar un archivo de opciones, se puede cambiar el reporter, se puede utilizar el browser, se pueden omitir tests según condiciones, distinguir entre funciones sincrónicas o asincrónicas, se pueden escribir scripts o instrucciones para ejecutar antes o después. Pero por ahora este pequeño tutorial permite introducir al lector en el tema.

Muchas Gracias!
