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
const PLANTAS = ["Mandrágora", "Valeriana", "Bubotuber", "Whomping Willow", "Una planta no permitida"];





function plantaPermitida() {
    let plantaEncontrada = 0;

    console.log("Dime que que planta encontraste, Mandrágora[0], Valeriana[1], Bubotuber[2], Whomping Willow[3] o es otro[4]");
    plantaEncontrada = Number(leer());

    if (plantaEncontrada < 2 ){
        return console.log("Puedes hacer el examen, porque encontraste", PLANTAS[plantaEncontrada]);
    } else if (plantaEncontrada >= 2){
        return console.log("No puede hacer el examen porque encontraste", PLANTAS[plantaEncontrada]);
    } 
    
}
plantaPermitida();
