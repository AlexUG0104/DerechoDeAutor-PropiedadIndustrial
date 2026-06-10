<template>
  <section class="section" id="derechos-autor">
    <div class="container">
      <!-- Section header -->
      <div class="section-header">
        <div class="section-badge fade-in">
          <span>Derechos de Autor</span>
        </div>
        <h2 class="section-title fade-up">
          ¿Qué protege el <span>Derecho de Autor</span>?
        </h2>
        <p class="section-subtitle fade-up">
          Toda obra original tiene protección automática desde el momento de su creación. No necesitas registrarte para ser titular de tus derechos.
        </p>
      </div>

      <!-- Key info banner -->
      <div class="da-banner fade-up">
        <div class="da-banner-item">
          <span class="banner-num">01</span>
          <div>
            <strong>Protección automática</strong>
            <p>Desde el momento de la creación</p>
          </div>
        </div>
        <div class="da-banner-item">
          <span class="banner-num">02</span>
          <div>
            <strong>70 años</strong>
            <p>Duración promedio de protección</p>
          </div>
        </div>
        <div class="da-banner-item">
          <span class="banner-num">03</span>
          <div>
            <strong>Internacional</strong>
            <p>Reconocido en +180 países</p>
          </div>
        </div>
        <div class="da-banner-item">
          <span class="banner-num">04</span>
          <div>
            <strong>Obras originales</strong>
            <p>Tu creatividad es el requisito</p>
          </div>
        </div>
      </div>

      <!-- What it protects -->
      <h3 class="subsection-title fade-up">Lo que protege en tu negocio:</h3>

      <div class="da-grid">
        <div
          v-for="(item, i) in examples"
          :key="item.title"
          class="da-card fade-up"
          :style="{ transitionDelay: i * 80 + 'ms' }"
        >
          <div class="da-card-icon-area" :style="{ background: item.bg }">
            <span class="da-num">0{{ i + 1 }}</span>
          </div>
          <div class="da-card-info">
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </div>
          <div class="da-card-badge" :style="{ background: item.badgeBg, color: item.badgeColor }">
            {{ item.badge }}
          </div>
        </div>
      </div>

      <!-- Rights explained -->
      <div class="da-rights fade-up">
        <div class="da-rights-col da-rights-moral">
          <div class="rights-header">
            <span class="rights-icon-text">DM</span>
            <div>
              <h3>Derechos Morales</h3>
              <p>Perpetuos e inalienables</p>
            </div>
          </div>
          <ul class="rights-list">
            <li>
              <span class="check">✓</span>
              <span>Reconocimiento de autoría</span>
            </li>
            <li>
              <span class="check">✓</span>
              <span>Publicar bajo seudónimo</span>
            </li>
            <li>
              <span class="check">✓</span>
              <span>Integridad de la obra</span>
            </li>
            <li>
              <span class="check">✓</span>
              <span>Retirar la obra del mercado</span>
            </li>
          </ul>
        </div>
        <div class="da-rights-col da-rights-patrimonial">
          <div class="rights-header">
            <span class="rights-icon-text">DP</span>
            <div>
              <h3>Derechos Patrimoniales</h3>
              <p>Transferibles y licenciables</p>
            </div>
          </div>
          <ul class="rights-list">
            <li>
              <span class="check">✓</span>
              <span>Reproducción y distribución</span>
            </li>
            <li>
              <span class="check">✓</span>
              <span>Comunicación pública</span>
            </li>
            <li>
              <span class="check">✓</span>
              <span>Transformación y adaptación</span>
            </li>
            <li>
              <span class="check">✓</span>
              <span>Vender o ceder licencias</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const examples = [
  {
    title: 'Fotografías',
    desc: 'Tus fotos de productos, eventos o servicios son tuyas desde el disparo.',
    badge: 'Automático',
    bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    badgeBg: '#fef3c7',
    badgeColor: '#92400e',
  },
  {
    title: 'Videos',
    desc: 'Tutoriales, reels, publicidad audiovisual y contenido para redes sociales.',
    badge: 'Automático',
    bg: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
    badgeBg: '#fee2e2',
    badgeColor: '#991b1b',
  },
  {
    title: 'Diseños Gráficos',
    desc: 'Infografías, branding, ilustraciones y material visual de tu marca.',
    badge: 'Automático',
    bg: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
    badgeBg: '#dbeafe',
    badgeColor: '#1e40af',
  },
  {
    title: 'Redes Sociales',
    desc: 'Posts, stories, textos y creativos que publicas en tus redes.',
    badge: 'Automático',
    bg: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
    badgeBg: '#ede9fe',
    badgeColor: '#5b21b6',
  },
  {
    title: 'Logos',
    desc: 'El diseño artístico de tu logo está protegido. La marca requiere registro por separado.',
    badge: 'Diseño + Marca',
    bg: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
    badgeBg: '#d1fae5',
    badgeColor: '#065f46',
  },
  {
    title: 'Contenido Digital',
    desc: 'Textos de tu web, blogs, newsletters, cursos online y software.',
    badge: 'Automático',
    bg: 'linear-gradient(135deg, #ecfeff, #cffafe)',
    badgeBg: '#cffafe',
    badgeColor: '#155e75',
  },
]
</script>

<style scoped>
/* Banner */
.da-banner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  background: linear-gradient(135deg, var(--color-gray-900), var(--color-blue-900));
  border-radius: var(--radius-xl);
  overflow: hidden;
  margin-bottom: 3rem;
}

.da-banner-item {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 1.5rem;
  border-right: 1px solid rgba(255,255,255,0.1);
  color: white;
  transition: background var(--transition-fast);
}

.da-banner-item:last-child { border-right: none; }

.da-banner-item:hover {
  background: rgba(255,255,255,0.05);
}

.banner-num {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-cyan-400);
  flex-shrink: 0;
}

.da-banner-item strong {
  display: block;
  font-size: 0.9375rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
}

.da-banner-item p {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.6);
  margin: 0;
}

/* Subsection title */
.subsection-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: 1.25rem;
}

/* Examples grid */
.da-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.da-card {
  background: white;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-gray-100);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  display: flex;
  flex-direction: column;
}

.da-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.da-card-icon-area {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.da-num {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-primary-dark);
}

.da-card-info {
  padding: 0 1.25rem;
  flex: 1;
}

.da-card-info h4 {
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: 0.375rem;
}

.da-card-info p {
  font-size: 0.8125rem;
  color: var(--color-gray-500);
  line-height: 1.55;
}

.da-card-badge {
  margin: 0.875rem 1.25rem 1.25rem;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.7rem;
  font-weight: 700;
  display: inline-block;
  align-self: flex-start;
  letter-spacing: 0.04em;
}

/* Rights columns */
.da-rights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.da-rights-col {
  border-radius: var(--radius-xl);
  padding: 2rem;
  border: 1px solid var(--color-gray-100);
}

.da-rights-moral {
  background: linear-gradient(135deg, var(--color-blue-50), white);
}

.da-rights-patrimonial {
  background: linear-gradient(135deg, #ecfeff, white);
}

.rights-header {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 1.25rem;
}

.rights-icon-text {
  width: 48px;
  height: 48px;
  background: white;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  box-shadow: var(--shadow-sm);
  flex-shrink: 0;
}

.rights-header h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: 0.25rem;
}

.rights-header p {
  font-size: 0.8125rem;
  color: var(--color-gray-500);
}

.rights-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.rights-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: var(--color-gray-700);
}

.check {
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .da-banner {
    grid-template-columns: repeat(2, 1fr);
  }

  .da-banner-item:nth-child(2) {
    border-right: none;
  }

  .da-banner-item:nth-child(1),
  .da-banner-item:nth-child(2) {
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
}

@media (max-width: 768px) {
  .da-banner {
    grid-template-columns: 1fr;
  }

  .da-banner-item {
    border-right: none;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .da-banner-item:last-child {
    border-bottom: none;
  }

  .da-grid {
    grid-template-columns: 1fr;
  }

  .da-rights {
    grid-template-columns: 1fr;
  }
}
</style>
