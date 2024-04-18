const leer = require("prompt-sync")();

/**
 * Ej 1
 * Clasificación de Pociones:
 * Solicita al estudiante el nombre de una poción y muestra su nivel de dificultad de acuerdo a su complejidad.
 * 
 * Pociones conocidas: 
 * Felix Felicis - es extremadamente compleja y peligrosa.
 * Polvo de Flu - es compleja pero útil en la red de transportación.
 * Poción Multijugos - es complicada pero muy útil para transformaciones temporales.
 * Cualquier otro tipo de pocion indicar que: No tenemos información sobre esa poción en nuestros registros.
 * 
 */



function clasificaciónPosion() {
    let posion = "def poción";

    console.log("Dime el nombre de la poción y te dire su dificultad de uso");
    posion = String(leer());

    switch (posion) {
        case "Felix Felicis":
            console.log("es extremadamente compleja y peligrosa.")
            break;
        case "Polvo de Flu":
            console.log("es compleja pero útil en la red de transportación.");
            break;
        case  "Pocion Multijugos":
            console.log("es complicada pero muy útil para transformaciones temporales.");
            break;
        default:
            console.log("No tenemos información sobre esa poción en nuestros registros")
            break;
    }
}


clasificaciónPosion();