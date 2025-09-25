/* ===========================
   script.js
   - Lógica de interacción:
     * pantalla bienvenida
     * mostrar/ocultar app y sidebar
     * navegación entre secciones
     * mostrar/ocultar detalles de planes
   =========================== */

// Mostrar solo una sección a la vez
function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  // Ocultar los detalles de planes si se cambia de sección
  document.getElementById("detalle-personalizado").style.display = "none";
  document.getElementById("detalle-asesoria").style.display = "none";
}

// Mostrar detalle de planes
function toggleDetalle(plan) {
  document.getElementById("detalle-personalizado").style.display = "none";
  document.getElementById("detalle-asesoria").style.display = "none";

  if (plan === "personalizado") {
    document.getElementById("detalle-personalizado").style.display = "block";
  } else if (plan === "asesoria") {
    document.getElementById("detalle-asesoria").style.display = "block";
  }
}

// Volver a los planes
function volverPlanes() {
  document.getElementById("detalle-personalizado").style.display = "none";
  document.getElementById("detalle-asesoria").style.display = "none";
}
