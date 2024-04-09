const leer = require("prompt-sync")();

/**
 * Ej 3 
 * Cálculo del Peso de la Nimbus 2000
 * Preguntale a Harry el peso base de la Nimbus 2000 en kg y la cantidad de plumas de fénix utilizadas para su fabricación, luego calcula el peso total de la escoba considerando que cada pluma añade 0.1 kg
 * 
 * Por ejemplo si la cantidad de plumas usadas son 350 y el peso base es de 1.5kg entonces el total es de 36.5kg
 */
const PESO_PLUMAS = 0.1;
let pesoBaseNimbus2000 = 0;
let cantPlumasFeniz= 0;

console.log("Che, Harry cual es peso de la Nimbus 2000 en kg?");
pesoBaseNimbus2000 = Number(leer());
console.log("Tambien dime la cantidad de plumas de féniz que se usaron");
cantPlumasFeniz = Number(leer());

function pesoEscoba(pesoBaseNimbus2000, cantPlumasFeniz) {
    let pesoTotalPlumas = cantPlumasFeniz * PESO_PLUMAS;
    let pesoNimbus2000 = pesoBaseNimbus2000 + pesoTotalPlumas;
    return console.log(`El peso de la Nimbus 2000 es: ${pesoNimbus2000} kg`)
}


pesoEscoba(pesoBaseNimbus2000, cantPlumasFeniz);