/* Variables */

//string
var player = "Cristopher";
console.log(`El jugador es: ${player}`);

let playerTwo = "makonia";
console.log(`Su amigo es la: ${playerTwo}`);

const game = "Call of Duty Warzone";
console.log(`El juego nunca cambiara, es: ${game}`);

//number
let amount = 4;
console.log(`Los jugadores en el squad somos: ${amount}`);

//boolean
let isTheBest = true;
isTheBest ? console.log('Es el mejor juego') : console.log('Es el peor juego');

/* CASE SENSITIVE: diferencia la palabra cuando tiene mayuscula o minuscula */
let noEs = "uno";
let noes = "dos";

/* Estilos de escritura */
let userName = 'camelCase'; /* segunda palabra en mayuscula */
let UserName = 'PascalCase'; /* primera y segunda frase en mayuscula */
let user_name = 'snake_case'; /* separados por guion bajo */



/* object */
let capoeira = {
    name: 'Kuben',
    age: 33,
    group: 'Capoeira Sul da Bahia',
    level: 'Instructor',
    country: {
        name: 'Chile',
        city: 'San Bernardo'
    },
}

console.log(capoeira);


/* desestructurar un objeto */ /* y objetos dentro de otros */
const {name, age, group, country:  {name: nameCity, city} } = capoeira;


console.log(`El grupo es: ${group}`);
console.log('la país es: ' + nameCity );


/* Arrays - se maneja con un indice que parte desde el 0*/
let listPlayers = ['Cuchufly', 'Makonia', 'Nico', 'Brot', 'Oscar'];
let levelPlayers = [100, 100, 100, 50, 40];
listPlayers[5] = 'Mercenario';
levelPlayers[5] = 30; /* agrega un elemento en la 5 posicion contando desde el 0 */

let onetwo = [[1,2,3],[1,2,3]];



/* Metodos de un Array */

//concat
//copyWithin
//entries
//every
//fill
//filter
//find
//findIndex
//flat
//flatMap
//forEach
//includes
//indexOf
//join
//keys
//lastIndexOf
//length
//map
//pop
//push
//reduce
//reduceRight
//reverse
//shift
//slice
//some
//sort
//splice
//toLocaleString
//toString
//unshift
//values




/* listPlayers.push('Marcianeke'); */ /* agrega un elemento al final */
/* listPlayers.pop(); */ /* elimina el ultimo elemento */


console.log(listPlayers);
console.log(levelPlayers);