/* 

Seleccionar el elemento h1 a travez de su clase

*/

const titulo = document.querySelector(".titulo");

/* 
Mostramos el nodo seleccionado
 
 -Nodo expandido -> <h1></h1>
 -Nodo abstracto -> h1.title
 
 Algunos navegadores optimizan la representacion de los nodos en la consola

*/

console.log(titulo);

/* 

Objeto Style

  Accedemos a el usando la notacion de punto

    elemento.style

  Resultado es CSS Style Declaration. Es una lista que representa todas las propiedades de estilo de un elemento

  Unnicamente muestra el valor de los estilos en línea declarados directamente en el elemento html

*/

console.log(titulo.style);

/* 

Propiedades de estilo

Accedemos a las propiedades usando la notacion de punto

  elemento.style.nomprePropiedad

*/

console.log("Valores de linea. Color:" + titulo.style.color + " - Fondo: " + titulo.style.backgroundColor);