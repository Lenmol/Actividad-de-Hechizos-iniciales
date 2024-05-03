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
const DAÑO_HECHIZO_1 = 40;

const NUMERO_HECIZO_2 = 7;
const DAÑO_HECHIZO_2 = 60;

const NUMERO_HECIZO_3 = 1;
const DAÑO_HECHIZO_3 = 30;

const VIDA_MIN_VOLDEMORT = -1;
const ATAQUE_VOLDEMORT =50;


function main() {
    let voldemorVivo = true;
    let jugadorVivo = true;
    let perdedor = false;
    let hechizoIngresado = 0;
    let numeroAleatorio = Math.floor((Math.random()*10) + 1);
    let vidaUser = 200;
    let vidaVoldemort = 300;

    console.log("Cuidado ahì viene Voldemort, detenlo!!!");
    console.log("Los hechizos lanzados tendran una porbabilidad de acertar o no");
    console.log("Tendras tres hehizos Hechizo-1[3], Hechizo-2[7], Hechizo-3[1]");
    hechizoIngresado = Number(leer());
    
    
    while((voldemorVivo && jugadorVivo) == true){
        
        atacarVoldemort(hechizoIngresado, NUMERO_HECIZO_1, DAÑO_HECHIZO_1, numeroAleatorio, vidaVoldemort);

        ataqueRecibido(hechizoIngresado, NUMERO_HECIZO_1, vidaUser);
        break;
        

    }
    
}


main();

function atacarVoldemort(numIngresado, numeroHechizo, daño, numAleatorio, Voldemort){

    if (numIngresado == numeroHechizo){
        console.log("[ELEGISTE EL HECHIZO-1]");
        if (numIngresado == numAleatorio){
            Voldemort -= daño;
            console.log(`[ATAQUE EXITOSO, VOLDEMORT TIENE ${Voldemort}]`);
        }
    }
    return Voldemort;

}

function ataqueRecibido(numIngresado, numeroHechizo, vidaJugador){
    if(numIngresado != numeroHechizo){
        console.log("[FALLASTE!!!]");
        console.log(`Voldemort te va a atacar`);
        vidaJugador -= ATAQUE_VOLDEMORT;
        console.log(`[ATAQUE RECIBIDO, VIDA JUGADOR ${vidaJugador}]`);
    }
    return vidaJugador;
}