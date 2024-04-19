const leer = require("prompt-sync")();

/**
 * Ej 1
 * Es crucial que los estudiantes aprendan los nombres de los hechizos correctamente para realizar magia de manera efectiva. En la clase de Encantamientos, los estudiantes deben demostrar su habilidad para recordar y lanzar los hechizos correctamente. Ayuda a simular este proceso creando un programa que solicite al usuario el nombre de un hechizo y le dé un número limitado de intentos para ingresarlo correctamente. Si el usuario ingresa el nombre del hechizo correctamente, el programa lo felicitará y finalizará. Si el usuario no logra ingresar el hechizo correctamente después de los intentos permitidos, el programa lo informará y finalizará.
 * 
 * 
 * Por ejemplo: hechizo "Wingardium leviosa", cantidad de intentos maximos 4
 * 
 * Extra: permitir que el programa acepte 3 hechizos diferentes
 */
const INTENTOS_MAXIMOS = 3;

const EXPELLIARMUS = "expelliarmus";
const AVADA_KEDAVRA = "avada kedavra"
const HECHIZO_NECESITADO = "wingardium leviosa";

function nombraHechizoCorrectamente() {
    let hechizoNombrado = "def echizo";
    
   
    for (i = 1 ; i <= INTENTOS_MAXIMOS; i++ ){
        console.log("Dime el nombre de un hechizo");
        hechizoNombrado = String(leer());


        if (hechizoNombrado == HECHIZO_NECESITADO){
            return console.log("Felicidades!!!, lo dijiste bien");
            i = INTENTOS_MAXIMOS;
        } else if (hechizoNombrado == AVADA_KEDAVRA){
            return console.log("Felicidades!!!, lo dijiste bien");
            i = INTENTOS_MAXIMOS;
        } else if (hechizoNombrado == EXPELLIARMUS){
            return console.log("Felicidades!!!, lo dijiste bien");
            i = INTENTOS_MAXIMOS;
        } else if (i == INTENTOS_MAXIMOS) {
            console.log(`Lo siento, pero te equivocaste mas de ${INTENTOS_MAXIMOS} que son los intentos maximos`)
        } else if(hechizoNombrado != HECHIZO_NECESITADO) {
            console.log("INCORRECTO, intentalo de nuevo");
        }
    }
}

nombraHechizoCorrectamente();