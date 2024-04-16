const leer = require("prompt-sync")();

    

/**
 * Ej 1 
 * Cálculo de Pociones
 * Solicita la cantidad de escarabajos de ojo de tigre y el número de raíces de mandrágora necesarios para hacer una poción, y luego calcula la cantidad total de ingredientes necesarios
 * 
 * Por ejemplo si es necesario 8 raíces de mandrágora y 5 escarabajos de ojo de tigre para hacer la poción entonces el total de ingredientes es 13
 */ 


const ESCARABAJOS_OJOS_TIGRE = 8;
const RAICES_MADRAGORA= 5;
const SUMA = 8 + 5;

function calculoPosion() {
    console.log("Se necesita 8 raíces de mandrágora y 5 escarabajos de ojo de tigre para hacer la poción")

    let escarabajosOjosTigreIngresdos= 0;
    let raícesMadrágoraIngresados = 0;

    console.log("Ingresa cantidad de escarabajos de ojo de tigre que posee");
    escarabajosOjosTigreIngresdos = Number(leer());
    console.log("ingrese cantidad de raíces de mandrágora que posee")
    raícesMadrágoraIngresados = Number(leer())

    sumaDeIngredientes = escarabajosOjosTigreIngresdos + raícesMadrágoraIngresados;

    console.log(sumaDeIngredientes)
    if (sumaDeIngredientes >= SUMA){
        return console.log("Genial, la cantidad necesaria de ingredientes era", SUMA);
    } else{
        return console.log("La cantidad de ingredientes es insuficiente");
    }

}


calculoPosion();