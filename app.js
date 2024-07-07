let numeroSecreto = 0;
let intentos =0;
let numeroMaximo=10;
let listasNumerosSorteados = [];

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    
    
    if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos==1 ? 'vez' : 'veces')} ` );
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario > numeroSecreto){
             asignarTextoElemento('p','El numero secreto es menor');
        }else{
             asignarTextoElemento('p','El numero secreto es mayor');

        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
  document.querySelector('#valorUsuario').value ='';
   
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    if(listasNumerosSorteados.length==numeroMaximo){

        asignarTextoElemento('p',`ya se sortearon todos los numeros posibles`);
    }else{

    if(listasNumerosSorteados.includes(numeroGenerado)){

        return generarNumeroSecreto();

    }else{
        listasNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

}
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}
condicionesIniciales()
