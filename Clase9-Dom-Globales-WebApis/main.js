/* Window function */

//window.open('https://www.youtube.com') /* al cargar abre nueva ventana */
//window.close(); /* al cargar cierra la ventana */
//window.confirm('Bievenido a Call of Duty Warzone');

/* Seleccionando el DOM */
const title = document.getElementById("title");
console.log(title);

/* getByTagName: me trae todos los li, pero puedo especificar que me devuelva uno con los [position] */
const gamesItem = document.getElementsByTagName("li")[5];
console.log(gamesItem);

/* getElementByClassName */
const consoleName = document.getElementsByClassName("className");
console.log(consoleName);

/* querySelector: trae el primer elemento que coincida */
const qSelectorExample = document.querySelector("div");
const qSelectorExample2 = document.querySelector("#resident");
console.log(qSelectorExample);
console.log(qSelectorExample2);

/* querySelectorAll: trae todos los elementos */
const qSelectorAll = document.querySelectorAll("#resident");
console.log(qSelectorAll);

/* Ejercicio agregar juegos */

const itemInput = document.getElementById("item-input");
const addButton = document.getElementById("add-button");
const itemList = document.getElementById("item-list");

const tableGame = document.getElementsByClassName("table-game");

addButton.addEventListener("click", () => {
  const newRow = document.createElement("tr");
  const itemCell = document.createElement("td");
  const newItem = document.createTextNode(itemInput.value);
  console.log(newItem);

  const dateCell = document.createElement("td");
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  const currentDate = new Date().toLocaleDateString("es-ES", options);

  itemCell.appendChild(newItem);
  dateCell.appendChild(document.createTextNode(currentDate));
  newRow.appendChild(itemCell);
  newRow.appendChild(dateCell);
  itemList.appendChild(newRow);
  itemInput.value = '';
  console.log(tableGame);
});

console.log(tableGame);

/* fetch('https://api.giphy.com/v1/gifs/search?api_key=dt9ZAjlkOJ4xZ2yH7U6okwSW3gxM5SDh&q=$onepunch&limit=10')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    }); */

/* Gifs */

/* obtener el valor del input */
const inputGif = document.getElementById("search-input");
const btnGifs = document.getElementById("search-btn");

let imagenItem = [];

btnGifs.addEventListener("click", () => {
  const newGif = document.getElementById("search-input").value;
  newGif.trim();
  console.log(newGif);
  getGifs(newGif);

  inputGif.value = ''
});

async function getGifs(category) {
  console.log(imagenItem);
  const url = `https://api.giphy.com/v1/gifs/search?api_key=dt9ZAjlkOJ4xZ2yH7U6okwSW3gxM5SDh&q=${category}&limit=120`;
  try {
    const response = await fetch(url);
    const { data } = await response.json();

    data.forEach((element) => {
      imagenItem.push(element.images.downsized_medium.url)
    });

    const containerImages = document.getElementById('gifs-items');
    containerImages.innerHTML = ''; /* Elimina el contenido anterior del contenedor de imágenes */

    imagenItem.forEach(url => {
        const image = document.createElement("img");

        image.src = url;
        containerImages.appendChild(image);
    });

    imagenItem = [];

    
  } catch (error) {
    console.log(error);
  }
}


//EVENTOS

function generarColorAleatorio() {
  const rojo = Math.floor(Math.random() * 256);
  const verde = Math.floor(Math.random() * 256);
  const azul = Math.floor(Math.random() * 256);
  return `rgb(${rojo}, ${verde}, ${azul})`;
}


const buttonChange = document.getElementById('changeItem');
const itemChange = document.getElementById('item-change-css');

buttonChange.addEventListener('click', () => {
  itemChange.style.backgroundColor = generarColorAleatorio();

  /* agregar una clase */
  itemChange.classList.add('classChange');

  /* remover una clase */
  itemChange.classList.remove('aremover');

  /* al pulsar se agregar y al pulsar nuevamente se quita */
  itemChange.classList.toggle('classToggle')
})


/* Crear elementos */
const btnCreate = document.getElementById('btn-create');
const containerCreateElement = document.getElementById('container-createElement');

btnCreate.addEventListener('click', () => {
  
  const numeroAleatorio = Math.floor(Math.random() * 10) + 1; /* crear numero aleatorio entre 1 y 10 */
  const titleExample = document.createElement('span') /* createElement */
  titleExample.textContent = "Span creado";
  titleExample.style.padding = '20px';
  titleExample.id = 'titleExample' + numeroAleatorio;
  containerCreateElement.appendChild(titleExample); /* agregar item al contenedor */
});


/* eliminar elemento */

const btnDelete = document.getElementById('btn-delete');
const spanDelete = document.getElementById('spanDelete');

btnDelete.addEventListener('click', () => {

  containerCreateElement.removeChild(spanDelete);

});


/*  remplazar */

const btnReplace = document.getElementById('btn-replace');
const spanToReplace = document.getElementById('spanReplace');

btnReplace.addEventListener('click', () => {

  const spanReplace = document.createElement('span');
  spanReplace.textContent = "| Remplazado";

  containerCreateElement.replaceChild(spanReplace, spanToReplace );
})



/* crear en localstorage */
const btnLocal = document.getElementById('btn-local');

const user = {
  name: 'Cristopher',
  lastName: 'Saldaña',
  title: 'Software Engineer'
}

const year = 2023;

btnLocal.addEventListener('click', () => {

  
  localStorage.setItem('user', `nombre: ${user.name} - apellido: ${user.lastName} - cargo: ${user.title}` );
  localStorage.setItem('objectUser', JSON.stringify(user));
  localStorage.setItem('year', JSON.stringify(year)); /* convertir a string */
});


const btnLocalGet = document.getElementById('btn-local-get');

btnLocalGet.addEventListener('click', () => {
  const userLocalStorage = localStorage.getItem('user');
  const objectUser = localStorage.getItem('objectUser');
  console.log(userLocalStorage);
  console.log(JSON.parse(objectUser)); /* para ver el objeto */
});

const btnLocalDelete = document.getElementById('btn-local-delete');

btnLocalDelete.addEventListener('click', () => {
  localStorage.removeItem('user');
})