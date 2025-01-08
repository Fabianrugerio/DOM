/* 

  Objeto Evento (e)

    Representa un suceso que ocurre en el navegador, como un click, pulsar una tecla o el movimiento del mause y proporciona informaion sobre las propiedades y métodos para manejarlo

    Para acceder al obejto evento(e) se pas automáticamente como un argumento a la funcion manejadora

  Sintaxis 

      function funcionManejadora (e) {
        // Código a ejecutar
        console.log(e) Muestra la lista de propiedades y métodos
      }

  Propiedades del (e)

    type: tipo de evento
    target: donde ocurre el evento
    timeStamp: devuelve la marca de tiempo en mls desde la carga de la página

    code: devuelve el código de la tecla presionada
    key: devuelve el valor de la tecla presionada
    
    clientX: devuelve la posicion horizontal del puntero/mouse en relacion a la ventana del navegador
    clientY: devuelve la posicion vertical del puntero/mouse en relacion a la ventana del navegador

*/

const button = document.getElementsByClassName("button");

button[0].addEventListener('click', mostrarObjetoEvento);

function mostrarObjetoEvento(e) {
  // Código que se ejecuta
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.timeStamp);
  console.log(e.target.innerText);
}

document.addEventListener("keydown", function(e){
  console.log(e);
  console.log(e.type);
  console.log(e.code);
  console.log(e.key);
})

document.addEventListener('mousemove', (e)=>{
  console.log(e);
  console.log("Cord x: " + e.clientX + " Cord y: " + e.clientY);
})