"use strict" //hacer uso de la diversidad de js. 

console.log('Aplicacion Calculadora');

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    
    //isNaN permite validad si el resultado es aceptable
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    
    document.getElementById('resultadoSuma').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

function resta(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    //let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    //isNaN permite validad si el resultado es aceptable
    /*if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    
    document.getElementById('resultadoResta').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
    */
    let resultado;
    if ((parseInt(operandoA.value <0)) || (parseInt(operandoB.value <0)) || isNaN(operandoA.value) || isNaN(operandoB.value)){
        resultado = 'ingrese numeros positivos';   
    }else{
        resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
        document.getElementById('resultadoResta').innerHTML = `Resultado: ${resultado}`;
        console.log(`Resultado: ${resultado}`);
    }
   

}

function limpiar(){
    location.reload();
}



