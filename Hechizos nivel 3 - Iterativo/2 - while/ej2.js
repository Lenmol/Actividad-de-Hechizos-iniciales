const leer = require("prompt-sync")();

/**
 * Ej 2
 * te enfrentarás a un desafío único y emocionante. Te encuentras en un oscuro y tormentoso bosque, rodeado de la neblina que parece estar cargada de misterio y peligro. En este bosque, los temidos Dementores, criaturas de la oscuridad que se alimentan de la felicidad y los recuerdos alegres, están acechando.

Eres un valiente estudiante de Hogwarts, y tu misión es defender tu propia felicidad y los recuerdos alegres al igual que de una persona querida contra los Dementores. Pero ten cuidado, estos seres malignos no dudarán en atacarte y tratar de absorber tu felicidad y la de tu ser querido.

El desafío comienza ahora. Te encontrarás en un enfrentamiento constante contra los Dementores. Para defenderte, deberás ingresar números aleatorios entre 0 y 3. Si adivinas correctamente el número aleatorio generado por los Dementores, lograrás defenderte y proteger tus recuerdos.

Pero aquí hay un giro: si los Dementores lanzan más de cinco ataques, existe la posibilidad de que aparezca una persona misteriosa para ayudarte a derrotar a los Dementores y restaurar la paz en el bosque.

Recuerda, tanto tú como tu ser querido pueden recibir ataques de los Dementores, pero solo uno a la vez, a menos que ocurra un número especial que permita atacar a los dos al mismo tiempo. Si tu felicidad y recuerdos alegres llegan a cero o la de tu ser querido entonces es el fin para ambos. Mantén tu concentración y tu valentía mientras te enfrentas a este desafío.

¿Estás listo para adentrarte en esta emocionante aventura y demostrar tu valentía contra las fuerzas oscuras? ¡Adelante, el destino del bosque dependen de vos!
 */

const ATAQUE_DEMENTOR = 15;
const ATAQUE_PERSONA_MISTERIOSA = 70;

function main() {

    let felicidad = {
    felicidadUser : 100, 
    felicidadAmigo : 100,
    }
    
    let numIngresado = 0;
    
    let vidaDementores = 200;

    let perdedor = false;
    let turnosTotales = 0;

    
    console.log("ingresar números aleatorios entre 0 y 3. Si adivinas correctamente el número aleatorio generado por los Dementores, lograrás defenderte y proteger tus recuerdos.");

    while (perdedor == false){
        let numAleatorio = Math.floor(Math.random()*4);
        
        turnosTotales ++;
        console.log("Ingresa numero entre 0 y 3")
        numIngresado = Number(leer());

        if(turnosTotales == 5){
            vidaDementores -= ATAQUE_PERSONA_MISTERIOSA;
            console.log(`Vino una persona misteriosa a ayudarte le saco ${ATAQUE_PERSONA_MISTERIOSA} de daño, el Dementor tiene ${vidaDementores}`);
            turnosTotales = 0;
        }
        verificacionIngualdad(numAleatorio, numIngresado, felicidad);
        perdedor = estanTristes(felicidad, vidaDementores);
    
}
}
function verificacionIngualdad(numRandom, numUser, felicidad){
    let ataqueAleatorio = Math.floor((Math.random()*3) + 1);
    if(numRandom == numUser){
            console.log("[LOGRASTE DEFENDERTE]");
        } else if(numRandom != numUser){
            console.log(ataqueAleatorio);
            if(ataqueAleatorio == 3){
                console.log("ATAQUE DOBLE");
                felicidad.felicidadUser -= ATAQUE_DEMENTOR;
                felicidad.felicidadAmigo -= ATAQUE_DEMENTOR;
            }else if(ataqueAleatorio = 1){
                felicidad.felicidadUser -= ATAQUE_DEMENTOR;
            }else{
                felicidad.felicidadAmigo -= ATAQUE_DEMENTOR;
            }
            console.log(`te atacaron tu felicidad es ${felicidad.felicidadUser} y de tu amigo ${felicidad.felicidadAmigo}`);
        }
}


function estanTristes(felicidad, dementores){
    let confirmacion = false;
    
    if (felicidad.felicidadUser <= 0){
        confirmacion = true;
        console.log("[GAME OVER]");
    } else if(felicidad.felicidadAmigo <= 0){
        confirmacion = true;
        console.log("[GAME OVER]");
    }else if(dementores <= 0){
        console.log(`Lo lograste sobrebiviste a los dementores`)
        confirmacion = true;
    }
    return confirmacion;
}



main();