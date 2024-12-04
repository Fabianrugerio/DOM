/* 

  Obtenemos un elemento de referencia

    -Este es el elemento de html donde vamos a crear un nuevo elemento o nodo

*/

const movies = document.getElementById('peliculas')

/* 

  Para crear un nuevo elemento usamos createElement

    documento.creatElement(tipo de elemento)

  - El tipo de elemento pasa como string entre "" o ''
  - Se debe guardad en una variable o constante

*/

const newMovie = document.createElement('li')

console.log(newMovie)

/* 

  Para agregar el elemento al DOM desde la referencia usamos el método append()

    elementoReferencia.append(nuevoElemento)
  
  - No pasa como strign

*/

movies.append(newMovie)

/* 

  Agregamos texto al nuevo elemento con innerText

    elemento.innerText = elemento

  - Valor pasa como string con "" o con ''

*/

newMovie.innerText = 'Shrek 2'

/* 

  Agregamos las clases al nueevo elemento con el método add()

    elemento.classList.add("clase")

  - La clase pasa como string con "" o con ''
  - El método acepta mas de un parámetro separandolo con ,

*/

newMovie.classList.add('list-item', 'bg-color-two')

/* 

  Reto agregar un 5 elemento

*/

const nuevaPelicula = document.createElement('li')
movies.append(nuevaPelicula)
nuevaPelicula.innerText = 'Shrek 1'
nuevaPelicula.classList.add('list-item', 'bg-color-one')