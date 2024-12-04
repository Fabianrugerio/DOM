/* 

  Acceder al primer item de la lista.

*/

const botanas = document.getElementsByTagName("li");

console.log(botanas[0]);

/* 

  Propiedad classlist

  Accedemos a las listas de clases que tiene un elemento

    elemento.classList

  - Devuelve un DOM Token List(Listado de Clases en el DOM) en tipo array

*/

console.log(botanas[0].classList);
console.log(botanas[0].classList[0]); // Acceso a clases a travez de su índice

/* 

  Agregar clases

  Para agregar clases usamos el metodo add()

    elemento.classList.add(clase)

  - Nombre de la clase pasa como string entre "" o ''

*/

botanas[1].classList.add('bg-lightpink');

/* 

  Verificar si existe una clase especifica en un elemento con el método contains()

    elemento.classList.contains()

  - Devuelve true si existe la clase
  - Devuelve flase si no existe la clase
  - La clase pasa como string con "" o ''

*/

console.log(botanas[2].classList.contains('botana'));
console.log(botanas[2].classList.contains('bg-lightblue'));

/* 

  Para eliminar una clase usamos el método remove

    elemento.clasList.remove(clase a remover)

  - Pasa como un string con "" o ''

*/

botanas[3].classList.remove('bg-lightpink');