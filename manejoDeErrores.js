'use strict';
try {
    x = 10;
} catch (error) {
    console.log(error);
    console.log(error.name);//nombre del error
    console.log(error.message);//mensaje del error
}finally{
    //Siempre se ejecuta esto codigo y no depende del try
    console.log('termina la revision de errores');
}

console.log('continuamos....');


let resultado = 'Hola';

try {
    if(isNaN(resultado)){
        throw'No es un numero';
    }    
} catch (error) {
    console.log(error);
}