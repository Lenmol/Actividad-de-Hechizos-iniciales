const leer = require("prompt-sync")();

/* Diario de Tom Riddle        es "R1dd13?" 
        - donde ? es un numero generado aleatoriamente entre -3 y 20 
    1. Anillo de Gaunt             es "?G4unt!" 
        - donde ? es un numero generado aleatoriamente entre -100 y -70
    1. Copa de Helga Hufflepuff    es "H3l?ga!" 
        - donde ? es un numero generado aleatoriamente entre 4 y 12
    1. Diadema de Rowena Ravenclaw es "?R4vena" 
        - donde ? es un caracter generado aleatoriamente entre a y e 
    1. Nagini (serpiente)          es "N@9ini?" 
    *///  - donde ? es un caracter generado aleatoriamente entre H y K


    /* Cada Horrocrux tiene un 5% de probabilidad de quitar la cordura y salud totalmente antes de cada intento, esta probabilidad aumenta un 2.4% por cada horrocrux destruido */

    

/*     



solo podra rechazar un tipo de daño en especifico y el mismo tendra que indicar si desea proteger la cordura o su salud. La probabilidad de que esto suceda es de un 50% y por cada horrocrux destruido disminuye un 11.875% */
const DAÑO = {
    A_CORDURA:5.7,
    A_SALUD:10.4,
}

const INTENTOS_MAX = 30;

function main() {
    let personaje= {
        cordura:200,
        salud:400,
        numIngresado:0,
    }

    let probabilidad = {
        proteccion:Math.floor(Math.random()),
        ataqueMortalHorrocrux:Math.floor(Math.random()),
    }

    let probabilidad2 = {
        tomRiddle : Math.floor(Math.random()),
        anilloGaunt: Math.floor(Math.random()),
        copaHelgaHufflepuff:Math.floor(Math.random()),
        DiademaRowenaRavenclaw: Math.floor(Math.random()),
        Nagini: Math.floor(Math.random()),



    }


    const min = -6;
const max = 9;
let a = Math.floor(Math.random() * (max - min + 1) + min);

console.log(a);


    console.log("Ingrese un codigo para derrotar al Horrocox");
    personaje.numIngresado = leer();

    switch (personaje.numIngresado) {
        case "R1dd13?":
            console.log("Lograste vencerlo!!!.faltan 4");
            break;
        case "?G4unt!":
            console.log("Lograste vencerlo!!!.faltan 3");
        break;
        case "H3l?ga!":
            console.log("Lograste vencerlo!!!.faltan 2");
            break;
        case "?R4vena?":
            console.log("Lograste vencerlo!!!.faltan 1");
            break;
        case "N@9ini?":
            console.log("felicidades venciste al final boss");
            break;
        default:
            console.log("Hechizo incorrecto")
            break;
    }

    

    

}


main();