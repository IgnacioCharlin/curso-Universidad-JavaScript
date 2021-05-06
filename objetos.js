let persona = {
    nombre: 'Ignacio',
    apellido: 'Charlin',
    edad: 25,
    //Agregar metodo o alguna propiedad mas al objeto
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    },
    //Usamos los set y get para recibir y enviar los valores
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    }
}

persona.lang = 'us';
console.log(persona.lang)

console.log(persona);
console.log(persona.edad);
console.log(persona.nombreCompleto);
// Agregar una propiedad nueva
persona.tel = '4561';
console.log(persona.tel);
//Eliminar una propiedad
delete persona.tel;
// Creando objeto a traves de la palabra new aunque se usa casi siempre la forma de arriba
let persona2 = new Object();
persona2.nombre = 'Juan';
persona2.edad = 53;
console.log(persona2.nombre);
console.log(persona2['edad']);//Otra manera de acceder a una variable 

//for in para recorrer objetos
for (const propiedad in persona2) {
    console.log(propiedad);
}

//Creando objeto con un constructor
function Persona(nombre,apellido,edad){
    this.nombre = nombre ;
    this.apellido = apellido;
    this.edad = edad;
    //Creando Metodo
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
} 

let padre = new Persona('juan','rodriguez',67);
console.log(padre);
// Accediendo al metodo nombreCompleto
console.log(padre.nombreCompleto());

// Otra forma de crear objetos
let miObjeto2 = {};

// Usos de propType - crea propiedad para todos los objetos de una misma clase
Persona.prototype.tel = '456023487';
console.log(padre.tel);

//Metodo Call permite llamar a un metodo definido de otro objeto
let hijo = {
    nombre : 'Felipe',
    apellido : 'Juniors',
    nombreCompleto: function (tel) {
        return this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}
let hija = {
    nombre : 'Juana',
    apellido : 'Lopilatto',
}
//llamamos metodo Call y accedemos a la funcion nombre completo para el objeto hija
console.log(hijo.nombreCompleto.call(hija , '45607879'));

// En cambio el apply funciona igual que el call pero los parametros se mandarn por arreglo
let arreglo = ['47894123'];
console.log(hijo.nombreCompleto.apply(hija , arreglo));
