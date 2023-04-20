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