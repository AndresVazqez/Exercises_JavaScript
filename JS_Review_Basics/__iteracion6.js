// Crea una función llamada swap() que reciba un array y
// dos parametros que sean indices del array. La función deberá
// intercambiar la posición de los valores de los indices 
// que hayamos enviado como parametro. Retorna el array resultante.

['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

const swap = (array, param1, param2) => {
    const change = array[param1];
    array[param1] = array[param2];
    array[param2] = change;
    console.log(array);
    return array;   
}

swap (['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 1, 3);
