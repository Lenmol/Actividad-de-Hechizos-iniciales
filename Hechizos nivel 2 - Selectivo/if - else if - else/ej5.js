const leer = require("prompt-sync")();

/**
 * Ej 5
 * Permiso para Visitar Hogsmeade:
 * Pide al estudiante su edad y si tiene permiso de sus padres, y verifica si puede visitar el pueblo de Hogsmeade.
 * Solo a partir de los 13 años, y con permiso de los padres, o 17 años tendra permitido realizar la actividad
 * 
 * Por ejemplo si tiene 12 años y con permiso de los padres no le sera permitido, si tiene 14 y no cuenta con permiso de los padres no le sera permitido, en otro caso si tiene 18 puede realizar la actividad
 */

let edadUser = 0;
let permisoDeResponsable = false;

console.log("Digame su edad");
edadUser = Number(leer());
console.log("Tiene permiso de sus padres?");
permisoDeResponsable = Boolean(leer)

function verificacionVisitaHogsmeade(){
    
}


main();