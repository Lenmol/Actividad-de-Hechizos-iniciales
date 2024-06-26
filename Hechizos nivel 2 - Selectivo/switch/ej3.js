const leer = require("prompt-sync")();

/**
 * Ej 3
 * Permitir a los estudiantes lanzar hechizos mágicos utilizando un código numérico de 4 dígitos.

Instrucciones:

El programa solicitará al usuario que ingrese un código numérico de 4 dígitos.
Basado en el código ingresado, el programa determinará qué hechizo lanzar.
Utiliza la estructura de control switch para asociar cada código con un hechizo específico.
Si el código ingresado coincide con alguno de los códigos asignados, el programa mostrará el nombre del hechizo correspondiente.
Si el código no coincide con ninguno de los códigos asignados, el programa mostrará un mensaje indicando que el código es incorrecto.
El programa debe asegurarse de que el código ingresado sea un número entero de 4 dígitos.
Hechizos Disponibles:

Expecto Patronum
Wingardium Leviosa
Expelliarmus
Avada Kedavra
*/

const EXPECTO_PATRONUM = 1234;
const WINGARDIUM_LEVIOSA = 4321;
const EXPELLIARMUS = 1111;
const AVADA_KEDAVRA = 2211;


function invocacionEchizos() {
    let codigoIngresado = 0;

    console.log("Ingrese el codigo para invocar un hechizo");
    codigoIngresado = Number(leer());


    switch (codigoIngresado) {
        case EXPECTO_PATRONUM:
            console.log("Expecto Patronum!!!"); 
            break;
        case WINGARDIUM_LEVIOSA:
            console.log("Wingardium Leviosa!!!");
            break;
        case EXPELLIARMUS:
            console.log("Expelliarmus!!!");
            break;
        case AVADA_KEDAVRA:
            console.log("Avada Kedavra!!!");
            break;
        default:
            console.log("El codigo ingresado es incorrecto")
            break;
    }
}


invocacionEchizos();