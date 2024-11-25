/* 

DOM

Organiza los elementos del documento en nodos en un arbor jerarquico.

Nodo -> Todo elemento individual de nuestro documento

Tipos de Nodo

  1. Nodo de Documento
  2. Nodo de Elemento
  3. Nodo de Atributo
  4. Nodo de Texto
  5. Nodo de Comentarios

*/

/* 

Nodo de Documentos

Este nodo representa el documento completo de html. Incluye el contenido desde la "raiz" - root hasta los elementos hijos

Para acceder usamos -> document

*/

console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.title)
console.log(document.URL)

/* 

Nodo Elemento

Para seleccionar nodos de elementos, usamos

getElementsByTagName("etiqueta")

Se escribe despues el nodo "document"

*/

/* 

let title = document.getElementsByTagName("h1")

console.log(title);

*/

/* 

Nodo Atributo

Son los nodos que accedemos atravez de su clase o id

document.getElementsById("nombeId")
document.getElementsByClassName("nombreClass")

querySelector("nombreDelector") -> Selecciona el primer elemento que encuentre con el selector

querySelectorAll("nombreSelector") -> Selecciona todos los elementos on el mismo selector

*/

/* 
let title = document.getElementById("title")

console.log(title);
console.log(title.innerText);
console.log(title.id);

let texts = document.getElementsByClassName("paragraph")

console.log(texts);
console.log(texts[0].textContent);
console.log(texts[1].textContent);

 */

/* let titulo = document.querySelector(".title") */
let titulo = document.querySelector("#title")

console.log(titulo);

let parrafos = document.querySelectorAll("paragraph")

console.log(parrafos)

/* 

Nodo de Texto

Son los elementos de tecto contenidos en las etiquetas de html

.innerText
.textContent

*/

let pio = document.querySelector(".subtitle")

/* 
console.log(pio);
console.log(pio.innerText);
console.log(pio.textContent);
*/

/* 

Nodo de Comentarios

Tienen un valor de 8 dentro del DOM

*/

let comentario = document.COMMENT_NODE;

console.log(comentario)