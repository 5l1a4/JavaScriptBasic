
class Apps {

    constructor(cantDes, puntuacion, peso){

        this.cantDes = cantDes;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalar = false;
        this.desinstalar = false;
        this.abrir = false;
        this.cerrar = false;
    };

    mostCantDes(){
        alert(`Cantidad de descargas: ${this.cantDes}`);
    }

    mostPuntuacion(){
        alert(`Puntuacion: ${this.puntuacion} estrellas`);
    }

    cantPeso(){
        alert(`Pesa: ${this.peso}`);
    }

    abrirApp(){
        if(this.abrir == false && this.instalar == true){
            this.abrir = true;
            this.cerrar = false;
            alert("Abriendo App");
        }
    }

    cerrarApp(){
        if(this.cerrar == false && this.instalar == true){
            this.cerrar = true;
            this.abrir = false;
            alert("Cerrando App");
        }
    }

    instalarApp(){
        if (this.instalar == false ) {
            this.instalar = true;
            this.desinstalar = false;
            alert("App instalada")
        }
    }

    desinstalarApp(){
        if (this.desinstalar == false) {
            this.desinstalar = true;
            this.instalar = false;
            alert("Desinstalando app");            
        }
    }


    mostInfo(){
        document.write(`
            Descargas: ${this.cantDes} <br>
            Puntuacion: ${this.puntuacion} <br>
            Peso: ${this.peso} 
        `);
    }

}

celular1 = new Apps(43000, 4.2, "120 MB");

celular1.mostInfo();
celular1.cantPeso();

celular1.instalarApp();
celular1.desinstalarApp();
celular1.instalarApp();
celular1.abrirApp();
celular1.cerrarApp();
celular1.cerrarApp();