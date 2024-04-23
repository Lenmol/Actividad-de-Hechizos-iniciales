const leer = require("prompt-sync")();

/**
 * Ej 3
 * La preparación de pociones es una habilidad esencial enseñada en la clase de Pociones de Hogwarts. Cada poción requiere una combinación precisa de ingredientes y una ejecución exacta de los pasos para ser exitosa. En este ejercicio, nos sumergiremos en la atmósfera de la clase de Pociones, donde los estudiantes aprenderán a preparar una de las pociones más icónicas: la poción Multijugos. Para preparar esta poción, los estudiantes deben seguir la receta exacta y medir cuidadosamente las cantidades de cada ingrediente. Cada ingrediente tiene un límite de intentos definido, y solo si se logra ingresar la cantidad correcta del ingrediente previo, el estudiante puede avanzar al siguiente. Si el estudiante no logra ingresar la cantidad correcta de un ingrediente dentro de los intentos permitidos, la preparación de la poción fallará y el proceso se verá interrumpido. Solo aquellos estudiantes que sean precisos y persistentes podrán dominar la preparación de la poción Multijugos y disfrutar de sus efectos transformadores.
 * 
 * Receta de la Poción Multijugos:
 * Ingredientes:
 * 3 sanguijuelas reventadas
 * 5 unidades de pulverizado de cuerno de Bicornio
 * 1 pelo de gato negro
 * 2 colas de serpiente
 * 
 * Instrucciones:
    Agrega las 3 sanguijuelas reventadas a la caldera.
    Agitar la mezcla lentamente durante 30 segundos en dirección horaria.
    Incorpora las 5 unidades de pulverizado de cuerno de Bicornio y remueve con la cuchara de palo.
    Añade el pelo de gato negro y mezcla suavemente en sentido antihorario durante 1 minuto.
    Por último, agrega las 2 colas de serpiente y revuelve vigorosamente durante 2 minutos.
    Deja que la poción repose durante 5 minutos antes de su uso.
 * 
 */

//Ingredientes Necesitados

const NOMBRE_INGREDIENTE_1 = "Sanguijuelas Reventadas"
const SANGUIJUELAS_REVENTADAS = 3;

const NOMBRE_INGREDIENTE_2 = "Cuerno de Bicornio"
const CUERNO_BICORNIO = 5;

const NOMBRE_INGREDIENTE_3 = "Pelo de Gato Negro"
const PELO_GATON_NEGRO = 1;

const NOMBRE_INGREDIENTE_4 = "Colas de Serpiente"
const COLAS_SERPIENTE = 2;

const INTENTOS_PERMITIDOS = 3;


function main() {
   let sanguijuelasIngresados = 0;
   let cuernoBicornioIngresado = 0;
   let peloGatoNegroIngresado = 0;
   let colasSerpienteIngresado = 0;
   

   console.log("Hola estudiantes en el dia de hoy prepararemos la posion Multijugos Para preparar esta poción,deben seguir la receta exacta y medir cuidadosamente las cantidades de cada ingrediente, tendran una limite de intentos por ingrediente")

      
       
   verificaCantNecesitadaIngredien(NOMBRE_INGREDIENTE_1, sanguijuelasIngresados, SANGUIJUELAS_REVENTADAS);

   console.log("Agitar la mezcla lentamente durante 30 segundos en dirección horaria.");

   verificaCantNecesitadaIngredien(NOMBRE_INGREDIENTE_2, cuernoBicornioIngresado, CUERNO_BICORNIO);
         
   console.log("Y remueve con la cuchara de palo.");
       
   verificaCantNecesitadaIngredien(NOMBRE_INGREDIENTE_3, peloGatoNegroIngresado, PELO_GATON_NEGRO);
         
   console.log("Y mezcla suavemente en sentido antihorario durante 1 minuto.");

   verificaCantNecesitadaIngredien(NOMBRE_INGREDIENTE_4, colasSerpienteIngresado, COLAS_SERPIENTE);
   console.log(" revuelve vigorosamente durante 2 minutos.");
      
   console.log("Deja que la poción repose durante 5 minutos antes de su uso");

   

}

function verificaCantNecesitadaIngredien(nombreIngrediente, cantidadIngresado, cantidadNecesitada){


   for (intentos = 1; intentos <= INTENTOS_PERMITIDOS; intentos++){
      console.log(`ingrese ${nombreIngrediente} a la caldera`);
      cantidadIngresado = Number(leer());

      if (cantidadIngresado != cantidadNecesitada){
         if (intentos == INTENTOS_PERMITIDOS){
            console.log("Lo siento pero no tenes mas intentos permitidos");
            return i = INTENTOS_PERMITIDOS;
         }
         console.log("Cantida incorrecta, intente otra vez");
      } else if(cantidadIngresado == cantidadNecesitada){
         console.log("Bien echo, sigue con el siguiente paso");
         return i = 1;
      }
   
   }
}




main();