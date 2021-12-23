//2.1 Inserta dinamicamente en un html un div vacio con javascript.

let insertD$$ = document.createElement('div');
document.body.appendChild(insertD$$); 

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let insertD2$$ = document.createElement('div'); 
let insertP$$ = document.createElement('p');

document.body.appendChild(insertD2$$);
insertD2$$.appendChild(insertP$$);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p 
//utilizando un loop con javascript.

let insertD3$$ = document.createElement('div');


for (let i = 0; i < 6; i++) {
    let insertP2$$ = document.createElement(`p`);
    insertD3$$.appendChild(insertP2$$);    
}

document.body.appendChild(insertD3$$);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let insertP3$$ = document.createElement('p');

insertP3$$.textContent = 'Soy dinámico!'

document.body.appendChild(insertP3$$);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let insertT$$ = document.querySelector('.fn-insert-here');
let text$$ = document.createElement('p');
text$$.textContent= 'Wubba Lubba dub dub';
insertT$$.appendChild(text$$);

document.body.appendChild(insertT$$);

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let insertUl$$ = document.createElement('ul');

for (i = 0; i < apps.length; i++){
    let li$$ = document.createElement('li')
    li$$.textContent = apps[i];
    insertUl$$.appendChild(li$$);
}

document.body.appendChild(insertUl$$);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let remov$$ = document.querySelectorAll('.fn-remove-me');
for (i = 0; i < remov$$.length ; i++) {
    remov$$[i].remove();
}


//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//	Recuerda que no solo puedes insertar elementos con .appendChild.

let div$$ = document.querySelectorAll('div')[1];
let insertT2$$ = document.createElement('p');

insertT2$$.innerHTML = 'Voy en Medio!';

document.body.insertBefore(insertT2$$, div$$);


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div 
// con la clase .fn-insert-here

let divClass$$ = document.querySelectorAll('.fn-insert-here');

for (let i = 0; i < divClass$$.length; i++) {
    let divx = divClass$$[i];
    divx.innerHTML = '<p>Voy dentro!</p>'         
}

