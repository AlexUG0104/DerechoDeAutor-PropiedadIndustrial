<template>
  <footer class="footer">
    <div class="container footer-content">
      <!-- Upper part -->
      <div class="footer-top">
        <!-- Brand & Info -->
        <div class="footer-info">
          <div class="footer-logos">
            <div class="footer-logo-wrap">
              <img src="../assets/ucr-logo.png" alt="UCR" class="footer-logo-img" />
            </div>
            <div class="footer-logo-divider"></div>
            <div class="footer-logo-wrap">
              <img src="../assets/tcu-logo.jpg" alt="TCU" class="footer-logo-img" />
            </div>
          </div>
          <p class="footer-desc">
            Taller Virtual Universitario: "Derechos de Autor y Propiedad Industrial". Protegiendo el valor y la creatividad de los emprendimientos de nuestra comunidad.
          </p>
        </div>

        <!-- Links -->
        <div class="footer-links">
          <h4>Secciones</h4>
          <div class="links-grid">
            <a href="#inicio">Inicio</a>
            <a href="#propiedad-intelectual">¿Qué es PI?</a>
            <a href="#derechos-autor">Derechos de Autor</a>
            <a href="#propiedad-industrial">Propiedad Industrial</a>
            <a href="#importancia">Importancia</a>
            <a href="#riesgos">Riesgos</a>
            <a href="#practicas">Buenas Prácticas</a>
            <a href="#ejemplos-emprendedores">Ejemplos</a>
            <a href="#equipo">Equipo</a>
          </div>
        </div>

        <!-- Institutional Info -->
        <div class="footer-institution">
          <h4>Institución</h4>
          <p class="institution-name">Universidad de Costa Rica</p>
          <p class="tcu-name">Trabajo Comunal Universitario (TCU)</p>
          <div class="location-info">
            <span>San José, Costa Rica</span>
            <span>Año 2026</span>
          </div>
        </div>
      </div>

      <!-- Lower part / Credits -->
      <div class="footer-bottom">
        <p class="copyright">
          &copy; 2026 Universidad de Costa Rica. Todos los derechos reservados.
        </p>
        <p class="credits">
          Desarrollado por el equipo del TCU de Derechos de Autor y Propiedad Industrial
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component
</script>

<style scoped>
.footer {
  background: var(--color-gray-900);
  color: var(--color-gray-400);
  padding: var(--space-16) 0 var(--space-8);
  border-top: 1px solid var(--color-gray-800);
  font-size: 0.875rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--space-12);
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.footer-logos {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.footer-logo-wrap {
  display: flex;
  align-items: center;
  background: white;
  padding: 6px 12px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.footer-logo-img {
  height: 48px;
  width: auto;
  opacity: 1;
}

.footer-logo-fallback {
  display: none;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 0.75rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  color: white;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  border-radius: var(--radius-md);
}

.footer-logo-fallback-tcu {
  background: linear-gradient(135deg, #0f3460, #16213e);
}

.footer-logo-divider {
  width: 1px;
  height: 44px;
  background: rgba(255, 255, 255, 0.15);
}

.footer-desc {
  line-height: 1.6;
  max-width: 440px;
  color: var(--color-gray-500);
}

.footer-links h4,
.footer-institution h4 {
  color: var(--color-white);
  font-size: 1rem;
  margin-bottom: var(--space-6);
  font-family: var(--font-heading);
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3) var(--space-4);
}

.links-grid a {
  color: var(--color-gray-400);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.links-grid a:hover {
  color: var(--color-blue-400);
}

.footer-institution {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.institution-name {
  font-weight: 600;
  color: var(--color-gray-300);
}

.tcu-name {
  color: var(--color-gray-400);
}

.location-info {
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  font-size: 0.8125rem;
  color: var(--color-gray-500);
}

.footer-bottom {
  border-top: 1px solid var(--color-gray-800);
  padding-top: var(--space-8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-4);
  font-size: 0.8125rem;
  color: var(--color-gray-600);
}

.copyright {
  margin: 0;
}

.credits {
  margin: 0;
}

@media (max-width: 1024px) {
  .footer-top {
    grid-template-columns: 1.5fr 1fr;
  }
  .footer-institution {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
  .footer-institution {
    grid-column: span 1;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: var(--space-2);
  }
}
</style>
