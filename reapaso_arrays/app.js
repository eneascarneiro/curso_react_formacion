//Crear un array de objetos
const autos = [
    {
        modelo: 'Mustang',
        motor: 6.4
    },
    {
        modelo: 'Ferrari',
        motor: 6.1
    },
    {
        modelo: 'Challenger',
        motor: 6.2
    }
];
//Diferencia entre map y for each
/*
Sintaxis y explicación

1) para cada método
El método forEach() ejecuta una función proporcionada una vez para cada elemento 
de una matriz. Después de ejecutar la función para cada elemento de la matriz,
 este método cambia los valores de los elementos de la matriz existentes según 
 el resultado de la función proporcionada. Por lo tanto, forEach() es un método
  mutador. Además, el método forEach no devuelve nada (indefinido).

2) método de mapa
El método map(), similar al método forEach(), ejecuta la función
 proporcionada una vez para cada elemento de una matriz. Pero a 
 diferencia del método forEach(), crea una nueva matriz con los
  resultados de llamar a una función para cada elemento de la matriz.
   Por lo tanto, el método map() se basa en la inmutabilidad.
    Además, map() no ejecuta ni llama a la función para esos elementos 
    de matriz sin valores.
*/
const exampleArray = [1, 2, 3, 4, 5]

console.log(exampleArray.forEach(x => x * x * x));

exampleArray.forEach((x,index) => {
    console.log("X en for each:" + x)
    x = 2 * x
})
exampleArray.forEach((x,index) => {
    console.log("Segunda vuelta X en for each:" + x)
})
//Output: (undefined)
console.log("A")
console.log(exampleArray.map(x => x * x * x));
console.log("B")
console.log(exampleArray.map(x => x * 2 
));
console.log("C")
console.log(exampleArray.map(x => x * x * x));
console.log("D")
//Output: [1 , 8, 27, 64, 125 ]
//Recorrer al array_json con for each
autos.forEach((auto,index) =>{
    console.log("FOR Each: Mi coche tiene el motor de , " + auto.motor + " caballos, y el modelo es:" + auto.modelo)
})
//Hacer una añadir un coche nuevo del array

autos.splice(0, 0, {motor: "3",modelo: '2 CV' })
autos.forEach((auto,index) =>{
    console.log("FOR Each: Mi coche tiene el motor de , " + auto.motor + " caballos, y el modelo es:" + auto.modelo)
})

//Hago la copia
nuevo_autos = autos.slice(0,2)
//Añado a la copia
nuevo_autos.splice(0, 0, {motor: "300",modelo: 'Es un tren' })
autos.forEach((auto,index) =>{
    console.log("FOR Each:autos tiene el motor de , " + auto.motor + " caballos, y el modelo es:" + auto.modelo)
})

nuevo_autos.forEach((auto,index) =>{
    console.log("FOR Each:nuevo_autos tiene el motor de , " + auto.motor + " caballos, y el modelo es:" + auto.modelo)
})
