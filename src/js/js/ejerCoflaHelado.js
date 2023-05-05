//condicionales
robDin = prompt("cuanto tinero tiene roberto?");
pedDin = prompt("cuanto tinero tiene pedro?");
cofDin = prompt("cuanto tinero tiene cofla?");
cofDin = parseInt(cofDin);


if (robDin < 0.6) {
    alert("Dinero insuficiente");

} else if (robDin >= 0.6 && robDin < 1) {
    alert("Puede comprar un Palito de Agua");
    
} else if (robDin == 1.0 && robDin < 1.6){
    alert("Puede comprar un Helado de Crema");

} else if (robDin == 1.6 && robDin < 1.7){
    alert("Puede comprar un Heladovich");

} else if (robDin == 1.7 && robDin < 1.8){
    alert("Puede comprar un Helardo");

} else if (robDin == 1.8 && robDin < 2.9){
    alert("Potecito de helado con confites");

} else {
    alert("Pote de 1/4 KG");
}

if (pedDin < 0.6) {
    alert("Dinero insuficiente");

} else if (pedDin >= 0.6 && pedDin < 1) {
    alert("Puede comprar un Palito de Agua");

} else if (pedDin == 1.0 && pedDin < 1.6){
    alert("Puede comprar un Helado de Crema");

} else if (pedDin == 1.6 && pedDin < 1.7){
    alert("Puede comprar un Heladovich");

} else if (pedDin == 1.7 && pedDin < 1.8){
    alert("Puede comprar un Helardo");

} else if (pedDin == 1.8 && pedDin < 2.9){
    alert("Potecito de helado con confites");

} else {
    alert("Pote de 1/4 KG");
}

if (cofDin >= 0.6 && cofDin < 1) {
    alert("Puede comprar un Palito de Agua y le sobra: " + (cofDin - 1.6));  

} else if (cofDin == 1.0 && cofDin < 1.6){
    alert("Puede comprar un Helado de Crema");

} else if (cofDin == 1.6 && cofDin < 1.7){
    alert("Puede comprar un Heladovich");

} else if (cofDin == 1.7 && cofDin < 1.8){
    alert("Puede comprar un Helardo");

} else if (cofDin == 1.8 && cofDin < 2.9){
    alert("Potecito de helado con confites");

} else {
    alert("Pote de 1/4 KG");
}