class Persona{
    static contadorPersona = 0;
    constructor(nombre,apellido,edad){
        this._idPersona = ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        Persona.contadorPersona++;    
    }

    get idPersona(){
        return this._idPersona;
    }


    get nombre(){
        return this._nombre;
    }

    get apellido(){
        return this._apellido;
    }

    get edad(){
        return this._edad;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' +this._edad;
    }
};

class Empleado extends Persona{
    constructor(nombre,apellido,edad,sueldo){
        super(nombre , apellido ,edad);
        this._idEmpleado = Empleado.contadorPersona;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set idEmpleado(idEmpleado){
        this._idEmpleado = idEmpleado;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString() + ' ' +this._idEmpleado + ' '+ this._sueldo;
    }
}

class Cliente extends Persona{
    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre , apellido ,edad);
        this._idCliente = ++Cliente.contadorPersona;
        this._fechaRegistro = fechaRegistro;
    }

    get getIdCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set setIdCliente(idCliente){
        this._idCliente = idCliente;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        super.toString() + ' ' + this._idCliente + ' ' + this._fechaRegistro;
    }
}

let empleado = new Empleado('juan','Perez',25,1,1000);
console.log(empleado);

let cliente = new Cliente('juan' , 'Perez', 25 , 1,20);
console.log(cliente);


console.log(cliente.getIdCliente);
cliente.setIdCliente=5;
console.log(cliente.getIdCliente);

console.log(Persona.contadorPersona);

