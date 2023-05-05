
let n1 = 0, n2 = 0;

let sum = (n1,n2) =>{
    return parseInt(n1) + parseInt(2);
}
let res = (n1,n2) =>{
    return parseInt(n1) - parseInt(2);
}
let mul = (n1,n2) =>{
    return parseInt(n1) * parseInt(2);
}
let div = (n1,n2) =>{    
    return parseInt(n1) / parseInt(n2);
}

let num1 = prompt("Ingresa un numero: ");
let num2 = prompt("Ingresa otro numero: ");

document.write("Suma: " + sum(num1, num2) + 
         "<br> Resta: " + res(num1, num2) + 
         "<br> Multiplicación: " + mul(num1,num2) + "<br>");

    if(num1 == 0 || num2 == 0 ){
        document.write("No se puede dividir por 0 <br>");        
    } else {        
        document.write("Division: " + div(num1,num2));
    }

         
