//Llamado
//Hosting  es poder llamar una antes de declararlo.
let resultado = miFuncion(5,4);
console.log(resultado);
//Declaracion de la funcion
function miFuncion(a,b) {
    console.log(arguments[0]); // accediendo al valor de un argumento
    return a + b;
}

// Declaracion funcion de tipo Expresion
let x  = function (a , b) {
    return a - b;
};
console.log( x(5,2) );

//Funciones self-invoking  -  Se auto invocan
(function (a,b) {
    console.log(a*b);
})(4,5);// De esta manera se autollama la funcion y se llama por una unica vez

// Funciones de tipo Objeto = String
console.log(typeof miFuncion);

var miFuncionTexto = miFuncion.toString();
console.log(typeof miFuncionTexto);

//Funciones en flecha
const dividir = (a,b) =>a / b;
console.log(dividir(10,2));


//Sumar todos los numeros ingresador por el argumento

function sumatoria() {
    let resultado = 0;
    for (let index = 0; index < arguments.length; index++) {
        resultado += arguments[index];
    }
    return resultado;
}

console.log(sumatoria(7,8,7,3,4));


//Pasos por valor en funciones
let a = 10;
function cambiarValor(b) {
    b = 20;
}
cambiarValor(a);
//console.log(b); // B no esta definida ya que solo se usa dentro de la funcion.

//Pasos por referencia
const hombre = {
    nombre:'Juan',
    apellido:'Perez',
    edad:59,
}

function cambiarValorObjeto(p1) {
    p1.nombre = 'Raul';
    p1.edad = 75;
}

cambiarValorObjeto(hombre);
console.log(hombre);

