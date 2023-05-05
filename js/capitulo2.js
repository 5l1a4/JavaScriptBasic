////////////////////////////////arrays////////////////////////////////

let array = ["lucas", 24, "Buenos Aires"];
let frutas = ["banana", "manzana", "pera"];

document.writeln(frutas[1] + "<br>");

//arrays Asociativo las posiciones son asociados a nombres u otros elementos;
let pc = {
    nombre: "Michol",
    procesador: "AMD Ryzen 3200",
    ram: "8GB",
    espacio: "220GB"
};

document.writeln(pc["nombre"] + "<br>");

let nombrePc = pc["nombre"]; //asignamos una variable a un elemento del array ();
let frase = `nombre: <b> ${nombrePc} <b> <br>`; 
document.write(frase);

//////////////////////////////while,for, etc.////////////////////////

let num = 5;

while (num <= 10){
    document.write("Es menor que 10 " + num + "<br>");
    num++
}
document.write("<br>"); //salto de linea

//do while la ejecuta primero despues pregunta
num = 5;
do {
    document.write("Es menor que 10 " + num + "<br>");
    num++;
}
while(num < 10);
document.write("<br>"); //salto de linea

//utilización del break para terminar el bucle//
num = 5;
while (num <= 100){
    document.write("Es menor que 10 " + num + "<br>");
    num++
    if(num == 10){
        break;
    }
}
document.write("<br>"); //salto de linea

//for
for (let i = 0; i < 6; i++) { //variable declara dentro del bucle solo existe dentro del mismo;

    document.write( i + "<br>")

}
document.write("<br>"); //salto de linea

//continue, salta a la siguiente iteración
for (let i = 0; i < 6; i++) {

    if(i == 4){
        continue;
    }
    document.write( i + "<br>")

}
document.write("<br>"); //salto de linea
//for in for on

let animales = ["gato", "perro", "caballos", "Rex"];

// animale hace referencia al indice  
for (animal in animales) { //devuelve las posiciones de los elementos;
    document.write(animal + "<br> ");   
}

for (animal of animales) { //devuelve los valores de los elementos;
    document.write(animal + "<br> ");   
}
document.write("<br>"); //salto de linea

let array1 = ["pedro", "maria", "josefa", "esteban"];
let array2 = ["Elian", "alex", "facu", array1]; //se recorre un array dentro de un array;

for (let array in array2) {

    if(array == 2){
        for (let array of array1) {
            document.write(array + "<br> ");
        }
    }

    document.write(array + "<br> ");
}
document.write("<br>"); //salto de linea

forArray: //le damos un nombre al array;
    for (let array in array2) {

        if(array == 2){
            for (let array of array1) {
                document.write(array + "<br> ");
                break forArray; // al darle un nombre podemos terminar el bucle entero
            }
        }

        document.write(array + "<br> ");
    }


////////////////////////////////Funciones/////////////////////////////////////


function saludar(){ //otra forma saluda = function(){}

    let respuesta = "todo bien";
    if(respuesta == "bien"){
        document.write( respuesta + ", me alegro");
    }else {
        document.write( respuesta + ", una pena")
    }
}

saludar();
document.write("<br>"); //salto de linea

function suma(n1, n2){//scope: utiliznado Let se convierte la variable en regional -
                        //- solo existen dentro de la función
    let res = n1 + n2;

    return res;
}

let resultado = suma(2, 5 + "<br>");

document.write(resultado); //

//funcion flecha
//otra forma de crear funciones.
//beneficio: si se utiliza un solo parametro no hace faltar utilizar parentesis;

//formas de declarar una función
function holaNormal(ape){
    let buenDia = `Hola ${ape} que tengas un buen dia <br>`;
    document.write(buenDia);
};

holaAlt = function(ape){
    let buenDia = `Hola ${ape} que tengas un buen dia <br>`;
    document.write(buenDia);
};

let holaFle = ape =>{ //si es mas de un parametro se utilza parentesis()
    let buenDia = `Hola ${ape} que tengas un buen dia <br>`;
    document.write(buenDia);
};
holaFle("Elian");



let saludo = "Hola ";
let buenDIa = " que tengas un buen dia";
//formas de declarar una función
function holaNormal(ape){
    document.write(saludo + ape + buenDIa);
};

holaAlt = function(ape){
    document.write(buenDia);
};

let holaFlecha = ape =>{ //si es mas de un parametro se utilza parentesis()
    document.write(buenDia);
};



holaNormal("Elian");





