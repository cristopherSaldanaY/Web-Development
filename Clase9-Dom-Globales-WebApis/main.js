/* Window function */

//window.open('https://www.youtube.com') /* al cargar abre nueva ventana */
//window.close(); /* al cargar cierra la ventana */
//window.confirm('Bievenido a Call of Duty Warzone');



/* Seleccionando el DOM */
const title = document.getElementById('title');
console.log(title);


/* getByTagName: me trae todos los li, pero puedo especificar que me devuelva uno con los [position] */
const gamesItem = document.getElementsByTagName('li')[5]
console.log(gamesItem);

/* getElementByClassName */
const consoleName = document.getElementsByClassName('className');
console.log(consoleName);


/* querySelector: trae el primer elemento que coincida */
const qSelectorExample = document.querySelector('div')
const qSelectorExample2 = document.querySelector('#resident');
console.log(qSelectorExample);
console.log(qSelectorExample2);


/* querySelectorAll: trae todos los elementos */
const qSelectorAll = document.querySelectorAll('#resident')
console.log(qSelectorAll);


/* Ejercicio agregar juegos */

const itemInput = document.getElementById('item-input');
const addButton = document.getElementById('add-button'); 
const itemList = document.getElementById('item-list')

const tableGame = document.getElementsByClassName('table-game');


addButton.addEventListener('click', () => {
    const newRow = document.createElement('tr');
    const itemCell = document.createElement('td');
    const newItem = document.createTextNode(itemInput.value);

    const dateCell = document.createElement('td');
    const options = {day: 'numeric', month: 'numeric', year: 'numeric'};
    const currentDate = new Date().toLocaleDateString('es-ES', options);

    itemCell.appendChild(newItem);
    dateCell.appendChild(document.createTextNode(currentDate));
    newRow.appendChild(itemCell);
    newRow.appendChild(dateCell);
    itemList.appendChild(newRow);
    /* itemInput.value = ''; */
    console.log(tableGame);
})

console.log(tableGame);


/* fetch('https://api.giphy.com/v1/gifs/search?api_key=dt9ZAjlkOJ4xZ2yH7U6okwSW3gxM5SDh&q=$onepunch&limit=10')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    }); */

async function getGifs(){
    try{
        const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=dt9ZAjlkOJ4xZ2yH7U6okwSW3gxM5SDh&q=$onepunch&limit=10');
        const data = await response.json();
        console.log(data);
    }catch (error){
        console.log(error);
    }
}

getGifs();