/* ===========================
   script.js
   - Lógica de interacción:
     * pantalla bienvenida
     * mostrar/ocultar app y sidebar
     * navegación entre secciones
     * mostrar/ocultar detalles de planes
   =========================== */

/* References a elementos clave */
const body = document.body;
const welcome = document.getElementById('welcome');
const enterBtn = document.getElementById('enterBtn');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const site = document.getElementById('site');

/* Planes */
const planButtons = document.querySelectorAll('[data-plan]');
const planDetails = document.querySelectorAll('.plan-detail');
const backToPlansButtons = document.querySelectorAll('.back-to-plans');

/* ---------- Funciones ---------- */

/* 1) Entrar al sitio:
   - oculta pantalla de bienvenida con transición
   - añade clase 'entered' al body para mostrar app y control visual
*/
function startSite() {
  welcome.classList.add('hidden');        // oculta con transición CSS
  body.classList.add('entered');          // muestra app #site y botón menu
  // aseguro que sidebar esté cerrado
  sidebar.classList.remove('open');
  // pequeñas mejoras: quitar foco del botón
  enterBtn.blur();
}

/* 2) Toggle sidebar (abrir/cerrar) - solo útil después de entrar */
function toggleSidebar() {
  sidebar.classList.toggle('open');
}

/* 3) Ir a sección (scroll suave) y cerrar sidebar */
function goToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  sidebar.classList.remove('open'); // cierra el menú al navegar
}

/* 4) Mostrar detalle de plan (solo uno visible a la vez) */
function showPlanDetail(key) {
  // ocultar todos
  planDetails.forEach(d => d.classList.remove('visible'));
  const target = document.querySelector(`.plan-detail[data-plan="${key}"]`);
  if (target) {
    target.classList.add('visible');
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

/* 5) Volver a lista de planes (oculta detalles) */
function backToPlans() {
  planDetails.forEach(d => d.classList.remove('visible'));
  // ir al contenedor de planes
  const plansSection = document.getElementById('planes');
  if (plansSection) plansSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* 6) Volver a pantalla de presentación */
function backToWelcome() {
  // cerrar sidebar y ocultar app
  sidebar.classList.remove('open');
  body.classList.remove('entered');
  // mostrar welcome otra vez (con pequeño delay para asegurar transición)
  setTimeout(() => welcome.classList.remove('hidden'), 50);
  // ocultar detalles por seguridad
  backToPlans();
}

/* 7) Atajos: cerrar sidebar con ESC */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    sidebar.classList.remove('open');
  }
});

/* ---------- Event listeners ---------- */
enterBtn && enterBtn.addEventListener('click', startSite);
menuToggle && menuToggle.addEventListener('click', toggleSidebar);

/* Links del sidebar (data-target) */
document.querySelectorAll('[data-target]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const id = a.getAttribute('data-target');
    goToSection(id);
  });
});

/* Plan buttons */
planButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.getAttribute('data-plan');
    showPlanDetail(key);
  });
});

/* Volver a planes */
backToPlansButtons.forEach(b => b.addEventListener('click', backToPlans));
