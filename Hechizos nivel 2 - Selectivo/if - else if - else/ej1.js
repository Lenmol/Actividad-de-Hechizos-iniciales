const leer = require("prompt-sync")();

/**
 * Ej 1 
 * Compra de Varitas Mágicas:
 * Solicita al cliente su edad y determina si es lo suficientemente mayor como para comprar una varita mágica.
 * La edad minima para comprar una varita es a partir de los 11 años
 * 
 * Por ejemplo si el cliente tiene 14 años si puede comprar, en otro caso si tuviera 9 entonces no
 */
const edadPermitida= 11;



function edadParaComprarVarita() {
    let edadUser = 0;

    console.log("¿Cual es su edad?");
    edadUser = Number(leer());

    if (edadUser >= edadPermitida){
        return console.log("Usted puede comprar una varita, elija la que le guste");
    } else{
        return console.log("Usted no puede adquirir una varita, hasta los 11 años")
    }
}


edadParaComprarVarita();