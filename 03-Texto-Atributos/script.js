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
                  <li>Cypher</li>`;

/* 

  getAttribute()

  Devuelve el valor del atributo del elemento que le indiquemos

  elemeto.getAttribute(atributo)



*/

const enlace = document.getElementsByTagName("a");

console.log(enlace[0].getAttribute("href"));

/* 

  removeAttribute()

  Esto elimina el valor del atributo de un elemento

  element.removeAttribute(atributo)

*/

enlace[0].removeAttribute("href");

console.log(enlace[0].removeAttribute("href"));

/* 

  setAttribute()

  Asigna un atributo a un elemento seleccionado

  elemento.setAttribute(atributo, valor)

  - obreescribir un atributo ya declarado
  - Definir un nuevo atributo y su valor

*/

enlace[0].setAttribute("href", "https://www.instagram.com/riotgames");

console.log(enlace[0].getAttribute("href", "https://www.instagram.com/riotgames"));

// Antes

console.log(enlace[0].getAttribute("target"));

enlace[0].setAttribute("target", "_blank");

// Despues

console.log(enlace[0].getAttribute("target"));