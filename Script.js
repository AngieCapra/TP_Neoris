

// Abrir modal_1
function abrirModal_1() {
  let modal = document.getElementById("modal_1");
  modal.style.display = "block";
    document.getElementById("fondo_modal").style.display = "block";
  
}

// Cerrar modal_1
function cerrarModal_1() {
  let modal = document.getElementById("modal_1");
  modal.style.display = "none";
   document.getElementById("fondo_modal").style.display = "none";
}

// Abrir modal_2
function abrirModal_2() {
  let modal = document.getElementById("modal_2");
  modal.style.display = "block";
  document.getElementById("fondo_modal").style.display = "block";
}

// Cerrar modal_2
function cerrarModal_2() {
  let modal = document.getElementById("modal_2");
  modal.style.display = "none";
    document.getElementById("fondo_modal").style.display = "none";
}

// Abrir modal_3
function abrirModal_3() {
  let modal = document.getElementById("modal_3");
  modal.style.display = "block";
  document.getElementById("fondo_modal").style.display = "block";
}

// Cerrar modal_3
function cerrarModal_3() {
  let modal = document.getElementById("modal_3");
  modal.style.display = "none";
    document.getElementById("fondo_modal").style.display = "none";
}

// Eventos para abrir los nuevos modales
let enlace1 = document.getElementById("colaborar_form");
enlace1.addEventListener("click", function (event) {
  event.preventDefault();
  abrirModal_1();

});

let enlace2 = document.getElementById("adoptar_form");
enlace2.addEventListener("click", function (event) {
  event.preventDefault();
  abrirModal_2();
});

let enlace3 = document.getElementById("amadrinar_form");
enlace3.addEventListener("click", function (event) {
  event.preventDefault();
  abrirModal_3();
});




