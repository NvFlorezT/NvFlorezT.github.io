/* ===========================
   script.js
   =========================== */

// Mostrar solo una sección a la vez
function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  // Ocultar los detalles de planes si se cambia de sección
  ["detalle-basico", "detalle-intermedio", "detalle-premium"].forEach(d => {
    document.getElementById(d).style.display = "none";
  });
}

// Mostrar detalle de planes
function toggleDetalle(plan) {
  ["detalle-basico", "detalle-intermedio", "detalle-premium"].forEach(d => {
    document.getElementById(d).style.display = "none";
  });

  document.getElementById("detalle-" + plan).style.display = "block";
}

// Volver a los planes
function volverPlanes() {
  ["detalle-basico", "detalle-intermedio", "detalle-premium"].forEach(d => {
    document.getElementById(d).style.display = "none";
  });
}

//menu hamburguesa
function toggleMenu() {
  const sidebar = document.querySelector('.sidebar');
  const main = document.querySelector('main');

  sidebar.classList.toggle('active');
  main.classList.toggle('menu-open');
}

