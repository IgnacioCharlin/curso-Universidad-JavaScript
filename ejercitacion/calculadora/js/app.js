let sumar = () =>{
    let resultado = 0;
    let operador1 = document.getElementById('operador-1').value;
    let operador2 = document.getElementById('operador-2').value;
    try{
        if (operador1 === '' || operador2 === '') {
            throw 'No se pudo realizar la suma';
        }else{
            resultado = Number(operador1) + Number (operador2);
        }
    }
    catch (error){ 
        resultado = error;
    }

    document.getElementById('resultado').innerHTML = `Resultado : ${resultado}`;
}