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

  A diferencia de las propiedades de estilo en js las escribimos usando el formato camelcase

    CSS -> background-color (kebab-case)
    JS -> backgroundColor (camelcase)

*/

console.log("Valores de linea. Color:" + titulo.style.color + " - Fondo: " + titulo.style.backgroundColor);

/* 

  Método de propiedad

  Asignar el valor de la propiedad de estilo en el elemento seleccionado

    elemento.style.nombrePropiedad = "valor"

  Es la forma mas directa y legible de asignar propiedade, pero esta forma solo admite asignar propiedades con formato camelcase

*/

titulo.style.color = "blue";
titulo.style.backgroundColor = "red";

console.log("Valores asignados con js. Color:" + titulo.style.color + " - Fondo: " + titulo.style.backgroundColor);

/* 

  Método setProperty

  Asignamos una propiedad de estilo al elemento seleccionado

    elemento.style.setProperty(nombrePropiedad, valor, important)

  - Más flexible y poderoso
  - Las propiedades se escriben en formato kebab-case
  - Parámetro "important" es opcional

*/

titulo.style.setProperty("color", "yellow");
titulo.style.setProperty("background-color", "darkblue", "important");

console.log("Valores asignados con setProperty. Color:" + titulo.style.color + " - Fondo: " + titulo.style.backgroundColor);

/* 

  Eliminar valores de propiedades

  Usamos el método de propiedad y le definimos una cadena de texto vacia

    elemento.style.nombrePropiedad = ""

  Esto elimina los valores previamente definidos en JS y en los estilos en linea

*/

titulo.style.color = ""
titulo.style.backgroundColor = ""

/* 

Método removeProperty

Elimina la propiedad al Estilo

elemento.style.removeProperty(nombrePropiedad)

*/

titulo.style.removeProperty("color")
titulo.style.removeProperty("backgroundColor")

// Al parecer solo remueve lo que esta en linea