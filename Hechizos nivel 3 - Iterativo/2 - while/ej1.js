const leer = require("prompt-sync")();

/**
 * Ej 1
 * En este ejercicio, te convertirás en un joven mago o bruja que se enfrenta a la misión más importante de todas: derrotar a Lord Voldemort. Sin embargo, para hacerlo, necesitarás afinar tus habilidades mágicas y tu astucia.

Tu tarea es programar un simulador de batalla mágica donde tú, como estudiante de Hogwarts, puedas lanzar hechizos contra Voldemort.

El mecanismo es el siguiente: cada vez que lanzas un hechizo, ingresarás un número que representa tu hechizo. Si ese número coincide con un número aleatorio el cual simula acertar un ataque, lograrás un ataque exitoso contra Voldemort y reducirás su vida. Sin embargo, si no logras acertar el número, Voldemort contraatacará y perderás puntos de vida.

El simulador debe seguir funcionando hasta que alguno de los dos, tú o Voldemort, llegue a sus puntos mínimos de vida. Para el estudiante, los puntos de vida son 1, mientras que para Voldemort son -1 (sí, él es un ser oscuro, después de todo).

¡Prepárate para enfrentar la oscuridad y demuestra que eres digno de portar la varita de sauco!

Recuerda, en Hogwarts la valentía, la inteligencia y el trabajo en equipo son fundamentales. ¡Buena suerte!

Vidas iniciales/minimas, daño jugador/enemigo y hechizos a usar (minimo 3) quedan a su propia eleccion
Considerar que:
- la vida del enemigo no puede ser menor que la del jugador
- cada hechizo tiene un valor de daño unico y el enemigo tiene 1 solo hechizo de ataque
*/


const VIDA_MIN_USER = 1;

const NUMERO_HECIZO_1 = 3;
const DAÑO_HECHIZO_1 = 60;

const NUMERO_HECIZO_2 = 4;
const DAÑO_HECHIZO_2 = 70;

const NUMERO_HECIZO_3 = 1;
const DAÑO_HECHIZO_3 = 90;

const VIDA_MIN_VOLDEMORT = -1;
const ATAQUE_VOLDEMORT =40;


function main() {
    
    let perdedor = false;
    let hechizoIngresado = 0;
    let vidaUser = 200;
    let vidaVoldemort = 300;

    console.log("Cuidado ahì viene Voldemort, detenlo!!!");
    console.log("Los hechizos lanzados tendran una porbabilidad de acertar o no");
    
    
    
    while(perdedor == false){
        let numeroAleatorio = Math.floor((Math.random()*5) + 1);
        
        console.log(numeroAleatorio)
        console.log(`Tendras tres hehizos Hechizo-1[${NUMERO_HECIZO_1}], Hechizo-2[${NUMERO_HECIZO_2}], Hechizo-3[${NUMERO_HECIZO_3}]`);
        hechizoIngresado = Number(leer());

        if (hechizoIngresado == NUMERO_HECIZO_1){
            console.log("[ELEGISTE EL HECHIZO-1]");
            vidaVoldemort = atacarVoldemort(hechizoIngresado, DAÑO_HECHIZO_1, numeroAleatorio, vidaVoldemort);
            vidaUser = ataqueRecibido(hechizoIngresado, numeroAleatorio, vidaUser);
            perdedor = estanMuertos(vidaUser, vidaVoldemort);
        } else if(hechizoIngresado == NUMERO_HECIZO_2){
            console.log("[ELEGISTE EL HECHIZO-2]");
            vidaVoldemort = atacarVoldemort(hechizoIngresado, DAÑO_HECHIZO_2, numeroAleatorio, vidaVoldemort);
            vidaUser = ataqueRecibido(hechizoIngresado, numeroAleatorio, vidaUser);
            perdedor = estanMuertos(vidaUser, vidaVoldemort);
        }else if(hechizoIngresado == NUMERO_HECIZO_3){
            console.log("[ELEGISTE EL HECHIZO-3]");
            vidaVoldemort = atacarVoldemort(hechizoIngresado, DAÑO_HECHIZO_3, numeroAleatorio, vidaVoldemort);
            vidaUser = ataqueRecibido(hechizoIngresado, numeroAleatorio, vidaUser);
            perdedor = estanMuertos(vidaUser, vidaVoldemort);
        }else{
            console.log("numero incoreccto!");
        }

    }
    
}


main();

/**
 * Verifica si el ataque fue exitoso o no
 * @param {Number} numIngresado por el usuario
 * @param {Number} daño recibido por Voldemort
 * @param {Number} numAleatorio generado para comparar probabilidad
 * @param {Number} Voldemort se le restara su vida si se hacierta
 * @returns la vida de Voldemort 
 */
function atacarVoldemort(numIngresado, daño, numAleatorio, Voldemort){
        if (numIngresado == numAleatorio){
            Voldemort -= daño;
            console.log(`[ATAQUE EXITOSO, VOLDEMORT TIENE ${Voldemort}]`);
        }
    return Voldemort;

}

/**
 * Te advierte si fallo y te resta vida por daño
 * @param {number} numIngresado por el usuario
 * @param {Number} numeroHechizo para identificar, que hechizo es
 * @param {Number} vidaJugador se restara
 * @returns Se devolvera el la vidaJugador restada
 */
function ataqueRecibido(numIngresado, numeroHechizo, vidaJugador){
    if(numIngresado != numeroHechizo){
        console.log("[FALLASTE!!!]");
        console.log(`Voldemort te va a atacar`);
        vidaJugador -= ATAQUE_VOLDEMORT;
        console.log(`[ATAQUE RECIBIDO, VIDA JUGADOR ${vidaJugador}]`);
    }

    return vidaJugador;
}

/**
 * verifica si esta alguien murio
 * @param {Number} vidaUser  
 * @param {number} vidaVoldemort 
 * @returns Se entrega un boleano, si esta muerto True
 */
function estanMuertos(vidaUser, vidaVoldemort){
    let confirmacion = false;

    if (vidaUser <= VIDA_MIN_USER){
        confirmacion = true;
        console.log("[GAME OVER]");
    } else if(vidaVoldemort <= VIDA_MIN_VOLDEMORT){
        confirmacion = true;
        console.log("[GANASTE!!!!]");
    }

    return confirmacion;
}