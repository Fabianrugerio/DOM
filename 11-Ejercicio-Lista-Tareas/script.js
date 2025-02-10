/* Reeferencias */

const taskInput = document.getElementById('taskInput')
const addButton = document.getElementById('addButton')
const taskList = document.getElementById('taskList')

/* eventListener */

addButton.addEventListener('click', createTask)

/* Funcion manejadora */

function createTask () {
  if (taskInput.value) {
    /* Crear todos los elementos que integran la tarea */
  console.log('taskInput.value');

  /* Creamos un div para tareas */

  const taskItem = document.createElement('div');
  taskItem.classList.add('task');
  
  /* Creamos el parrafo de la tarea */

  const taskText = document.createElement('p');
  taskText.innerText = taskInput.value;

  /* Creamos el div con los inconos */

  const taskIcon = document.createElement('div');
  taskIcon.classList.add('task-icons');

  /* Creamos el icono de check */

  const iconCheck = document.createElement('i');
  iconCheck.classList.add('bi', 'bi-check2-circle', 'icono-completar');

  /* Creamos el icono de eliminar */

  const iconTrash = document.createElement('i');
  iconTrash.classList.add('bi', 'bi-trash', 'icono-eliminar');

  /* Estructura de los elementos */

  taskIcon.append(iconCheck, iconTrash);
  taskItem.append(taskText, taskIcon);
  taskList.append(taskItem); 

  taskInput.value = '' // REgresamos el valor vacio al input
  } else {
    alert('Heeeey. Escribe una tarea bro');
  }
}