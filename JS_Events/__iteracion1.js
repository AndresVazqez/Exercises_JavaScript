//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

const  addBtn$$ = document.createElement('button');
addBtn$$.id = "btnToClick";
addBtn$$.addEventListener("click", btn);
addBtn$$.innerHTML= "pulse aquì";

function btn (event) {
  console.log('Hola', event);
}

document.body.appendChild(addBtn$$);

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const input$$ = document.querySelector('.focus');

function insertFocus (event) {
    console.log(event.target.value);
}

input$$.addEventListener('focus', insertFocus);

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const input1$$ = document.querySelector('.value');

function ejecut (event) {
    console.log(event.target.value);
}

input1$$.addEventListener('input', ejecut);