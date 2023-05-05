//Dejar pasar solo a los mayores de edad;
//La primera persona que entre despues de las 2Am, no paga;

let entrada = false;

let invitadoDate = (horario)  =>{

    let edad = prompt("Cual es tu edad?");

    if(edad >= 18 && horario == 2 && entrada == false) {
        entrada = true;
        alert("Puede pasar gratis por ser el primero");

    } else if (edad >= 18) {
        alert("Puede pasar pagando la entrada");
        
    } else{
        alert("No puede pasar, no tiene la edad suficiente");
    }
};

invitadoDate(23);
invitadoDate(2);
invitadoDate(2);
invitadoDate(23);








