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


let vidaMaxDementor = 1000;
    let vidaMaxEstudiante = 350;
    let = hechizoIngresado = "def hechizo";

function main() {
    

    for (i = 1 ; i < TURNOS_TOTALES ; i++){
        console.log(i)

        console.log(`Di el hechizo correcto estudiante tenes ${vidaMaxEstudiante}, sino el dementor te atacara!`);
        hechizoIngresado = String(leer());
        atacandoDementor();
        ataqueRecibido();

         if (vidaMaxEstudiante <= 0){
            console.log("Perdiste contra el dementor");
            
        } else if(vidaMaxEstudiante <= 180 ){
            console.log(`Te va a ganar tenes ${vidaMaxEstudiante} de vida, repite el hechizo`);
            hechizoIngresado = String(leer());
            atacandoDementor();
            console.log("Otra vez!!");
            hechizoIngresado = String(leer());
            atacandoDementor();
            ataqueRecibido();
            
        } 
    }
}

main();

function atacandoDementor() {

    
    if (hechizoIngresado == HECHIZO_NECESITADO){
        vidaMaxDementor -= ATAQUE_ESTUDIANTE;
        if (vidaMaxDementor <= 0){
        console.log("Lo lograste, derrotaste a Dementor");
        i = TURNOS_TOTALES;
        }
        console.log(`bien Dementor tiene ${vidaMaxDementor}, pero falta para ganarle a dementor!!`);
    } 
}
    
function ataqueRecibido(){

    if (hechizoIngresado != HECHIZO_NECESITADO){
        vidaMaxEstudiante -= ATAQUE_DEMENTOR;  
        console.log(`Te quivocaste solo tienes ${vidaMaxEstudiante} de vida`);
    }
}
