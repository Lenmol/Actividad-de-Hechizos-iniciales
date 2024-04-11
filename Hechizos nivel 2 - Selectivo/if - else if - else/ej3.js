const leer = require("prompt-sync")();

/**
 * Ej 3 
 * Examen de Herbología:
 * Pide al estudiante el nombre de la planta que encontro y determina si es apta para el examen de Herbología.
 * Si es Mandrágora o Valeriana entonces son aptas
 * Si son Bubotuber o Whomping Willow es necesario informar que no es posible debido a lo peligrosas que son
 * Cualquier otro tipo de planta no sera aceptada
 * 
 * Por ejemplo si el estudiante quiere traer un Whomping Willow no podra hacer el examen, en otro caso si trae una Valeriana se le otorgara el permiso
 */
[]

let plantaEncontrada = 0;


console.log("Dime que que planta encontraste, Mandrágora[1], Valeriana[2], Bubotuber[3], Whomping Willow[4] o es otro[5]");
plantaEncontrada = Number(leer());

function plantaPermitida(plantaEncontrada) {
    
    if (plantaEncontrada <= 2 ){
        return console.log("Puedes hacer el examen");
    } else if (plantaEncontrada >= 3){
        return console.log("No puede hacer el examen");
    }
}


plantaPermitida(plantaEncontrada);