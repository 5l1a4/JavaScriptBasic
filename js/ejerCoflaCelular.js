
class Celulares {

    constructor(color, peso, camara, video, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionDeCamara = camara;
        this.resolucionDeVideo = video;
        this.cantidadDeRam = ram;
        this.encendido = false;
        this.reiniciar = false;
        
    }

    botonDePrender(){
        if(this.encendido == false){
            alert("Celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }

    optReiniciar(){
        if(this.reiniciar == false){
            alert("Reiniciando celular");
            this.reiniciar = true;
        } else{
            alert("Celular apagado");
            this.reiniciar = false;
        }
    }

    tomarFoto(){
        alert(`Resolucion del la foto: ${this.resolucionDeCamara}`);
    }

    tomarVideo(){
        alert(`Resolucion del video: ${this.resolucionDeVideo}`);
    }
    
    cantidadRam(){
        alert(`Cantidad de Ram: ${this.cantidadDeRam}`);
    }

    mostrarInfo() {
        return `
            Color: ${this.color} <br>
            Peso: ${this.peso} <br>
            Camara: ${this.resolucionDeCamara} <br>
            Video ${this.resolucionDeVideo} <br>
            Ram: ${this.cantidadDeRam}
        `;
    }

}

class GamaAlta extends Celulares {

    constructor(color, peso, camara, video, ram, camSlow, reFacial, camExtra){
        super(color, peso, camara, video, ram);

        this.camSlow = camSlow;
        this.camExtra = camExtra;
        this.reFacial = reFacial;
    }
    
    camaraLenta(){
        alert("Incluye camara lenta: " + this.camSlow);
    }

    camaraExtra(){
        alert("Resolucion de la camara extra: " + this.camExtra);
    }

    reconocimientoFacil(){
        alert("Incluye reconomiento facial: " + this.reFacil);
    }

    mostrarInfo(){
        document.write(`
        <br>
            Color: ${this.color} <br>
            Peso: ${this.peso} <br>
            Camara: ${this.resolucionDeCamara} <br>
            Video ${this.resolucionDeVideo} <br>
            Ram: ${this.cantidadDeRam} <br>
            Camara lenta: ${this.camSlow} <br>
            Camara extra: ${this.camExtra} <br>
            Reconocimiento facial: ${this.reFacial}
        `);
    }

}



celular1 = new Celulares("Rojo", "30gramos", "4MegaPixeles", "1200x1780", "2GB");
celular2 = new Celulares("verde", "52gramos", "2MegaPixeles", "1920x1200", "3GB");


celular3 = new GamaAlta("Rojo", "30gramos", "4MegaPixeles", "1200x1780", "2GB", "si", "si", "720x650");

document.write(celular1.mostrarInfo());

celular3.mostrarInfo();

// celular1.botonDePrender();
// celular1.tomarFoto();
// celular1.optReiniciar();
// celular1.tomarVideo();
// celular1.cantidadRam();