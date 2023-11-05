//Codigo hecho cuando habia un solo modal.

//abrir el modal
/*function abrirModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "block";
}

//cerrar el modal
function cerrarModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}

//evento clic para abrir el modal
let enlace = document.getElementById("colaborar_form");
enlace.addEventListener("click", function (event) {
  event.preventDefault();
  abrirModal();
});*/

// Abrir el primer modal
function abrirModal_1() {
  let modal = document.getElementById("modal_1");
  modal.style.display = "block";
}

// Cerrar el primer modal
function cerrarModal_1() {
  let modal = document.getElementById("modal_1");
  modal.style.display = "none";
}

// Abrir el segundo modal
function abrirModal_2() {
  let modal = document.getElementById("modal_2");
  modal.style.display = "block";
}

// Cerrar el segundo modal
function cerrarModal_2() {
  let modal = document.getElementById("modal_2");
  modal.style.display = "none";
}

// Abrir el tercer modal
function abrirModal_3() {
  let modal = document.getElementById("modal_3");
  modal.style.display = "block";
}

// Cerrar el tercer modal
function cerrarModal_3() {
  let modal = document.getElementById("modal_3");
  modal.style.display = "none";
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




