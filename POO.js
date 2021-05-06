class Empleado{
    constructor(nombre,sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo; 
    }

    obtenerDetalles(){
        return `Empleado : nombre : ${this.nombre} , sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this.departamento = departamento
    }

    //Aplicamos la sobreescritura
    obtenerDetalles(){
        return `${super.obtenerDetalles()}, departamento: ${this.departamento}`;
    }
}
//Polimorfismo - multiples formas en que se puede llamar un metodo
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    //palabra instaceof
    if(tipo instanceof Gerente){
        console.log('El es Gerente');
    }
}

let gerente1 = new Gerente('juan',2000,'rrhh');
let empleado1 = new Empleado('rodrigo',1000);
console.log(gerente1);

imprimir(empleado1);
imprimir(gerente1);



