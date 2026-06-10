<template>
  <section class="section section-alt" id="propiedad-intelectual">
    <div class="container">
      <!-- Section header -->
      <div class="section-header">
        <div class="section-badge fade-in">
          <span>Fundamentos</span>
        </div>
        <h2 class="section-title fade-up">
          ¿Qué es la <span>Propiedad Intelectual</span>?
        </h2>
        <p class="section-subtitle fade-up">
          Es el conjunto de derechos que protegen las creaciones de la mente humana, tanto artísticas como industriales. Fundamental para cualquier emprendimiento.
        </p>
      </div>

      <!-- Intro card -->
      <div class="pi-intro fade-up">
        <div class="pi-intro-content">
          <h3>El valor intangible de tu negocio</h3>
          <p>
            Tus ideas, diseños, marca y contenido son activos valiosos. La propiedad intelectual te brinda las herramientas legales para <strong>protegerlos, monetizarlos y defenderlos</strong> ante terceros.
          </p>
        </div>
        <div class="pi-intro-tag">
          <span>Clave para emprendedores</span>
        </div>
      </div>

      <!-- Cards grid -->
      <div class="pi-grid">
        <div
          v-for="(item, i) in pillars"
          :key="item.title"
          class="pi-card fade-up"
          :style="{ transitionDelay: i * 100 + 'ms' }"
        >
          <div class="pi-card-top" :style="{ background: item.gradient }">
            <span class="pi-card-num">0{{ i + 1 }}</span>
            <div class="pi-card-glow" :style="{ background: item.glow }"></div>
          </div>
          <div class="pi-card-body">
            <h3 class="pi-card-title">{{ item.title }}</h3>
            <p class="pi-card-desc">{{ item.desc }}</p>
            <div class="pi-card-tags">
              <span v-for="tag in item.tags" :key="tag" class="pi-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Branches -->
      <div class="pi-branches fade-up">
        <div class="pi-branch pi-branch-left">
          <div class="branch-header">
            <div class="branch-icon branch-icon-blue">©</div>
            <div>
              <h4>Derechos de Autor</h4>
              <p>Protege obras artísticas y creativas</p>
            </div>
          </div>
          <ul class="branch-list">
            <li>Literatura y música</li>
            <li>Arte y fotografía</li>
            <li>Software y código</li>
            <li>Audiovisual</li>
          </ul>
        </div>
        <div class="pi-branch-divider">
          <div class="divider-line"></div>
          <div class="divider-badge">PI</div>
          <div class="divider-line"></div>
        </div>
        <div class="pi-branch pi-branch-right">
          <div class="branch-header">
            <div class="branch-icon branch-icon-cyan">®</div>
            <div>
              <h4>Propiedad Industrial</h4>
              <p>Protege creaciones con uso comercial</p>
            </div>
          </div>
          <ul class="branch-list">
            <li>Marcas y nombres</li>
            <li>Patentes de invención</li>
            <li>Diseños industriales</li>
            <li>Secretos empresariales</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const pillars = [
  {
    title: 'Creatividad',
    desc: 'Tus creaciones artísticas, diseños y contenido digital tienen valor y merecen protección desde que son creados.',
    tags: ['Arte', 'Diseño', 'Contenido'],
    gradient: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
    glow: 'radial-gradient(circle, rgba(59,130,246,0.2), transparent 70%)',
  },
  {
    title: 'Innovación',
    desc: 'Las invenciones y mejoras tecnológicas en tus productos o procesos pueden registrarse y protegerse legalmente.',
    tags: ['Patentes', 'Tecnología', 'Invención'],
    gradient: 'linear-gradient(135deg, #ecfeff, #cffafe)',
    glow: 'radial-gradient(circle, rgba(6,182,212,0.2), transparent 70%)',
  },
  {
    title: 'Protección',
    desc: 'Evita que terceros copien, usen o vendan tus creaciones sin permiso. La ley te da herramientas para defender tus derechos.',
    tags: ['Legal', 'Defensa', 'Registro'],
    gradient: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    glow: 'radial-gradient(circle, rgba(16,185,129,0.2), transparent 70%)',
  },
  {
    title: 'Valor del Negocio',
    desc: 'Una marca registrada, una patente o contenido original son activos que aumentan el valor y la credibilidad de tu emprendimiento.',
    tags: ['Activos', 'Marca', 'Crecimiento'],
    gradient: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    glow: 'radial-gradient(circle, rgba(245,158,11,0.2), transparent 70%)',
  },
]
</script>

<style scoped>
/* Intro highlight card */
.pi-intro {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-blue-600));
  border-radius: var(--radius-xl);
  padding: 1.75rem 2rem;
  margin-bottom: 2.5rem;
  color: white;
  position: relative;
  overflow: hidden;
  flex-wrap: wrap;
}

.pi-intro::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.pi-intro-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.pi-intro-content {
  flex: 1;
  min-width: 200px;
}

.pi-intro-content h3 {
  font-size: 1.125rem;
  margin-bottom: 0.375rem;
  color: white;
}

.pi-intro-content p {
  font-size: 0.9375rem;
  color: rgba(255,255,255,0.85);
  line-height: 1.6;
}

.pi-intro-content strong {
  color: #bfdbfe;
}

.pi-intro-tag {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  background: rgba(255,255,255,0.15);
  padding: 0.375rem 0.875rem;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
}

/* Pillars grid */
.pi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.pi-card {
  background: white;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--color-gray-100);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.pi-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.pi-card-top {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  min-height: 100px;
}

.pi-card-num {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  position: relative;
  z-index: 1;
}

.pi-card-glow {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.pi-card-body {
  padding: 1.25rem 1.25rem 1.5rem;
}

.pi-card-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: 0.5rem;
}

.pi-card-desc {
  font-size: 0.8125rem;
  color: var(--color-gray-500);
  line-height: 1.6;
  margin-bottom: 0.875rem;
}

.pi-card-tags {
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;
}

.pi-tag {
  background: var(--color-gray-50);
  color: var(--color-gray-600);
  border: 1px solid var(--color-gray-100);
  padding: 0.2rem 0.625rem;
  border-radius: var(--radius-full);
  font-size: 0.7rem;
  font-weight: 600;
}

/* Branches */
.pi-branches {
  display: flex;
  align-items: center;
  gap: 0;
  background: white;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-gray-100);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.pi-branch {
  flex: 1;
  padding: 2rem;
}

.pi-branch-left { background: linear-gradient(135deg, var(--color-blue-50), white); }
.pi-branch-right { background: linear-gradient(135deg, white, #ecfeff); }

.branch-header {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  margin-bottom: 1.25rem;
}

.branch-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.branch-icon-blue {
  background: linear-gradient(135deg, var(--color-blue-100), var(--color-blue-50));
}

.branch-icon-cyan {
  background: linear-gradient(135deg, #cffafe, #ecfeff);
}

.branch-header h4 {
  font-size: 1rem;
  color: var(--color-gray-900);
  margin-bottom: 0.25rem;
}

.branch-header p {
  font-size: 0.8125rem;
  color: var(--color-gray-500);
}

.branch-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.branch-list li {
  font-size: 0.875rem;
  color: var(--color-gray-600);
  padding: 0.375rem 0.625rem;
  background: rgba(255,255,255,0.7);
  border-radius: var(--radius-md);
  font-weight: 500;
}

.pi-branch-divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
  flex-shrink: 0;
}

.divider-line {
  width: 1px;
  height: 60px;
  background: var(--color-gray-200);
}

.divider-badge {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  flex-shrink: 0;
  box-shadow: var(--shadow-blue);
}

@media (max-width: 1024px) {
  .pi-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .pi-grid {
    grid-template-columns: 1fr;
  }

  .pi-branches {
    flex-direction: column;
  }

  .pi-branch-divider {
    flex-direction: row;
    padding: 0 1rem;
    width: 100%;
  }

  .divider-line {
    width: 100%;
    height: 1px;
  }

  .branch-list {
    grid-template-columns: 1fr;
  }
}
</style>
