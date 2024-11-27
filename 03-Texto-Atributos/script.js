/* 

  Seleccionamos los elementos por su id

*/

const title = document.getElementById("title");
const list = document.getElementById("list");

/* 

  Lo mostramos por consola

*/

console.log(title);
console.log(list);

/* 

  InnerText

  Devuelve un string del contenido visible dentro de un elemento

    elemento.InnetText

  -Excluye los elementos ovultos
  -Excluye los espacios del elemento
  -Excluye tambien las etiquetas html

*/

console.log(">>> Con InnerText");
console.log(title.innerText);
console.log(list.innerText);

/* 

  textContent

  Devuelve un string del contenido visible dentro de un elemento

  elemento.textContent

  -Incluye los espacios
  -Incluye elementos ocultos
  -Ecluye las etiquetas html

*/

console.log(">>> Con textContent");
console.log(title.textContent);
console.log(list.textContent);

/* 

  InnerHTML

  Devuelve un string con la estructura interna del elemento seleccionado

  elemento.inneRHTML

*/

console.log(">>> Con innerHTML");
console.log(title.innerHTML);
console.log(list.innerHTML);

/* 

  Modificar el contenido con innerText

  Asignamos el valor al elemento seleccionado

    elemento.innerText = "string"

*/

title.innerText = "Agentes";
list.innerText = "No hay. no existe Silka Medic";

/* 

  Modificar el contenido con textContent

  Asignamos el valor al elemento seleccionado

    elemento.textContent = "string"

*/

title.textContent = "Agentes mamastrosos";
list.textContent = "Carganding...";

/* 

  Modificar el contenido con innerHTML

  Asignamos el valor al elemento seleccionado incluyendo las etiquetas html

    elemento.innerHTML = "<tags>...</tags>"

*/

title.innerHTML = "¡Ricos <span>Agentes</span>!";
list.innerHTML = `<li>Iso</li>
                  <li class="oculto">Phoenix</li>
                  <li>Cypher</li>`
