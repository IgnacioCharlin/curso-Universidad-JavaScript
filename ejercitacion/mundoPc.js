class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(entrada){
        this._tipoEntrada = entrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    toString(){
        return `tipoEntrada: ${this._tipoEntrada} ,Marca: ${this._marca}`;
    }
}
class Raton extends DispositivoEntrada{
    static contadorRatornes = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada , marca);
        this._idRaton = ++Raton.contadorRatornes;
    }
    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `idRaton: ${this._idRaton} ${super.toString()}`;
    }
}

class Teclado extends DispositivoEntrada{
    
    static contadorTeclado = 0;    

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `idTeclado: ${this._idTeclado} ${super.toString()}`;
    }
}

class Monitor{
    static contadorMonitores = 0;
    constructor(marca,tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }

    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `IdMonitor : ${this._idMonitor} marca: ${this._marca} tamaño: ${this._tamaño}`;
    }
}

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get monitor(){
        return this._monitor;
    }

    set monitor(monitor){
        this._monitor = monitor;
    }

    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }

    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }

    toString(){
        return `idComputadora: ${this.idComputadora} nombre: ${this._nombre} monitor: ${this.monitor.toString()} teclado: ${this.teclado.toString()} raton: ${this.raton.toString()}`;
    }
}

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    get computadora(){
        return this._computadoras;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let listadoComputadoras = '';

        for(let computadora of this._computadoras){
            listadoComputadoras+= computadora.toString();
        }

        console.log(listadoComputadoras);
    }   

}

let teclado = new Teclado('usb','genius');
let raton = new Raton('ps2' , 'hp');
let monitor = new Monitor('samsung',20);
let computadora = new Computadora('compaq',monitor,teclado,raton);
let orden = new Orden();
orden.agregarComputadora(computadora);
orden.mostrarOrden();