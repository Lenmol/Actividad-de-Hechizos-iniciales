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
const MAX_INTEN_SANGUIJUELAS = 5

const NOMBRE_INGREDIENTE_2 = "Cuerno de Bicornio"
const CUERNO_BICORNIO = 5;
const MAX_INTEN_CUERNO = 3;

const NOMBRE_INGREDIENTE_3 = "Pelo de Gato Negro"
const PELO_GATON_NEGRO = 1;
const MAX_INTEN_PELO_GATO = 2;

const NOMBRE_INGREDIENTE_4 = "Colas de Serpiente"
const COLAS_SERPIENTE = 2;
const MAX_INTEN_COLAS = 1;

const INTENTOS_MAXIMOS = 3;


function main() {
   let sanguijuelasIngresados = 0;
   let cuernoBicornioIngresado = 0;
   let peloGatoNegroIngresado = 0;
   let colasSerpienteIngresado = 0;

   let verica = false;
   
   

   console.log("Hola estudiantes en el dia de hoy prepararemos la posion Multijugos Para preparar esta poción,deben seguir la receta exacta y medir cuidadosamente las cantidades de cada ingrediente, tendran una limite de intentos por ingrediente")

      
   for(i = 2 ; i < INTENTOS_MAXIMOS; i++){

      if (i < INTENTOS_MAXIMOS){

       verificaCantNecesitadaIngredien(NOMBRE_INGREDIENTE_1, sanguijuelasIngresados, SANGUIJUELAS_REVENTADAS, MAX_INTEN_SANGUIJUELAS);

         if (i != MAX_INTEN_SANGUIJUELAS){
            console.log("Agitar la mezcla lentamente durante 30 segundos en dirección horaria.");
            i = verificaCantNecesitadaIngredien(NOMBRE_INGREDIENTE_2, cuernoBicornioIngresado, CUERNO_BICORNIO, MAX_INTEN_CUERNO);

            if (i != MAX_INTEN_CUERNO){
               console.log("Y remueve con la cuchara de palo.");
               i = verificaCantNecesitadaIngredien(NOMBRE_INGREDIENTE_3, peloGatoNegroIngresado, PELO_GATON_NEGRO, MAX_INTEN_PELO_GATO);

               if(i != MAX_INTEN_PELO_GATO){
                  console.log("Y mezcla suavemente en sentido antihorario durante 1 minuto.");
                  i = verificaCantNecesitadaIngredien(NOMBRE_INGREDIENTE_4, colasSerpienteIngresado, COLAS_SERPIENTE, MAX_INTEN_COLAS);

                  if (i <= MAX_INTEN_COLAS){
                     console.log("Revuelve vigorosamente durante 2 minutos.");
                     console.log("Y deja que la poción repose durante 5 minutos antes de su uso");
                     i = INTENTOS_MAXIMOS;
                  }
               }
            }
         }
      
      }
   }
}

/**
 * Veridico la cnatidad que ingresa con una cantidad de intentos
 * @param {string} nombreIngrediente para la posion
 * @param {number} cantidadIngresado de Ingredientes
 * @param {Number} cantidadNecesitada Para la posion 
 * @returns si es verdadero o falso
 */
function verificaCantNecesitadaIngredien(nombreIngrediente, cantidadIngresado, cantidadNecesitada, intentosUser){


   let resultado = 0;
   for (intentos = 1; intentos <= intentosUser; intentos++){
      console.log(`ingrese ${nombreIngrediente} a la caldera`);
      cantidadIngresado = Number(leer());

      if(cantidadIngresado == cantidadNecesitada){
         console.log("Bien echo, sigue con el siguiente paso");
         resultado = 1;
         intentos = intentosUser; 
      } else if (intentos == intentosUser){
         console.log("Lo siento pero no tenes mas intentos permitidos");
         resultado = intentosUser;
      } 
       else if (cantidadIngresado != cantidadNecesitada){
         console.log("Cantida incorrecta, intente otra vez");
       }
   }
   return resultado;
}




main();