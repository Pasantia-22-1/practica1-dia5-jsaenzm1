//CREANDO LA CLASE ORDEN
class Orden {
    static contadorOrden = 0;
    constructor(){
        this._computadora = [];
        this._idOrden = ++Orden.contadorOrden;
    }
    get computadora (){
        return this._computadora;
    }
    get idOrden(){
        return this._idOrden;
    }
    set computadora (computadora){
        this._computadora = computadora;
    }
    set idOrden (idOrden){
        this._idOrden = idOrden;
    }
    agregarComputadora(computadora){
        this._computadora.push(computadora)
    }
    mostrarOrden(){
        console.log(`Orden: [idOrden: ${this._idOrden}, ${this._computadora}]`);
    }
    toString(){
        return `Orden: [idOrden: ${this._idOrden}, ${this._computadora}]`;
    }
}
