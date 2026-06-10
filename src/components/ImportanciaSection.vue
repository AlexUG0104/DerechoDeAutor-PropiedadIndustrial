<template>
  <section class="section section-alt" id="importancia">
    <div class="container">
      <div class="section-header">
        <div class="section-badge fade-in">
          <span>Importancia</span>
        </div>
        <h2 class="section-title fade-up">
          ¿Por qué es clave <span>proteger tus creaciones</span>?
        </h2>
        <p class="section-subtitle fade-up">
          La protección legal no es un gasto, es la base que sostiene el crecimiento, la identidad y la seguridad de tu negocio.
        </p>
      </div>

      <div class="importancia-grid">
        <div
          v-for="(item, i) in benefits"
          :key="item.title"
          class="importancia-card fade-up"
          :style="{ transitionDelay: i * 80 + 'ms' }"
        >
          <div class="card-icon" :style="{ background: item.bg, color: item.color }">
            {{ i + 1 }}
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    title: 'Evitar copias',
    desc: 'Impide que otros competidores se apropien de tu esfuerzo o copien tus productos directamente.',
    bg: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
    color: '#ef4444',
  },
  {
    title: 'Diferenciación',
    desc: 'Te ayuda a destacar en el mercado con una marca única y reconocible para tus clientes.',
    bg: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
    color: '#3b82f6',
  },
  {
    title: 'Protección del esfuerzo',
    desc: 'Asegura las horas de trabajo, creatividad y dinero invertido en tus innovaciones.',
    bg: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
    color: '#10b981',
  },
  {
    title: 'Valor del negocio',
    desc: 'Las marcas y patentes registradas se convierten en activos intangibles que aumentan el valor financiero de tu empresa.',
    bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    color: '#f59e0b',
  },
  {
    title: 'Reconocimiento de marca',
    desc: 'Genera confianza y credibilidad ante clientes, inversionistas, bancos y socios comerciales.',
    bg: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
    color: '#8b5cf6',
  },
]
</script>

<style scoped>
.importancia-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-4);
  margin-top: var(--space-8);
}

.importancia-card {
  background: var(--color-white);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-gray-100);
  padding: var(--space-6) var(--space-4);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.importancia-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-blue-200);
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-bottom: var(--space-4);
}

.importancia-card h3 {
  font-size: 0.9375rem;
  color: var(--color-gray-900);
  margin-bottom: var(--space-3);
  font-weight: 700;
}

.importancia-card p {
  font-size: 0.78rem;
  color: var(--color-gray-500);
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .importancia-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .importancia-grid {
    grid-template-columns: 1fr;
  }
}
</style>
