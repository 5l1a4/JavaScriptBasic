//tipos de datos 
string = 'Cadena de Texto'
number = 22
booleano = true

// variable declarada var, let, const 
let numberlet = 22;         //let alcanze regional
const booleanCons = false;  //no pueden cambiar su valor
var textVar = "hi";         //var alcanze Global

// alert(numberlet)

//formas de declarar
let nro1;
nro1 = 1;

let nro2 = 2;

let nro3, nro4;
nro1 = 3;
nro2 = 4;

let nro5 = 5, nro6 = 6;

// const se la declara despues de iniciallizarla
// const ad1 = "hola"; correcto

// const ad1; erroneo
//  ad1 = "hola"; 

// casos especiales Undefined, Null, Nan
let nro7 = null; // variable la cual su valor es vacio;
                 // Nan Not a number: cuando una operacion matematica no -
                 // - es realizada con numeros;

//funciones
//let nombre = prompt("decime tu nombre");
//alert("hola: " + nombre); se desabilita para no molestar

// operadores matematicos
let nro = 10;

nro += 5;
document.write("sum:" + nro +"  "); //15

nro = 10;
nro -= 5;
document.write("res:" + nro +"  "); 

nro = 10;
nro *= 5;
document.write("mul:" + nro +"  "); 

nro = 10;
nro /= 5;
document.write("div:" + nro +"  "); 

nro = 10;
nro %= 5;
document.write("expo:" + nro +"  "); 

nro = 10;
nro **= 5;
document.write("mul2:" + nro +"  ");  

//operadores de aritmeticos
let numero1 = 10, numero2 = 20;

res = numero1 + numero2; //suma
document.write(res);

numero1 = 10;
numero1--;//resta -1
res = numero1;
document.write(res);

numero1 = 10;
numero1++;//suma +1
res = numero1;
document.write(res);

numero1 = 2;
numero2 = 2;
res = numero1**numero2; //multiplicación
document.write(res);

numero1 = 10;
numero2 = 2;
res = numero1&numero2; //resto
document.write(res);

numero1 = 10;
res = -numero1; //lo contrario al resultado de numero
document.write(res);

//concatenación de Arrays

saludo = "hola";
nombre = "Elian";

frase = saludo + " " + nombre;

document.write(frase);

nro1 = 1;
nro2 = 2;
//res = nro1 + nro2;  solo sumaria: 3
res = "" + nro1 + nro2; //forzando salida del String: 12 
document.write(res);

nro1 = "1";
nro2 = "2";
res = nro1 + nro2; //String: 12
document.write(res);

nro1 = "1";
nro2 = 2;
res = nro1.concat(nro2); //concatena un string y un valor numerico
document.write(res);

frase2 = "elian";
res = `soy ${frase2} y estoy caminando`; // utilizando backticks

document.write(res);

//operadores intermedios
    // == pregunta si son el mismo valor sin importar el tipo de dato;
    // === compara si son el mismo valor y el mismo tipo de dato;
    // != compara si no es el mismo tipo de valor;
    // !== compara si no es el mismo tipo de valor y tipo de dato;
    // > mayor a || < menor a || <> distinto a
    // && si o si las 2 son verdades true
    // ||  si uno es verdadera true
    // ! si es verdadero, devuelve lo contrario false


//camel Case primera con minuscula las demas en mayuscula holaComoEstas
//getElementById, parseInt, parseFloat



