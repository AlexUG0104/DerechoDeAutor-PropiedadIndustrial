<template>
  <section class="section" id="practicas">
    <div class="container">
      <div class="section-header">
        <div class="section-badge fade-in">
          <span>Buenas Prácticas</span>
        </div>
        <h2 class="section-title fade-up">
          Recomendaciones para <span>proteger tu negocio</span>
        </h2>
        <p class="section-subtitle fade-up">
          Sigue estas pautas para resguardar tus creaciones y respetar los derechos intelectuales de terceros en el mercado.
        </p>
      </div>

      <div class="practices-layout">
        <!-- Informative cards block -->
        <div class="recommendations-block fade-up">
          <div class="rec-card" v-for="(item, idx) in recommendations" :key="idx">
            <div class="rec-number">0{{ idx + 1 }}</div>
            <div class="rec-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Extra tips panel -->
        <div class="tips-panel fade-up">
          <!-- Creative commons -->
          <div class="cc-box">
            <h4>Licencias Creative Commons</h4>
            <p>Si compartes contenido en internet y deseas autorizar ciertos usos bajo tus propias condiciones, considera utilizar las licencias CC:</p>
            <div class="cc-list">
              <div class="cc-item">
                <span class="cc-badge">BY</span>
                <p><strong>Reconocimiento:</strong> Obliga a dar crédito de forma adecuada al autor original.</p>
              </div>
              <div class="cc-item">
                <span class="cc-badge">NC</span>
                <p><strong>No Comercial:</strong> Impide que otros utilicen tu obra con fines lucrativos.</p>
              </div>
              <div class="cc-item">
                <span class="cc-badge">ND</span>
                <p><strong>Sin Obra Derivada:</strong> Permite compartir la obra original pero no alterarla ni crear derivados.</p>
              </div>
            </div>
          </div>

      
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const recommendations = [
  {
    title: 'Crear contenido propio',
    desc: 'Produce tus propias fotos, textos, videos y diseños comerciales. La autenticidad no solo evita problemas legales, sino que construye una marca fuerte y creíble.'
  },
  {
    title: 'Revisar licencias de uso',
    desc: 'Antes de emplear imágenes de Google, tipografías, música o software en tu negocio, verifica que tengan una licencia comercial libre o adquiere los permisos correspondientes.'
  },
  {
    title: 'Dar créditos apropiadamente',
    desc: 'Si utilizas obras o ideas ajenas bajo licencias libres que exijan atribución, otorga los créditos de forma clara y visible al autor de la obra.'
  },
  {
    title: 'Proteger información importante',
    desc: 'Mantén bajo estricta confidencialidad tus recetas, procesos de fabricación, listas de clientes y estrategias comerciales usando acuerdos de confidencialidad.'
  },
  {
    title: 'Evitar copiar contenido ajeno',
    desc: 'Inspirarse en otros negocios es normal, pero plagiar diseños, textos de páginas web o logos ajenos puede resultar en sanciones legales y pérdidas severas de reputación.'
  }
]
</script>

<style scoped>
.practices-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: var(--space-8);
  margin-top: var(--space-8);
}

/* Recommendations list */
.recommendations-block {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.rec-card {
  background: var(--color-white);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-gray-100);
  padding: var(--space-6);
  display: flex;
  gap: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.rec-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-blue-100);
}

.rec-number {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-blue-400);
  line-height: 1;
  opacity: 0.8;
}

.rec-content h3 {
  font-size: 1.0625rem;
  color: var(--color-gray-900);
  margin-bottom: var(--space-2);
  font-weight: 700;
}

.rec-content p {
  font-size: 0.875rem;
  color: var(--color-gray-500);
  line-height: 1.6;
}

/* Tips panel */
.tips-panel {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.cc-box, .tip-site-box {
  background: var(--color-white);
  border: 1px solid var(--color-gray-100);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
}

.cc-box h4, .tip-site-box h4 {
  font-size: 1rem;
  color: var(--color-gray-900);
  margin-bottom: var(--space-4);
  font-weight: 700;
}

.cc-box p, .tip-site-box p {
  font-size: 0.8125rem;
  color: var(--color-gray-500);
  line-height: 1.5;
}

.cc-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-top: var(--space-4);
}

.cc-item {
  display: flex;
  gap: var(--space-3);
  align-items: flex-start;
}

.cc-badge {
  background: var(--color-gray-100);
  color: var(--color-gray-700);
  font-size: 0.6875rem;
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-sm);
  text-transform: uppercase;
  flex-shrink: 0;
}

.cc-item p {
  font-size: 0.75rem;
  margin: 0;
  line-height: 1.4;
}

.site-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.875rem;
  transition: color var(--transition-fast);
}

.site-link:hover {
  color: var(--color-blue-400);
}

@media (max-width: 1024px) {
  .practices-layout {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}
</style>
