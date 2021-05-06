class Producto{
    static contadorProductos = 0;
    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get getIdProducto(){
        return this._idProducto;
    }

    get getNombre(){
        return this._nombre;
    }

    get getPrecio(){
        return this._precio;
    }

    set setNombre(nombre){
        this._nombre = nombre;
    }

    set setPrecio(precio){
        this._precio = precio;
    }

    toString(){
        return this._idProducto + ' ' + this._nombre + ' ' + this._precio;
    }
}
class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
        this.contadorProductosAgregados = 0;
    }
    get getIdOrden(){
        return this.idOrden;
    }

    get producto(){
        return this.productos;
    }
    
    agregarProducto(producto){
        if (this.productos.length < Orden.MAX_PRODUCTOS) {
            this.productos.push(producto);
            Orden.contadorProductosAgregados++;
        }else{
            console.log('No se puede agregar mas productos');
        }
    }

    calcularTotal(){
        let total = 0;
        for(let producto of this.productos){
            total += producto.getPrecio;
        }
        return total;
    }

    mostrarOrden(){
        let ordenProducto = '';
        for(let producto of this.productos){
            ordenProducto+= producto.toString()+ ' ';
        }
        console.log(`Orden: ${this.idOrden} Total: ${this.calcularTotal()} , Productos: ${ordenProducto}`);
    }
}

let producto1 = new Producto('camisa',100);
let producto2 = new Producto('pantalon',200);
let orden1 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

console.log(orden1.calcularTotal());

orden1.mostrarOrden();