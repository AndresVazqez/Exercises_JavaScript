// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y
//  un texto y devuelve la posición del array cuando el valor del array sea igual al valor 
//  del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

const findArrayIndex = (param1, param2) => {
    for (let i = 0; i < param1.length; i++){
        const param = param1[i];
        if (param === param2){
            return i;
        }
    }

}
const test = findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], "Caracol");
console.log(test)