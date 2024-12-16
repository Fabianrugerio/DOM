/* 

  Evento

  Es una accion o suceso que ocurre en el navegador o en algun elemento del DOM. Puede ser iniciado por el usuario o por el sistema y pueden ser manejados mediante Javascript

    + Manejaparar eventos: Escribir código que reaccione de cierta manera cuando algo específico suceda. Para manejar eventos necesitamos conocer algunos elementos clave:

      1. Target (Blanco): Es es elemento del DOM en el que ocurrió el evento. este elemento se encuentra dentro del objeto evento y se accede mediante la propiedad event.target
      2. Event listener (Escuchador): Es el oido que esta atento a que ocurra un evento en un elemento específico. Usamos el método addEventListener para escuchar eventos
      3. Trigger (Detonador): Es la accion que realiza el usuario o el sistema para activar el evento
      4. Event Handler (Manejador): Es la funcion que se ejecuta cada vez que ocurre el evento. con código de JS le decimos que hace el event handlertarget.eventListener(trigger, eventHanlder)

*/

/* 

  Seleccionar el elemento

*/

const button = document.getElementById("button");

button.addEventListener("click" , mostrarMensaje);

function mostrarMensaje () {
  console.log("No te salió nada xd")
}
