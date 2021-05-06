//No es posible crear objetos antes de declarar la clase
//let hija = new Persona('luisa','muñoz');

class Persona{
    //Metodo statico constante
    static get MAX_OBJ(){
        return 5;
    }
    //metodo statico
    static contadorDeObjetosPersona = 0;//atributo de nuestra clase
    
    email = 'valor default email';// atributo de nuestros objetos

    constructor(nombre,apellido){
        // se coloca un _ para decir que ese metodo se puede soobrescribir
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorDeObjetosPersona++;
    }
    //metodos get y set
    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
    //creando un metodo
    nombreCompleto(){
        return this._nombre + ' ' +this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }

    //metodo statico
    static saludar(){
        console.log('Hola desde metodo static');
    }

    static saludar2(persona){
        console.log(persona.nombre + ' como estas ?');
    }
    
}
let papa = new Persona('Gabriel' , 'Charlin');
papa.nombre = 'Raul';
console.log(papa.nombre);

//Herencia
class Empleado extends Persona{
    constructor(nombre,apellido,legajo){
        super(nombre,apellido);//llama al constructor de la clase padre
        this._legajo =  legajo;
    }
    get legajo(){
        return this._legajo;
    }
    set legajo(legajo){
        this._legajo = legajo;
    }
    //Sobre escritura del metodo
    nombreCompleto(){
        return this._legajo + ' ' +super.nombreCompleto();
    }
}
let empleado = new Empleado('juan','rodriguez ','1748');
console.log(empleado.toString());

//Consultando el metodo
console.log(empleado.nombreCompleto());

//empleado.saludar(); no es posible llamar a un metodo desde un objeto
Persona.saludar();
Persona.saludar2(empleado);

console.log(Persona.contadorDeObjetosPersona);
console.log(empleado.email);

//Metodo statico constante no modifica su valor
console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);