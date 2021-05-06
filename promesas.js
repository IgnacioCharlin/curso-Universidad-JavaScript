let miPromesa = new Promise((resolver,rechazar) => {
    let expresion = true;
    if(expresion){
        resolver('Resolvio correctamente');
    }else{
        rechazar('Se produjo un error');
    }
});

//Ejecutamos la promesa con el then 
// then tiene dos parametros el valor si pasa o si da error
//ejemplo promesa.then(si pasa , si no pasa);
/*
miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);
*/
/*
miPromesa.then(valor => console.log(valor))
.catch(error=>console.log(error));
*/

let promesa = new Promise((resolver) => {
    setTimeout( () => resolver('saludo con promesa y timeout') , 3000);
    //console.log('fin promesa');
});

//promesa.then(valor => console.log(valor));

// async indica que una funcion regresa una promesa
async function miFuncionConPromesa() {
    return 'saludos con promesa y async';
}
//miFuncionConPromesa().then(valor => console.log(valor));

//Async - await
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });
    console.log( await miPromesa );
}

//funcionConPromesaYAwait();

//Promesas , await , async y setTimeout

async function funcionConPromesaAwaitTimeout(){
    let miPromesa = new Promise(resolver => {
        setTimeout(()=>resolver('Promesa con await y settimeout'), 3000);
    });
    console.log(await miPromesa);
}

funcionConPromesaAwaitTimeout();