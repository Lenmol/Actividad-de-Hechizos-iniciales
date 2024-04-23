const leer = require("prompt-sync")();

/**
 * Ej 2
 * Los Dementores son criaturas oscuras que se alimentan de la felicidad de las personas, dejándolas con recuerdos dolorosos y desesperación. Para protegerse de los Dementores, los estudiantes de Hogwarts aprenden el hechizo Patronus, que repele a estas criaturas y los aleja con recuerdos felices. En este ejercicio, simularemos un encuentro con un Dementor en un mini juego donde un estudiante debe lanzar el hechizo Patronus correctamente para repeler al Dementor y proteger su felicidad. Dependiendo de la cantidad de vida del estudiante, se necesitará ingresar el hechizo Patronus varias veces para vencer al Dementor. Si el estudiante no ingresa el hechizo correctamente, perderá turnos y el Dementor consumirá su felicidad y recuerdos felices, acercándose más a la derrota del estudiante. En otro caso si el estudiante ingresa bien los hechizos y logra vencer al dementor entonces se mostrar un mensaje de victoria
 * 
 * Vida maxima del dementor: 1000
 * Vida maxima del estudiante: 350
 * Daño por turno perdido del dementor al estudiante: 75
 * Daño por hechizo acertado del estudiante contra dementor: 267
 * Turnos totales: 5 
 */



const ATAQUE_ESTUDIANTE = 267;
const ATAQUE_DEMENTOR = 75;
const TURNOS_TOTALES = 5;
const HECHIZO_NECESITADO = "patronus";



    

function main() {
    let = hechizoIngresado = "def hechizo";
    let vidaMaxDementor = 1000;
    let vidaMaxEstudiante = 350;

    for (i = 0 ; i < TURNOS_TOTALES ; i++){
        

        console.log(`Di el hechizo correcto estudiante tenes ${vidaMaxEstudiante}, sino el dementor te atacara!`);
        hechizoIngresado = String(leer());
        vidaMaxDementor = atacandoDementor(hechizoIngresado, vidaMaxDementor);
        vidaMaxEstudiante = ataqueRecibido(hechizoIngresado, vidaMaxEstudiante);

         if (vidaMaxEstudiante <= 0){
            console.log("Perdiste contra el dementor");
            i = TURNOS_TOTALES
            
        } else if(vidaMaxEstudiante <= 180 ){
            console.log(`Te va a ganar tenes ${vidaMaxEstudiante} de vida, repite el hechizo`);
            hechizoIngresado = String(leer());
            vidaMaxDementor = atacandoDementor(hechizoIngresado, vidaMaxDementor);
            console.log("Otra vez!!");
            hechizoIngresado = String(leer());
            vidaMaxDementor = atacandoDementor(hechizoIngresado, vidaMaxDementor);
            vidaMaxEstudiante = ataqueRecibido(hechizoIngresado, vidaMaxEstudiante);
            
        } 
    }
}

main();

/**
 * Atacando a dementor
 * @param {string} ataqueHechizo el hechizo ingresado
 * @param {Number} vidaDementor es la vidaMaxDementor
 * @returns 
 */
function atacandoDementor(ataqueHechizo, vidaDementor) {
    if (ataqueHechizo == HECHIZO_NECESITADO){
        vidaDementor -= ATAQUE_ESTUDIANTE;
        if (vidaDementor <= 0){
        console.log("Lo lograste, derrotaste a Dementor");
        i = TURNOS_TOTALES;
        }else{
        console.log(`bien Dementor tiene ${vidaDementor}, pero falta para ganarle a dementor!!`);
        }
    } 
    return vidaDementor;
}

/**
 * El daño que te hizo Dementor
 * @param {string} hechizoFallido el hechizo ingresado
 * @param {number} miVida la vidaMaxEstudiante
 * @returns 
 */    
function ataqueRecibido(hechizoFallido, miVida){

    if (hechizoFallido != HECHIZO_NECESITADO){
        miVida -= ATAQUE_DEMENTOR;  
        console.log(`Te quivocaste solo tienes ${miVida} de vida`);
    }
    return miVida;
}
