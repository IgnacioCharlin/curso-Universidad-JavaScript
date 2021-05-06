function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(op1 , op2 , funcionCallBack) {

    let res = op1 + op2;
    funcionCallBack('Resultado: ' + res);
    // dentro de la funcionCallBack esta apuntando a la funcion imprimir
}
sumar(5,3,imprimir);

//Llamadas asincronas con uso setTimeout

function miFuncionCallBack() {
    console.log('Funcion llamada despues de 3 segundos');
}

setTimeout(miFuncionCallBack,3000);

//Uso de setInterval
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

setInterval(reloj,1000);