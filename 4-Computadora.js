//CREANDO LA CLASE COMPUTADORA
class Computadora{
    static contadorComputadora = 0;

    constructor(nombre, monitor, teclado, raton){
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = ++Computadora.contadorComputadora;
    }

    get nombre (){
        return this._nombre;
    }
    get monitor (){
        return this._monitor;
    }
    get teclado (){
        return this._teclado;
    }
    get raton (){
        return this._raton;
    }
    get idComputadora (){
        return this._idComputadora
    }

    set nombre (nombre){
        this._nombre = nombre;
    }
    set monitor (monitor){
        this._monitor = monitor;
    }
    set teclado (teclado){
        this._teclado = teclado;
    }
    set raton (raton){
        this._raton = raton;
    }
    set idComputadora (idComputadora){
        this._idComputadora = idComputadora;
    }

    toString(){
        return `Computadora: [idComputadora: ${this._idComputadora}, nombre: ${this._nombre}: ${this._monitor}: ${this._teclado}, raton: ${this.raton}]`;
    }
}
