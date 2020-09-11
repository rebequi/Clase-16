// Crear una función esPositivoONegativo que acepte como argumento 
// un numero y devuelva el string positivo si el numero es positivo, 
// o el string negativo si el numero es negativo

// console.log(esPositivoONegativo(3))  // 'positivo'
// console.log(esPositivoONegativo(-5)) // 'negativo'

// const esPositivoONegativo = (numero) => {

//     if (numero >= 0) {
//         return 'positivo'
//     }
//     else if  (numero == 0) {
//         return 'cero'
//      }

//     else {
//         return 'negativo'
//     }
// }



// console.log(esPositivoONegativo(3))  // 'positivo'
// console.log(esPositivoONegativo(-5)) // 'negativo'
// console.log (esPositivoONegativo (0))

// --------------------------------
// Crear una función avanzarSemaforo que acepte como argumento un string colorActual
//  y devuelva un string con el siguiente color del semáforo, 
//  siguiendo el orden: verde -> amarillo -> rojo -> verde

// console.log(avanzarSemaforo('verde'))     // 'amarillo'
// console.log(avanzarSemaforo('amarillo'))  // 'rojo'
// console.log(avanzarSemaforo('rojo'))      // 'verde'


// const avanzarSemaforo = (colorActual) => {

// if (colorActual == 'verde') {
//     return 'amarillo'
// }
//  if (colorActual == "amarillo") {
//      return 'rojo'
//  }

//  if (colorActual == "rojo") {
//      return 'verde'
//  }

// }

// console.log(avanzarSemaforo('verde'))     // 'amarillo'
//  console.log(avanzarSemaforo('amarillo'))  // 'rojo'
//  console.log(avanzarSemaforo('rojo'))      // 'verde'



//  Crear una función esVocal que tome como argumento un string letra y
//   devuelva true si letra es una vocal o false si no lo es.


// const esVocal = (letra) => {
//     if (letra =='a' ) {
//         return true
//     }
//     if else (letra == 'n'){
//         return false

//     else {
//         return true
//     }
//     }
// }


// console.log(esVocal('a')) // true
// console.log(esVocal('n')) // false
// console.log(esVocal('e')) // true

// esConsonante(letra)
// Crear una función esConsonante que tome como argumento un string letra 
// y devuelva true si letra es una consonante o false si no lo es

// const esConsonante = (letra) => {
     
// }

// console.log(esVocal('a')) // false
// console.log(esVocal('n')) // true
// console.log(esVocal('e')) // false


// ----------------                                       ----------------


// ----------------                       REPASO          ----------------

// ----------------                                       ----------------

// Crear una función esPositivoONegativo que acepte 
// como argumento un numero y devuelva el string positivo 
// si el numero es positivo, o el string negativo si el numero es negativo

// console.log(esPositivoONegativo(3))  // 'positivo'
// console.log(esPositivoONegativo(-5)) // 'negativo'

// const esPositivoONegativo = (number) => {
//     if (number >=0) {
//         return 'positivo'
//     }

//     else {
//         return 'negativo'
//         }
        
// }

// console.log(esPositivoONegativo(3))  // 'positivo'
// console.log(esPositivoONegativo(-5)) // 'negativo'




// ----------------                                       ----------------


// ----------------                       perfect        ----------------

// ----------------                                       ----------------



// Crear una función avanzarSemaforo que acepte como argumento un string 
// colorActual y devuelva un string con el siguiente color del semáforo, 
// siguiendo el orden: verde -> amarillo -> rojo -> verde

// console.log(avanzarSemaforo('verde'))     // 'amarillo'
// console.log(avanzarSemaforo('amarillo'))  // 'rojo'
// console.log(avanzarSemaforo('rojo'))      // 'verde'

// const avanzarSemaforo = (colorActual) => {
//     if (colorActual == 'verde') {
//         return 'amarillo'
//     }
//     else if (colorActual == 'amarillo') {
//         return 'rojo'
//     }

//     else {
//         return 'verde'
//     }

// }


// console.log(avanzarSemaforo('verde'))     // 'amarillo'
// console.log(avanzarSemaforo('amarillo'))  // 'rojo'
// console.log(avanzarSemaforo('rojo'))      // 'verde'

// ----------------                                       ----------------


// ----------------                       perfect        ----------------

// ----------------                                       ----------------


// puedeVerPelicula(edad, tieneAutorizacion)
// Crear una función puedeVerPelicula que tome como argumentos un número edad 
// y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada
//  para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, 
//  o tiene autorización de sus padres.

// console.log(puedeVerPelicula(12, false)) // false
// console.log(puedeVerPelicula(12, true))  // true
// console.log(puedeVerPelicula(16, false)) // true
// console.log(puedeVerPelicula(18, true))  // true


// const puedeVerPelicula = (edad) => {
//     if (edad >=15 )
//     return true

//     else (edad <=15)
//     return false
// }


// console.log(puedeVerPelicula(12, false)) // false
// console.log(puedeVerPelicula(12, true))  // true
// console.log(puedeVerPelicula(16, false)) // true
// console.log(puedeVerPelicula(18, true))  // true


// ----------------                                       ----------------


// ----------------                       perfect        ----------------

// ----------------                                       ----------------


// esVocal(letra)
// Crear una función esVocal que tome como argumento un string letra y 
// devuelva true si letra es una vocal o false si no lo es.

// console.log(esVocal('a')) // true
// console.log(esVocal('n')) // false
// console.log(esVocal('e')) // true


// const esVocal = (letra) => {
//     if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u')
//     return true

//     else 
//     return false 
// }

// console.log(esVocal('a')) // true
// console.log(esVocal('n')) // false
// console.log(esVocal('e')) // true


// esConsonante(letra)
// Crear una función esConsonante que tome como argumento un string letra 
// y devuelva true si letra es una consonante o false si no lo es



// const esConsonante = (letra) => {
//     if (letra != 'a' && letra != 'e' && letra != 'i' && letra != 'o' && letra != 'u')
//     return true
    
//     else 
//     return false
// }

// console.log(esConsonante('a')) // false
// console.log(esConsonante('n')) // true
// console.log(esConsonante('e')) // false


// puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)
// Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos,
//  pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona 
//  está habilitada para renovar su carnet de conducir o false si no. Una persona 
//  puede renovar su carnet si pasó los tests, no tiene multas impagas
//   y pagó todos los impuestos


// const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) =>{
//     if (pasoTests == true && tieneMultasImpagas == false && pagoImpuestos == true)
//     return true

//     else 
//     return false
// }



// console.log(puedeRenovarCarnet(true, true, true))    // false
// console.log(puedeRenovarCarnet(true, true, false))   // false
// console.log(puedeRenovarCarnet(true, false, true))   // true
// console.log(puedeRenovarCarnet(true, false, false))  // false
// console.log(puedeRenovarCarnet(false, true, true))   // false
// console.log(puedeRenovarCarnet(false, true, false))  // false
// console.log(puedeRenovarCarnet(false, false, true))  // false
// console.log(puedeRenovarCarnet(false, false, false)) // false









