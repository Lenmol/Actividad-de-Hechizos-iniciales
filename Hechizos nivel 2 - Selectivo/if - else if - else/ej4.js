const leer = require("prompt-sync")();

/**
 * Ej 4 
 * Verificación de Varita Mágica:
 * Pide al usuario el nivel de lealtad y astucia de una varita mágica y verifica si es adecuada para su uso.
 * A partir de 70 nivel de lealtad o 80 en astucia la varita es apta
 * 
 * Por ejemplo si la astucia es 90 y la lealtad es 40 entonces la varita es apta, en otro caso si la astucia es 30 y la lealtad es 60 la varita no es apta
 */
const NIVEL_ACEPTADO_LEALTAD = 70;
const NIVEL_ACEPTADO_ASTUCIA = 80;



function verificacionVarita() {
    let nivelLealtadIngresado= 0;
    let nivelAstuciaIngresado = 0;

    console.log("Ingrese el nivel de lealtad de su varita");
    nivelLealtadIngresado = Number(leer());
    console.log("Ingrese la astucia de su varita");
    nivelAstuciaIngresado = Number(leer());

    if ((nivelLealtadIngresado >= NIVEL_ACEPTADO_LEALTAD )||(nivelAstuciaIngresado >= NIVEL_ACEPTADO_ASTUCIA)){
        return console.log("La varita es apta para su uso")
    } else {
        return console.log("La varita no es apta para su uso")
    }
    
}


verificacionVarita();