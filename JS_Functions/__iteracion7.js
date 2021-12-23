// Crea una función que reciba por parámetro un array y el valor que desea comprobar que 
// existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos 
// devuelve un true y la posición de dicho elemento y por la contra un false. 
// Puedes usar este array para probar tu función:

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

 const finderName = (param1, param2) => {
     for (let i = 0; i < param1.length; i++){         
         if (param1[i] === param2){
             return console.log(`${true} y ${param2} está en la posición ${i}`);             
         }
     }
     return console.log(`${false} ${param2} no está dentro del array`); 
  }

  finderName(nameFinder, "Andres");
