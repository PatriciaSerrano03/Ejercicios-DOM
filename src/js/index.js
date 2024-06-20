// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es un header con.... mi hermano es un h1 con....

const startPointElement = document.getElementById('start-point');

//console.dir(startPointElement);

console.log(
  `Soy un ${startPointElement.tagName} con el id ${startPointElement.id} y la clase ${startPointElement.className} mi padre es un ${startPointElement.parentElement.tagName} con el id ${startPointElement.parentElement.id} y la clase ${startPointElement.parentElement.className} y mi hermano mayor es un ${startPointElement.previousElementSibling.previousElementSibling.tagName} con el id ${startPointElement.previousElementSibling.previousElementSibling.id} y la clase ${startPointElement.previousElementSibling.previousElementSibling.className} `,
);

//Partiendo de esta lista, intercambia los textos de los li, deberás tener este resultado sin modificar a mano el HTML. Importante, no hay que mover el <li> sólo cambiar el contenido.

const FirstListElement = document.getElementById('first-list');
const SecondListElement = document.getElementById('second-list');
const FirstListElementContent = FirstListElement.textContent;
const SecondListElementContent = SecondListElement.textContent;

FirstListElementContent = SecondListElement.textContent;
SecondListElementContent = FirstListElement.textContent;

//FirstListElement.textContent = ;
//console.dir(FirstListElement);

//console.dir(FirstListElement);
//console.dir(SecondListElement);
