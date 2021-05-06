function miFuncion() {
    console.log('saludo desde mi función');
}

//let funcionFlecha = ()=>{
//    console.log('Saludo desde funcion flecha');
//}

const funcionFlecha = () => console.log('saludo desde mi funcion flecha');

funcionFlecha();

//const saludar = (nombre) => {
//   return 'Hola ' + nombre;
//}

const saludar = (nombre) => 'Hola ' + nombre;
console.log(saludar('nacho'));

const regesarObjeto = () =>({nombre: ' Juan ' , apellido :' Perez ' });
console.log(regesarObjeto());

