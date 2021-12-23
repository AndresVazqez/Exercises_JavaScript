// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
// async-await.

const runTimeOut = async () => {

    const promise = await new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })
    console.log('Time out!');
};

runTimeOut();



// 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;

function getCharacters () {
    fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(characters => console.log(characters));
}

getCharacters();

// Convertida------>

const getCharacters1 = async () => {
    const charactersPeti = await fetch('https://rickandmortyapi.com/api/character')
    const charactersRes = await charactersPeti.json()
    console.log(charactersRes);
}

getCharacters1 ();