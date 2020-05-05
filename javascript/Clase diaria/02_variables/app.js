/*

var: metodo viejo
let: varibles que se pueden modificar y tienen un scope reducido.
const: variables que no se puede modificar,son constante.
= es asignacion

*/

/*
nombre cortos y descriptivos
sin abreviaturas
lower camel case,esto quiere decir que cada palabra empieza con mayuscula
*/

// int son numero enteros
const number = 10;
const number2 = 15;
let number3 = 0.2;
let number4 = 0.3;
const number5 = number + number2;

// string
const texto = "hola";
let texto1 = "test";
// template strings
let texto2 = `mi numero es ${number}, que genial`;
let texto3 = "mi numero es " + number + ", que genial";

// boolean
// siempre en positivo el nombre de valiable
const isValid = false;
let isChecked = true;
// array
const listaDeCompras = ["pan", "manteca", false, number, [texto, texto1]];

// variables nullas
const test = null;
let test2 = undefined;
