/* 

  Métodos de Navegacion

    Nos permiten movernos entre los elementos relacionados en el DOM

*/

// Referencias

const padre = document.getElementById("parent");
const hijo = document.getElementById("child");
const hermano = document.getElementById("sibling");

/* 

  parentNode

    Devuelve el nodo padre del elemento

*/

console.log(hijo.parentNode);

/* 

  childNodes

    Devuelve una conexion de todos los nodos hijos incluyendo elementos de html, texto y hasta comentarios

*/

console.log(padre.childNodes);

/* 

  children

    Devuelve una conexion de html de los nodos hijos que son elementos de html. Ignora nodos de texto o comentarios

*/

console.log(padre.children);

/* 

  firstChild

    Este devuelde el primer nodo hijo, puede ser un nodo de texto, comentario o elemento

*/

console.log(padre.firstChild);

/* 

  firstElementChild

    Devuelve el primer nodo hijo que sea un elemento

*/

console.log(padre.firstElementChild);

/* 

  lastChild

    Devuelde el ultimo nodo hijo, ya sea texto, comentario o elemento

*/

console.log(padre.lastChild);

/* 

  lastElementChild

    Devuelve el ultimo nodo hijo que sea un elemento

*/

console.log(padre.lastElementChild);

/* 

  nextSibling

    Devuelve el siguiente nodo hermano, puede ser nodo de texto, comentario o elemento

*/

console.log(hijo.nextSibling);
console.log(hermano.nextSibling);

/* 

  nextElementSibling

    Devuelve el siguiente nodo hermano que sea un elemento

*/

console.log(hijo.nextElementSibling);
console.log(hermano.nextElementSibling);

/* 

  previousSibling

    Devuelve el anterior nodo hermano, puede ser un nodo texto, comentario o elemento

*/

console.log(hijo.previousSibling);
console.log(hermano.previousSibling);

/* 

  previousElementSibling

    Devuelve el nodo anterior por el anterior nodo hermano que sea un elemento

*/

console.log(hijo.previousElementSibling);
console.log(hermano.previousElementSibling);