const leer = require("prompt-sync")();

/**
 * Ej 5
 * Permiso para Visitar Hogsmeade:
 * Pide al estudiante su edad y si tiene permiso de sus padres, y verifica si puede visitar el pueblo de Hogsmeade.
 * Solo a partir de los 13 años, y con permiso de los padres, o 17 años tendra permitido realizar la actividad
 * 
 * Por ejemplo si tiene 12 años y con permiso de los padres no le sera permitido, si tiene 14 y no cuenta con permiso de los padres no le sera permitido, en otro caso si tiene 18 puede realizar la actividad
 */

const EDAD_PERMITIDA = 13;
const MAYOR_EDAD= 17;

function verificacionVisitaHogsmeade(){
    let edadUser = 0;
    let permisoDeResponsable = 0;

    console.log("Digame su edad");
    edadUser = Number(leer());
    if (edadUser >= MAYOR_EDAD){
        console.log("Usted puede visitar el pueblo Hogsmeade");
    } else {
        console.log("Tiene permiso de sus padres? SI[1] NO[2]");
        permisoDeResponsable = Number(leer());
        
            if ((edadUser >= EDAD_PERMITIDA) && (permisoDeResponsable == 1)){
                console.log("Usted puede visitar el pueblo Hogsmeade");
            } else {
                console.log(`No puedes entrar al pueblo porque la edad permitida es de ${EDAD_PERMITIDA} con el permiso de los padres`);
            }
    }


    
}

verificacionVisitaHogsmeade();