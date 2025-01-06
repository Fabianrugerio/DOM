/* 

  Handler-Funciones

    Es una funcion que se ejecuta cuando el evento ocurre

    Hay tres formas de escibir la Funcion Handler:

      1. Como una funcion externa
      2. Como una funcion anónima
      3. Como una funcion flecha

    Funcion externa

      Esta funcion se escribe por fuera del evento y se pasa como argumento el addEventListener

        function handler () {
          // Código a ejecutar
        }
        
        elemento.addEventListener 
        (tipoEvento, handler)

     Funcion anónima

      Esta funcion se escribe por dentro del evento y no tienen nombre:
        
        elemento.addEventListener (tipoEvento, handler){
          // Código a ejecutar
        }

*/

const externa = document.getElementById("externa");

/* Funcion Externa */

function funcionExterna() {
  console.log("Click en el boton Externa");
}

/* Poner el evento */

externa.addEventListener("click", funcionExterna);

const anonima = document.getElementById("anonima")

anonima.addEventListener('click', function() {
  console.log("Click en el boton Anónima")
});