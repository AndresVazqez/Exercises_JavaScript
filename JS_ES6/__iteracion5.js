//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean mayor que 18


const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const ages18 = ages.filter(age => age > 18);

console.log(ages18);



//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean par.


const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesPar = ages1.filter(age => age % 2 === 0);
console.log(agesPar);

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersLe = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log(streamersLe);

//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
//usar la funcion .includes() para la comprobación.
const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersU = streamers1.filter(streamer => streamer.name.includes('u'));

console.log(streamersU);

//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
//el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
//.includes() para la comprobación.
//Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
//.age sea mayor que 35.

const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersU2 = streamers2.filter(streamer => {streamer.gameMorePlayed.includes('Legends');
	if ( streamer.age > 35) {
		return (streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase());		
	}
})
 console.log(streamersU2);

//5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
//los streamers que incluyan la palabra introducida en el input. De esta forma, si 
//introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
//introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const input$$ = document.querySelector('[data-function="toFilterStreamers"]');

const runSearch = () => {
	const streamersIn = streamers3.filter( streamer =>
		streamer.name.toLowerCase().includes(input$$.value.toLowerCase()) );		
		console.log(streamersIn);
}

	
input$$.addEventListener('input', runSearch);

// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.

const streamers4 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const input1$$ = document.querySelector('[data-function="toFilterStreamers"]');

const search = () => {
		const streamerBt = streamers4.filter( streamer => 
		streamer.name.toLocaleLowerCase().includes(input1$$.value.toLowerCase()));
		console.log(streamerBt);
}
const btn$$ = document.querySelector('[data-function="toShowFilterStreamers"]'); 
btn$$.addEventListener("click", search);