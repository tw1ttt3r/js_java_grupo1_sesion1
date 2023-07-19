// Tipos de datos
// Son una categorización de soporte para un lenguaje de programción
// Se dividen en dos partes:  primitivos o estructuras de datos

// Datos primitivos
// Strings: contiene 1 o ,más carácteres deben estar entre "", '', ``
// "anita lava la tina"
// "kclldksnclksc\""
// '\''
// `ljsbncxnlajknclka
// asdasdas
// asdasd
// asdas
// das
// d`
// numbers
// "0"
// 0
// 123782913
// 23424.43
// .87
// booleans
// true
// false
// undefined: inexistencia
// null: vacio

// Estructuras de datos
// Object
  // Arreglos
  // Objects

// Tipo de datos especial 
// function

// typeof
// me va a regresar el nombre del tipo de dato en formato string
// sintaxis: typeof valor 

// Coerción
// String, Number, Boolean
// Explicitas y las implicitas
// Explicitas ocupamos funciones
// Implicitas ocupamos operadores

// Coerción de String
// Explicita
// Sintaxis: String(valor)
// Ejemplos:
String(12)
String(true)
String(0.4)
String("Hola")

// Coerción de String
// Implicta
// Sintaxis: valor + ""
// Ejemplos:

12 + ""
true + ""
0.4 + ""
"Hola" + ""

// Coerción de Number
// Explicita
// Sintaxis: Number(valor)
// Ejemplos:

Number("12")
Number("true")
Number("0.4")
Number("Hola")
Number("12e")
Number(true)

// Coerción de Number
// Implicita
// Sintaxis: valor * 1
// Ejemplos:

"12" * 1
"true" * 1
"0.4" * 1
"Hola" * 1
"12e" * 1
true * 1

// Coerción de Boolean
// Explicita
// Sintaxis: Boolean(valor)
// Reglas:
/**
 * Numeros
 * true es un valor diferente de cero
 * -1 -566, .3, 1, 1.4, 100000
 * false es un cero
 * 0 regresa un false
 */
/**
 * String
 * true es un valor diferente de cadena vacia
 * "    ", "ghola", "a", "-12", "."
 * false es un cadena vacia
 * ""
 */
/**
 * null
 * siempre es false
 * 
 */
/**
 * undefined
 * siempre es false
 * 
 */

// Coerción de Boolean
// Implicita
// Sintaxis: ! representa un negación, cada ! representa un negación de la negación
// truthy y falsy

!true // false
!false // true
!!true // true

!"" // true
!!null // false

// Variables
// Son espacios en memoria referencias por un nombre
// Sintaxis: let o const nombrevariable = valor;
// const: constante, es decir, no puede cambiar ni su tipo ni su valor
// let: variables, que si permiten el cambio de tipo y valor
// ambas son de alcance de bloque

// ejemplos
const pi = 3.1416;
let edad = 45;

// asignación
// guardado de un valor en una variable
// const o let nombrevariable = valor;

// operadores aritmeticos
// Operaciones aritmeticas
// solo funcionan ocupan tipo de dato number

// adición +
// resta -
// multipliación *
// división /
// modulo % , nos regresa el residuo de la división
// ++ incremento (unitario) 
  // depende donde se coloque es el valor resultante
  // si lo coloco a la izquierda, el resultado será un incremento unitario
  // es decir; ++5 = 6
  // si lo coloco a la derecha, el resultado será el mismo valor
  // es decir; 5++ = 5
  // depende donde se coloque es el valor resultante
  // si lo coloco a la izquierda, el resultado será un decremento unitario
  // es decir; --5 = 4
  // si lo coloco a la derecha, el resultado será el mismo valor
  // es decir; 5-- = 5
// -- decremento (unitario) 

// Precendecia de operadores
// Primer operador a evaluar ()
// Segundo operador
  // ++ incremento
  // -- decremento
// Tercer operador
  // + (unario más) ++ +-
  // - (negacion unitario) -- -+
// Cuarto operador
  // * Multiplicación
  // / División
  // % modulo
// quinto operador
  // + adición
  // - substracción
