<template>
  <section class="section riesgos-section" id="riesgos">
    <div class="container">
      <div class="section-header">
        <div class="section-badge fade-in" style="background: linear-gradient(135deg, #fef2f2, #fee2e2); color: #991b1b; border-color: #fecaca;">
          <span>Riesgos</span>
        </div>
        <h2 class="section-title fade-up">
          ¿Qué puede pasar si no<br />
          <span>protejo mis creaciones?</span>
        </h2>
        <p class="section-subtitle fade-up">
          No proteger tu propiedad intelectual puede costarle muy caro a tu negocio. Conoce los riesgos más comunes para los emprendedores.
        </p>
      </div>

      <!-- Risk cards -->
      <div class="risks-grid">
        <div
          v-for="(risk, i) in risks"
          :key="risk.title"
          class="risk-card fade-up"
          :style="{ transitionDelay: i * 100 + 'ms' }"
        >
          <div class="risk-icon-wrap" :style="{ background: risk.iconBg }">
            <span class="risk-num">{{ i + 1 }}</span>
          </div>
          <h3>{{ risk.title }}</h3>
          <p>{{ risk.desc }}</p>
          <div class="risk-impact">
            <span class="risk-impact-label">Impacto:</span>
            <div class="risk-impact-bars">
              <span
                v-for="n in 5"
                :key="n"
                class="risk-bar"
                :class="{ active: n <= risk.impact }"
              ></span>
            </div>
            <span class="risk-impact-text">{{ risk.impactText }}</span>
          </div>
        </div>
      </div>

      <!-- CTA protect -->
      <div class="protect-cta fade-up">
        <div class="protect-left">
          <div>
            <h3>¡Protégete antes de que sea tarde!</h3>
            <p>El costo de registrar una marca o derecho de autor es mínimo comparado con las pérdidas que puede generar no hacerlo.</p>
          </div>
        </div>
        <a href="#practicas" class="btn btn-primary protect-btn">
          Ver buenas prácticas →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const risks = [
  {
    title: 'Copias y plagio',
    desc: 'Otros pueden copiar tu contenido, diseños o productos sin dar crédito ni pagar. Tu trabajo se convierte en el de otra persona.',
    impact: 5,
    impactText: 'Muy alto',
    iconBg: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
  },
  {
    title: 'Pérdida de clientes',
    desc: 'Una copia de tu marca o productos puede confundir a tus clientes y desviarlos hacia la competencia desleal.',
    impact: 4,
    impactText: 'Alto',
    iconBg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
  },
  {
    title: 'Uso indebido',
    desc: 'Tu nombre, logo o contenido puede ser usado en contextos que dañen tu reputación sin que puedas impedirlo legalmente.',
    impact: 4,
    impactText: 'Alto',
    iconBg: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
  },
  {
    title: 'Confusión de marca',
    desc: 'Sin registro, otra empresa puede registrar primero una marca similar y tú serías quien infringe, no ellos.',
    impact: 5,
    impactText: 'Muy alto',
    iconBg: 'linear-gradient(135deg, #ecfeff, #cffafe)',
  },
  {
    title: 'Problemas legales',
    desc: 'Puedes recibir demandas por usar accidentalmente algo protegido o perder el derecho a usar tu propio nombre comercial.',
    impact: 5,
    impactText: 'Muy alto',
    iconBg: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
  },
  {
    title: 'Pérdidas económicas',
    desc: 'La competencia desleal reduce tus ventas, tu participación en el mercado y el valor acumulado en tu negocio.',
    impact: 4,
    impactText: 'Alto',
    iconBg: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
  },
]
</script>

<style scoped>
.riesgos-section {
  background: var(--color-gray-50);
  position: relative;
  overflow: hidden;
}

.riesgos-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ef4444, #f59e0b, #ef4444);
  background-size: 200% 100%;
  animation: danger-pulse 3s ease-in-out infinite;
}

@keyframes danger-pulse {
  0%, 100% { background-position: 0% 0%; }
  50% { background-position: 100% 0%; }
}

/* Risk cards */
.risks-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.risk-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: 1.75rem;
  border: 1px solid var(--color-gray-100);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
  position: relative;
  overflow: hidden;
}

.risk-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(239, 68, 68, 0.12);
  border-color: #fecaca;
}

.risk-alert-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.25rem;
  animation: alert-pulse 2.5s ease-in-out infinite;
}

@keyframes alert-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.risk-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.risk-num {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.25rem;
  color: var(--color-gray-800);
}

.risk-card h3 {
  font-size: 1rem;
  color: var(--color-gray-900);
  margin-bottom: 0.5rem;
}

.risk-card p {
  font-size: 0.8125rem;
  color: var(--color-gray-500);
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

/* Impact bar */
.risk-impact {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.risk-impact-label {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--color-gray-400);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  flex-shrink: 0;
}

.risk-impact-bars {
  display: flex;
  gap: 3px;
}

.risk-bar {
  width: 16px;
  height: 6px;
  border-radius: 3px;
  background: var(--color-gray-100);
  transition: background var(--transition-base);
}

.risk-bar.active {
  background: linear-gradient(90deg, #f59e0b, #ef4444);
}

.risk-impact-text {
  font-size: 0.7rem;
  font-weight: 700;
  color: #ef4444;
  flex-shrink: 0;
}

/* CTA */
.protect-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  background: linear-gradient(135deg, #1e3a8a, var(--color-primary));
  border-radius: var(--radius-xl);
  padding: 2rem 2.5rem;
  color: white;
  flex-wrap: wrap;
}

.protect-left {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex: 1;
}

.protect-emoji {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.protect-left h3 {
  font-size: 1.125rem;
  color: white;
  margin-bottom: 0.25rem;
}

.protect-left p {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.75);
  max-width: 500px;
}

.protect-btn {
  white-space: nowrap;
  flex-shrink: 0;
  background: white;
  color: var(--color-primary);
  box-shadow: none;
}

.protect-btn:hover {
  background: var(--color-blue-50);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

@media (max-width: 1024px) {
  .risks-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .risks-grid {
    grid-template-columns: 1fr;
  }

  .protect-cta {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .protect-left {
    flex-direction: column;
    text-align: center;
  }
}
</style>
