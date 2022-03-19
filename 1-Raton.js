// creando la clase Raton
// heredar = extends
class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor (tipoEntrada,marcaRaton){
        super(tipoEntrada, marcaRaton); //super: permite inicializar los atributos del método al que se está llamando
        this._idRaton = ++Raton.contadorRatones; //para aumentar el id en 1 con el ++
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton : [idRaton:   ${this.idRaton}, tipoEntrada: ${this.tipoEntrada}, marca: ${this.marcaRaton}]`;
    }
}
