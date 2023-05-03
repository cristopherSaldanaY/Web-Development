/* Clase 10 - Funciones */

/* Funcion normal */

const operation = document.getElementById("operations"); // Obtener referencia del select
const selectedOperation = document.getElementById("selectedOperation"); // Obtener referencia donde pondremos el operador
const btnCalculate = document.getElementById("btn-calculate");
const finalResult = document.getElementById("finalResult");

const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const operationSelected = document.getElementById("operations");


function calculator(operationSelected, number1, number2) {
  console.log(typeof number1);
  if (number1 == '' && number2 == '' ){return}
  const num1 = parseInt(number1);
  const num2 = parseInt(number2);
  

  switch (operationSelected) {
    case "+":
      const sum = num1 + num2;
      finalResult.innerText = `La suma entre ${num1} y ${num2} es: ${sum}`;
      break;
    case "-":
      const rest = num1 - num2;
      finalResult.innerText = `La resta entre ${num1} y ${num2} es: ${rest}`;
      break;
    case "*":
      const multiplication = num1 * num2;
      finalResult.innerText = `La multiplicación entre ${num1} y ${num2} es: ${multiplication}`;
      break;
    case "/":
      const division = num1 / num2;
      finalResult.innerText = `La división entre ${num1} y ${num2} es: ${division}`;
      break;
    default:
      console.log('ninguna opcion seleccionada')
      break;
  }
}



operation.addEventListener("change", () => {

  firstNumber.value = '';
  secondNumber.value = '';
  finalResult.innerText = '';

  const selectedIndex = operation.selectedIndex; // Obtener posición
  const selectedOption = operation.options[selectedIndex]; // Buscar el option segun el indice
  const selectedValue = selectedOption.value; // Obtener el value del input
  selectedOperation.innerText = selectedValue;
});

btnCalculate.addEventListener("click", () => {
  const number1 = firstNumber.value;
  const number2 = secondNumber.value;
  const operation = operationSelected.value;

  calculator(operation, number1, number2);
});


/* Función anonima */

class Person {

  constructor(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job
  }
}

const formRegister = document.getElementById('miForm');
const formResult = document.getElementById('form-result');

/* funcion anonima al no tener nombre, solo usar function */
const createObject = function(name, age, job){

  const developer = new Person(name, age, job);
  console.log(developer);
  formResult.textContent = JSON.stringify(developer, null, 2);
}

formRegister.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name').value;
  const ageInput = document.getElementById('age').value;
  const jobInput = document.getElementById('job').value;

  createObject(nameInput, ageInput, jobInput);
})

/* Arrow Function */

/* formulario */
const gameName = document.getElementById('nameGame');
const gameDeveloper = document.getElementById('developer');
const gamePlaftorm = document.getElementById('platform');
const gameArchive = document.getElementById('imagenGame');
const btnGame = document.getElementById('btnGame');


btnGame.addEventListener('click', () => {
  const name = gameName.value;
  const developer = gameDeveloper.value;
  const platform = gamePlaftorm.value;
 
  loadImage(name, developer, platform);

  gameName.value = '';
  gameDeveloper.value = '';
  gamePlaftorm.value = ''

})


/* funcion flecha, asignada a una constante y el uso de la flecha */
const loadImage = (name, developer, platform) => {

  const cardName = document.getElementById('card-name');
  const cardDeveloper = document.getElementById('card-developer');
  const cardPlatform = document.getElementById('card-platform');


  cardName.innerText = name;
  cardDeveloper.innerText = developer;
  cardPlatform.innerText = platform;
}

/* arrow function una linea */
const greet = name => (`Hola ${name}`);
const response = greet('Cristopher')
console.log(response)


/* ////////////////////////////////////////////// */

/* Metodos del Array */

const gameList = ['Elden Ring', 'The Last of US Part 1','The Last of US Part 2', 'God of War Ragnarok', 'Resident Evil 7 Biohazard'];

const gameListDetails = [
  {name: 'Elden Ring', developer: 'FromSoftware', gender: 'Rol de acción'},
  {name: 'The Last of US Part 1', developer: 'Naughty Dog', gender: 'Terror Acción-aventura'},
  {name: 'The Last of US Part 2', developer: 'Naughty Dog', gender: 'Terror Acción-aventura'},
  {name: 'God of War Ragnarok', developer: 'Santa Monica Studio', gender: 'Acción-aventura hack and slash'},
  {name: 'Resident Evil 7 Biohazard', developer: 'Capcom', gender: 'Horror de supervivencia'},
  {name: 'Silent Hill HomeComing', developer: 'Konami', gender: 'Horror de supervivencia'},
]

const amountMoney = [100, 500, 1000, 1500, 15000, 450000];

const family = [
  {name: 'Cristopher', age: 33},
  {name: 'Rita', age: 31},
  {name: 'Emilia', age: 11},
  {name: 'Mili', age: 6},
  {name: 'Bubi', age: 11},
]


const developer = {
  name: 'Cristopher',
  age: 33,
  title: 'Software Developer',
}

/* Map: Este método recorre el array permitiendo modificar los elementos en cada índice, luego nos devuelve un nuevo array con los elementos modificados. */

const useMap = gameList.map((name) => {
  return `El nombre del juego es: ${name}`;
});
console.log(useMap);

const useMapTwo = gameListDetails.map((game) => {
  return game.developer;
})
console.log(useMapTwo);

/* Filter: Este método permite armar un nuevo array solo con los elementos que devuelvan true a la condición propuesta mediante un callback. */

const useFilter = gameListDetails.filter( game => game.developer === 'Naughty Dog');
console.log(useFilter);


/* Reduce: Este método permite efectuar una reducción de un arreglo. Una reducción es una operación tal que nos devuelve un único valor luego
   de ser aplicada a cada elemento del arreglo. Para esto hace uso de un acumulador, que es el primer parámetro del callback. 
*/

const useReduce = amountMoney.reduce((accumulator, money) =>  accumulator + money );
console.log(useReduce);


/* Find: Nos permite obtener la primera coincidencia del array que cumple con la condición callback. */

const useFind = gameListDetails.find( game => game.developer === 'Naughty Dog');
console.log(useFind)


/* FindIndex: Nos permite obtener el índice de la primera coincidencia del array que cumple con la condición del callback. */

const useFindIndex = gameListDetails.findIndex( game => game.developer === 'Naughty Dog');
console.log(useFindIndex)


/* Every: Permite saber si todos los elementos del array cumplen la condición del callback */

const useEvery = family.every(element => element.age < 40);
console.log(useEvery);


/* Some: Permite saber si al menos uno de los elementos del array cumple la condición del callback. */

const useSome = family.some(element => element.age < 14);
console.log(useSome);


/* Object.keys: Devuelve un array con todos los key de cada propiedad del object */

const useKeys = Object.keys(developer);
console.log(useKeys);7

/* Object.values: Devuelve un array con todos los value de cada propiedad del object. */

const useValues = Object.values(developer);
console.log(useValues);


/* Object.entries: Devuelve un array que en cada elemento contiene un array con la pareja clave-valor
   (o key-value pair) de cada propiedad del objeto 
*/

const useEntries = Object.entries(developer);
console.log(useEntries);