//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

let show$$ = document.querySelector('.showme');
console.log(show$$);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

let showId$$ = document.querySelector('#pillado');
console.log(showId$$);

//1.3 Usa querySelector para mostrar por consola todos los p

let showP$$ = document.querySelectorAll(`p`);
console.log(showP$$);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

let showC$$ = document.querySelectorAll('.pokemon');
console.log(showC$$);


//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".

let showD$$ = document.querySelectorAll ('[data-function="testMe"]');
console.log(showD$$);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".

console.log(showD$$[2]);