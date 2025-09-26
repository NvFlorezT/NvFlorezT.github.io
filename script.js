// Función para mostrar solo la sección seleccionada
function mostrarSeccion(id) {
  // Oculta todas
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(sec => sec.classList.remove('activa'));

  // Muestra la elegida
  document.getElementById(id).classList.add('activa');
}
