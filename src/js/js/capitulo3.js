
//////////////////////////creación de clases////////////////////////////
//conceptos basicos de POO
class Animal {

    constructor(especie,edad,color){ //el this, solo se utiliza en el constructor;
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años 
        y soy de color ${this.color}`;
    }
    // se lo considera metodo a la funcion que esta dentro de una clase
    //los metodos no pueden ser creados de la forma flecha (=>) 
    //y tampoco usar la palabra funtion
    verInfo(){
        document.write(this.info + "<br>");
    }
}


//herencia

class Perro extends Animal{
    constructor(especie,edad, color, raza){
        super(especie,edad, color);
        this.raza = null;
    }
    set setRaza(newName){
        this.raza = newName;
    }

    get getRaza() {
        return this.raza; 
    }

}


/// objeto new perro;
const perrito = new Perro("perro", 12, "rojo", "doberman");

// objeto new animal;
const perro = new Animal("perro", 5, "rojo");
const gato = new Animal("gato", 8, "negro");
const pajaro = new Animal("pajaro", 2, "verde");

// console.log(perro.info);
// document.write(perro.info);

perro.verInfo();
gato.verInfo();

perrito.verInfo();

perrito.setRaza = "Pedro";

document.write(perrito.getRaza);


///////////////////////////////////caracteristicas de la POO////////////////////////////////
//abstraccion: reduccir un objeto sin perder la idea de lo que es o su esencia.
//modularidad: dividir un gran problema en pequeños problemas faciles de resolver.
//encapsulamiento: encapsular los datos para que no sea tan facil acceder a ella.
//polimorfismo: la capacidad de que un objeto se comporte distinto del resto por sus propiedad.

//herencia: se heredan las propiedades de la clase padre, y la clase hijo tiene propiedades especificas.
//ejemplo: clase padre: Animal, Clase hijo: Perro.

