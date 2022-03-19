//CREANDO LA CLASE MONITOR
class Monitor{
    static contadorMonitor = 0;

    constructor(marca, tamano,){
        this.marca =  marca;
        this.tamano = tamano;
        this._idMonitor = ++Monitor.contadorMonitor;
    }

    get marca (){
        return this._marca;
    }
    get tamano(){
        return this.tamano;
    }
    get idMonitor(){
        return this._idMonitor;
    }

    set marca (marca){
        this._marca = marca;
    }
    set tamano (tamano){
        this._tamano = tamano;
    }
    set idMonitor (idMonitor){
        this._idMonitor = idMonitor;
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamano}]`;
    }
}
