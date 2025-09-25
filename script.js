/* ===========================
   script.js
   - Lógica de interacción:
     * pantalla bienvenida
     * mostrar/ocultar app y sidebar
     * navegación entre secciones
     * mostrar/ocultar detalles de planes
   =========================== */

/* General */
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  background: #F4F6F8;
  color: #0A2540;
}

/* Sidebar */
.sidebar {
  width: 250px;
  background: #0A2540;
  color: white;
  padding: 20px;
  height: 100vh;
  position: fixed;
}

.sidebar h2 {
  cursor: pointer;
  margin-bottom: 20px;
}

.sidebar nav a {
  display: block;
  padding: 10px;
  margin: 5px 0;
  color: white;
  text-decoration: none;
  border-radius: 6px;
}

.sidebar nav a:hover {
  background: #1E90FF;
}

/* Main */
main {
  margin-left: 270px;
  padding: 40px;
  flex: 1;
}

.section {
  display: none;
  animation: fadeIn 0.6s;
}

.section.active {
  display: block;
}

/* Hero */
.hero {
  text-align: center;
  background: linear-gradient(135deg, #1E90FF, #00C896);
  color: white;
  padding: 80px 20px;
  border-radius: 12px;
}

/* Galería */
.galeria-acerca {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.galeria-acerca img {
  width: 200px;
  border-radius: 12px;
  transform: rotate(-2deg);
  transition: transform 0.3s;
}

.galeria-acerca img:hover {
  transform: rotate(0deg) scale(1.05);
}

/* Planes */
.planes-opciones {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.card-plan {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.card-plan .btn {
  display: inline-block;
  background: #1E90FF;
  color: white;
  padding: 10px 15px;
  margin-top: 10px;
  border-radius: 8px;
  text-decoration: none;
}

.card-plan .btn:hover {
  background: #00C896;
}

/* Detalle plan */
.detalle-plan {
  display: none;
  margin-top: 20px;
  padding: 20px;
  background: #F4F6F8;
  border-left: 5px solid #1E90FF;
  border-radius: 8px;
}

/* Animación */
@keyframes fadeIn {
  from {opacity: 0; transform: translateY(20px);}
  to {opacity: 1; transform: translateY(0);}
}
