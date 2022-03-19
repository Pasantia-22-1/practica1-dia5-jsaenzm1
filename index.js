
function obtenerValores(){
    const forma = document.getElementById('forma');
   
    let tiporaton = forma['tiporaton'];
    let marcaraton = forma['marcaraton'];

    let tipoteclado = forma['tipoteclado'];
    let marcateclado = forma['marcateclado'];

    let marcamonitor = forma['marcamonitor'];
    let tamanomonitor = forma['tamanomonitor'];
    
    let marcacomputadora = forma['marcacomputadora'];

    let raton1 = new Raton(tiporaton.value, marcaraton.value)
    let teclado1 = new Teclado(tipoteclado.value, marcateclado.value);
    let monitor1 = new Monitor(marcamonitor.value, tamanomonitor.value);
    
    let computadora1 = new Computadora(marcacomputadora.value, monitor1.toString(), teclado1.toString(), raton1.toString());

    var orden1 = new Orden();
    orden1.agregarComputadora(computadora1.toString());
    let resultado = orden1.toString();
    //console.log(resultado)
    document.getElementById('resultado').innerHTML = `${resultado}`;
    eliminarInputs();
} 

function eliminarInputs(){
    document.getElementById("tiporaton").value = "";
    document.getElementById("marcaraton").value = "";
    document.getElementById("tipoteclado").value = "";
    document.getElementById("marcateclado").value = "";
    document.getElementById("marcamonitor").value = "";
    document.getElementById("tamanomonitor").value = "";
    document.getElementById("marcacomputadora").value = "";
}

