//Calcular un promedio es una tarea extremadamente común.
// Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

let sum = 0;
let prom;
function average(param) {
    for (let i = 0; i < numbers.length; i++){
        sum+= numbers[i];        
    }
    prom = sum / numbers.length;
    return console.log(`El promedio de los numeros de el array "numbers" es igual= ${prom.toFixed(2)}`);  
};

average(numbers);