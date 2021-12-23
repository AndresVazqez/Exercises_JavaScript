// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

// fetch('https://api.agify.io?name=andres')
//     .then((res) => res.json())
//     .then(res => {
//         console.log(res);
//     })



// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.

// const baseUrl = 'https://api.nationalize.io?name=';

// input$$ = document.querySelector('input')

// const consult = () => {
//     fetch(baseUrl + input$$.value)
//     .then(res => res.json())
//     .then(res => {
//         console.log(res)  

//     })

// }
// btn$$ = document.querySelector('button').addEventListener('click', consult);

// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser
// de MZ.

const baseUrl = 'https://api.nationalize.io?name=';

input$$ = document.querySelector('input');


const consult = () => {
    fetch(baseUrl + input$$.value)
    .then(res => res.json())
    .then((res) => {
        const name = res.name;    
        console.log(res);   
        
        for ( let i = 0; i < res.country.length; i++) {
            let country = res.country[i];
            const div$$ = document.createElement('div');
            const p$$ = document.createElement('p'); 
            const pBtn$$ = document.createElement('button');
            const percentage = (country.probability * 100).toFixed(2);
            p$$.textContent = `El usuario ${name} tiene ${percentage}% de ser ${country.country_id}`;
            pBtn$$.textContent = 'X';                        
            div$$.appendChild(p$$);
            div$$.appendChild(pBtn$$);
            document.body.appendChild(div$$);            
            pBtn$$.addEventListener('click', ( ) => { div$$.remove()});          

        }       

    })

}

btn$$ = document.querySelector('button').addEventListener('click', consult);



// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
// de los p que hayas insertado y que si el usuario hace click en este botón
// eliminemos el parrafo asociado.

/*Hecho arriba en 2.3*/