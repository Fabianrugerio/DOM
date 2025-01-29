/* Reeferencias */

const taskInput = document.getElementById('taskInput')
const addButton = document.getElementById('addButton')

/* eventListener */

addButton.addEventListener('click', createTask)

/* Funcion manejadora */

function createTask () {
  if (taskInput.value) {
    /* Crear todos los elementos que integran la tarea */
  console.log('taskInput.value');
  taskInput.value = '' // REgresamos el valor vacio al input
  } else {
    alert('Heeeey. Escribe una tarea bro')
  }
}