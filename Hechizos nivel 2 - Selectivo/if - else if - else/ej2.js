const leer = require("prompt-sync")();

/**
 * Ej 2 
 * Elección de Casa en Hogwarts:
 * Solicita al estudiante su puntuación en un examen y determina a qué casa de Hogwarts pertenecería.
 * Gryffindor - a partir de 90 puntos
 * Hufflepuff - a partir de 70 puntos
 * Ravenclaw - a partir de 50 puntos
 * Slytherin - menos de 50 puntos
 * 
 * Por ejemplo si el estudiante saco 100 puntos entonces pertenece a Gryffindor o si sacara 30 entonces pertenece a Slytherin
 */

const GRYFFINDOR = 90;
const HUFFLEPUFF = 70;
const RAVENCLAW= 50;
// const SLYTHERIN= 50;
let puntuacionExamen = 0;

console.log("Ingrese su puntuacion del examen");
puntuacionExamen = Number(leer());

function eleccionCasaHogwarts(puntuacionExamen) {
    if (puntuacionExamen >= GRYFFINDOR){
        return console.log("usted pertenece a Gryffindor");
    } else if(puntuacionExamen >= HUFFLEPUFF){
        return console.log("Usted pertenece a Hufflepuff");
    } else if (puntuacionExamen >= RAVENCLAW) {
        console.log("Usted pertenece a Revenclaw");
    } else {
        return console.log("Usted pertenece a Slytherin");
    }
}

eleccionCasaHogwarts(puntuacionExamen);