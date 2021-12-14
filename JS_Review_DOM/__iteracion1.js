//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const newUl$$ = document.createElement('ul');

for (let i = 0; i < countries.length; i++ ){
    let country = countries[i]
    const newLi$$ = document.createElement('li')
    newLi$$.textContent = country;    
    newUl$$.appendChild(newLi$$);   

}

document.body.appendChild(newUl$$);


//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const remov$$ = document.querySelector(".fn-remove-me");

remov$$.remove();



//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const insertDiv$$ = document.querySelector('[data-function="printHere"]')
const newUl1$$ = document.createElement('ul');

for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    const newLi1$$ = document.createElement ('li');
    newLi1$$.textContent = car;    
    newUl1$$.appendChild(newLi1$$);         
}
insertDiv$$.appendChild(newUl1$$);


//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
//h4 para el titulo y otro elemento img para la imagen.

const countries1 = 
    [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
    ];

    for (const country1 of countries1) {
        const div$$ = document.createElement('div');
        div$$.innerHTML = `<h4>${country1.title}</h4><img src="${country1.imgUrl}" alt="">`;
        document.body.appendChild(div$$);
        const btn1$$ = document.createElement('button');
        btn1$$.innerHTML = "Elimina esta imagen";
        document.body.appendChild(btn1$$);
        
        btn1$$.addEventListener('click', () => {
            div$$.remove();
            btn1$$.remove();
        });


    }

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//elemento de la lista.

const btn$$ = document.createElement('button');
btn$$.innerHTML = "Elimina el ultimo elemento";
document.body.appendChild(btn$$);

btn$$.addEventListener('click', () => {
    const allDiv$$ = document.querySelectorAll('div');
    allDiv$$[allDiv$$.length - 1].remove();
});

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//elementos de las listas que elimine ese mismo elemento del html.

/*Hecho*/