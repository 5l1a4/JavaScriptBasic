///////////////////////////////////Metodo de Cadenas//////////////////////////////////
document.write("<br>METODO DE CADENAS" + "<br><br>");
let cadena1 = "Cadena de prueba";
let cadena2 = "Segunda Cadena";
let resultado = cadena1.concat(cadena2);

document.write(resultado + "<br>");
//concat() concatena 2 cadenas de texto;

let resultado2 = cadena1.startsWith(cadena2); // el espacio en blanco de la cadena2 lo vuelve falso;
document.write(resultado2 + "<br>");
//startsWith() verifica si en una cadena de texto las palabras, letras o espacios -
//- empiezan con otra cadena de texto;
//devolviendo un boolean, 
//ejem: cad1="Hola como estas", cad2="Hola como estas", True
//ejem2: cad1=" Hola como estas", cad2=" Hola como", true
//ejem3: cad1=" Hola como estas", cad2="Hola como estas", false -
//- la segunda cad2, empieza con un espacio que no lo tiene el primero
//endsWith es lo mismo pero a la inversa, verifica si termina con la misma cadena.

let cadena3 = "soy dalto en instagram";

let resultado3 = cadena3.includes("en"); //en se encuentra en en la cad3;
document.write(resultado3 + "<br>");
//includes() verifica si existe una cadena texto dentro de otra cadena de texto

resultado3 = cadena3.indexOf("en");
document.write(resultado3 + "<br>");
//indexOf() verifica en que posicion se encuentra la cadena, devolviendo un valor;
//"en" esta en la posisión 10, contando solo el primer caracter "e"
//lastindexOf() si se repite varias veces "en", entonces solo buscara el ultimo;

resultado3 = cadena3.padStart(41, "abcd");
document.write(resultado3 + "<br>");
//padStart(), en caso de no tener 41 caracteres lo rellena hasta tener 41;

resultado3 = cadena3.repeat(2);
document.write(resultado3 + "<br>");
//repeat() la cantidad de veces deseada

resultado3 = cadena3.split(" ");
document.write(resultado3 + "<br>");
document.write(resultado3[1]);
//divide la cadena de texto como queramos,
//" ", divide la cadena por espacios(eliminando los espacios), convirtiendolo en Array;


resultado3 = cadena3.substring(1, 3);
document.write("<br>" + resultado3 + "<br>");
//substring indica desde que caracter empieza y termina;

resultado3 = cadena3.toLowerCase();
document.write(resultado3 + "<br>");
//toLowerCase lo convierte todo en minuscula
//uperCase convierte todo en mayuscula;


let cadena4 = 50;
resultado3 = cadena4.toString();
document.write(2 + resultado3 + "<br>");
//convierte a string un Dato; querdaria 2 + "50" = 250, y no 2 + 50 = 52;
//tambien puede convertir un array en String;

resultado3 = cadena3.trim();
document.write(resultado3.length + "<br>");
//eliminas los espacios;
//trimStart() elimina los espacios del princio y
//trimEnd() del final;


//////////////////////////////////Arrays/////////////////////////////////////////7/

//transformadores modifican el array;
document.write("<br>ARRAYS" + "<br><br>");

let nombres = ["Elian", "Juan", "Elias", "Matias"];

let resArray = nombres.pop();

document.write(resArray + "<br>");
document.write(nombres + "<br>");
//pop();le quita el ultimo elmento y lo muestra;
//shift(); elimina el primero y deja el resto;


resArray = nombres.push("Jorge");
document.write(nombres + "<br>");
document.write(resArray + "<br>");
//push();agrega un nuebo elemento;

resArray = nombres.reverse();
document.write(resArray + "<br>");
//reverse(); invierte el orden;

resArray = nombres.unshift(1, 1);
document.write(nombres + "<br>");
//agrega nuevos elementos al principio;

resArray = nombres.sort();
document.write(nombres + "<br>");
//ordena los elementos de manera alfabetica o numerica; orden lexicografico;

resArray = nombres.splice(0, 3);
document.write(nombres + "<br>");
//splice(); se indica donde inicia y cuantos hay que elliminar;

resArray = nombres.splice(1, 1, "ea");
document.write(nombres + "<br>");
//se puede agregar un nuevo elemento donde anterioremente se elimino uno o mas;


//metodos accesores;
//no se modifican los arrays, devuelve uno nuevo modificado

nombres = ["Elian", "Juan", "Jorge", "Elias"];

resArray = nombres.join("<br>Nombre: ");
document.write("Nombre: " + resArray);
//join(); lo convierte en una cadena de texto,
//pero con la diferencia de que podemos agregar elementos nuevos, entre los elementos


resArray = nombres.slice(0, 2);
document.write("<br>" + resArray + "<br>");
//slice(); te muestra la cantidad de elementos; primero desde donde iniciar [0]
//hasta donde mostrar [2];

resArray = nombres.slice(0, 2);
document.write(resArray + "<br>");
//slice(); te muestra la cantidad de elementos; primero desde donde iniciar [0]
//hasta donde mostrar [2];


//metodos array de Repeticion;
//trata de iteraciones;

nombres = ["Elian", "Elias", "Magdalena", "Jessica", "Joel", "Estebanar", "Porfiria"];

nombres.filter(nombres =>
    document.write(nombres + "<br>")
);
//filter(); MUY UTil, cumple la funcion de bucle, iterando entre cada elemento - 
//- del array, filter() y forEach() son casi lo mismo;
//pero con filter podemos agregarle una condicion -
//- con forEach() no se puede realizar,

resArray = nombres.filter(nombres => nombres.length > 5);
document.write(resArray + "<br>"); // funciona, devuelve los elementos con una condicion

resArray = nombres.forEach(nombres => nombres.length > 5);
document.write(resArray + "<br>"); //no funciona :Undefined, no tiene esta posibilidad;

///////////////////////////////Objeto Math////////////////////////////////////////
document.write("<br>" + "MATH" + "<br>");



let numeros = Math.max(2, 4, 1, 12);
document.write(numeros + "<br>");
//maximo

numeros = Math.min(2, 4, 1, 12);
document.write(numeros + "<br>");
//minimo

numeros = Math.sqrt(4);
document.write(numeros + "<br>");
//raiz cuadrada

numeros = Math.cbrt(64);
document.write(numeros + "<br>");
//raiz cubica

numeros = Math.random();
document.write(numeros + "<br>");
//numeros randoms;

numeros = Math.round(5.7);
document.write(numeros + "<br>");
//redondeamos numeros quedaria 6

numeros = Math.floor(2.7);
document.write(numeros + "<br>");
//redondea para abajo; a diferencia de round que quedaria 3, en este caso con
//floor queda 2;

numeros = Math.trunc(10.6);
document.write(numeros + "<br>");
//a difrencia de round(, este metodo elimina el numero franccionado.


let res = prompt("agrega un numero");
function find_max(res) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of res) {
        if (num > max_num) {
            // (Fill in the missing line here)
        }
    }
    return max_num;
}

document.write(res);








