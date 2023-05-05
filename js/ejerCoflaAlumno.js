let cantidad = prompt("Cuantos alumnos hay ?")
let alumTot = [];

for (i = 0; i < cantidad; i++) {
    alumTot[i] = [prompt("Nombre del alumno: " + (i+1)),0];

}

const tomarAsistencia = (nombre, p)=>{
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        alumTot[p][1]++;
    }
}


for (i = 0; i < 30; i++){
    for(alumno in alumTot){
        tomarAsistencia(alumTot[alumno][0],alumno);
    }
}

for (alumno in alumTot){
    let res = `${alumTot[alumno][0]} <br> 
    ___________Asistencia: ${alumTot[alumno][1]} <br>
    ___________Ausencias: ${30 - parseInt(alumTot[alumno][1])} <br>`;
    
    if(30 - alumTot[alumno][1] > 18){
        res += "Reprobado por INASISTENCIA <br> <br>"
    }else {
        res += "<br><br>"
    }
    document.write(res);
}
