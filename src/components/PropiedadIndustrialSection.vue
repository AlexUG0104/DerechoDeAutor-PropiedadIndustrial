<template>
  <section class="section section-alt" id="propiedad-industrial">
    <div class="container">
      <div class="section-header">
        <div class="section-badge fade-in">
          <span>Propiedad Industrial</span>
        </div>
        <h2 class="section-title fade-up">
          Protege tu <span>Ventaja Competitiva</span>
        </h2>
        <p class="section-subtitle fade-up">
          La propiedad industrial protege las creaciones que tienen un uso comercial o industrial. Requiere registro formal pero ofrece protección exclusiva y valiosa.
        </p>
      </div>

      <!-- Main categories -->
      <div class="pi-main-grid">
        <div
          v-for="(cat, i) in categories"
          :key="cat.title"
          class="pi-main-card fade-up"
          :style="{ transitionDelay: i * 120 + 'ms' }"
        >
          <div class="pi-main-top" :style="{ background: cat.gradient }">
            <div class="pi-main-icon-wrap">
              <span class="pi-main-num">0{{ i + 1 }}</span>
            </div>
            <div class="pi-main-header-text">
              <h3>{{ cat.title }}</h3>
              <p>{{ cat.subtitle }}</p>
            </div>
          </div>
          <div class="pi-main-body">
            <p class="pi-main-desc">{{ cat.desc }}</p>
            <div class="pi-main-examples">
              <span class="pi-example-label">Ejemplos:</span>
              <div class="pi-examples-list">
                <span
                  v-for="ex in cat.examples"
                  :key="ex"
                  class="pi-example-chip"
                >{{ ex }}</span>
              </div>
            </div>
            <div class="pi-meta">
              <div class="pi-meta-item">
                <span class="pi-meta-label">Duración</span>
                <span class="pi-meta-value">{{ cat.duration }}</span>
              </div>
              <div class="pi-meta-item">
                <span class="pi-meta-label">Registro</span>
                <span class="pi-meta-value">{{ cat.registration }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Comparison table -->
      <div class="pi-table-wrap fade-up">
        <div class="pi-table-header">
          <h3>Comparación rápida</h3>
          <p>¿Cuál aplica para tu negocio?</p>
        </div>
        <div class="pi-table-scroll">
          <table class="pi-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>¿Qué protege?</th>
                <th>¿Requiere registro?</th>
                <th>Duración</th>
                <th>Ejemplo emprendedor</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in tableRows" :key="row.tipo">
                <td><strong>{{ row.tipo }}</strong></td>
                <td>{{ row.protege }}</td>
                <td>
                  <span class="table-badge" :class="row.registro === 'Sí' ? 'badge-yes' : 'badge-no'">
                    {{ row.registro }}
                  </span>
                </td>
                <td>{{ row.duracion }}</td>
                <td>{{ row.ejemplo }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Process steps -->
      <div class="pi-process fade-up">
        <h3 class="process-title">¿Cómo registrar tu propiedad industrial?</h3>
        <div class="steps-row">
          <div v-for="(step, i) in steps" :key="step.title" class="step-item">
            <div class="step-num">{{ i + 1 }}</div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
            <div v-if="i < steps.length - 1" class="step-connector">→</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    title: 'Marcas',
    subtitle: 'Signo distintivo',
    desc: 'Identifica y diferencia tus productos o servicios en el mercado. Puede ser un nombre, logo, slogan, color o incluso un sonido.',
    examples: ['Nombre del negocio', 'Logo de marca', 'Slogan', 'Marca mixta'],
    duration: '10 años (renovable)',
    registration: 'RNPI - Costa Rica',
    gradient: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-blue-600) 100%)',
  },
  {
    title: 'Patentes',
    subtitle: 'Invención tecnológica',
    desc: 'Protege inventos o mejoras que son nuevos, tienen actividad inventiva y son aplicables industrialmente.',
    examples: ['Nuevo proceso', 'Dispositivo técnico', 'Fórmula innovadora', 'Mejora de producto'],
    duration: '20 años',
    registration: 'RNPI - OMPI',
    gradient: 'linear-gradient(135deg, #0f3460 0%, var(--color-primary-dark) 100%)',
  },
  {
    title: 'Diseños Industriales',
    subtitle: 'Apariencia del producto',
    desc: 'Protege el aspecto estético o la apariencia visual de un producto. La forma, los colores, las líneas o los materiales.',
    examples: ['Empaque especial', 'Forma del producto', 'Diseño de envase', 'Textura única'],
    duration: '15 años',
    registration: 'RNPI - Costa Rica',
    gradient: 'linear-gradient(135deg, var(--color-cyan-600) 0%, var(--color-cyan-500) 100%)',
  },
  {
    title: 'Secretos Empresariales',
    subtitle: 'Información confidencial',
    desc: 'Información comercial o técnica que tiene valor por ser secreta. No se registra, pero se protege mediante confidencialidad.',
    examples: ['Receta de producto', 'Lista de clientes', 'Estrategia comercial', 'Fórmula especial'],
    duration: 'Mientras sea secreto',
    registration: 'Acuerdos de confidencialidad',
    gradient: 'linear-gradient(135deg, #374151 0%, var(--color-gray-800) 100%)',
  },
]

const tableRows = [
  {
    tipo: 'Marca',
    protege: 'Nombre, logo, slogan',
    registro: 'Sí',
    duracion: '10 años renovable',
    ejemplo: 'Tu cafetería "Café del Valle"',
  },
  {
    tipo: 'Patente',
    protege: 'Invenciones técnicas',
    registro: 'Sí',
    duracion: '20 años',
    ejemplo: 'Máquina de café innovadora',
  },
  {
    tipo: 'Diseño Industrial',
    protege: 'Apariencia del producto',
    registro: 'Sí',
    duracion: '15 años',
    ejemplo: 'Forma especial de tu taza',
  },
  {
    tipo: 'Secreto Empresarial',
    protege: 'Info confidencial valiosa',
    registro: 'No',
    duracion: 'Indefinida',
    ejemplo: 'Tu receta secreta de café',
  },
]

const steps = [
  {
    title: 'Búsqueda previa',
    desc: 'Verifica que no exista una marca o patente igual registrada.',
  },
  {
    title: 'Preparar solicitud',
    desc: 'Reúne documentos, descripción y representación gráfica.',
  },
  {
    title: 'Presentar ante RNPI',
    desc: 'Envía tu solicitud al Registro Nacional.',
  },
  {
    title: 'Examen y publicación',
    desc: 'El RNPI revisa y publica en el diario oficial.',
  },
  {
    title: 'Registro otorgado',
    desc: 'Recibes tu certificado de propiedad industrial.',
  },
]
</script>

<style scoped>
/* Main grid */
.pi-main-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.pi-main-card {
  background: white;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  border: 1px solid var(--color-gray-100);
}

.pi-main-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
}

.pi-main-top {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
}

.pi-main-icon-wrap {
  width: 52px;
  height: 52px;
  background: rgba(255,255,255,0.15);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  backdrop-filter: blur(8px);
}

.pi-main-num {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.15rem;
  color: white;
}

.pi-main-header-text h3 {
  font-size: 1.0625rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.1875rem;
}

.pi-main-header-text p {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.7);
}

.pi-main-body {
  padding: 1.5rem;
}

.pi-main-desc {
  font-size: 0.875rem;
  color: var(--color-gray-600);
  line-height: 1.6;
  margin-bottom: 1.125rem;
}

.pi-main-examples {
  margin-bottom: 1.25rem;
}

.pi-example-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-gray-400);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
}

.pi-examples-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.pi-example-chip {
  background: var(--color-gray-50);
  border: 1px solid var(--color-gray-100);
  color: var(--color-gray-600);
  padding: 0.25rem 0.625rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 500;
}

.pi-meta {
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-gray-100);
}

.pi-meta-item {
  flex: 1;
}

.pi-meta-label {
  display: block;
  font-size: 0.7rem;
  color: var(--color-gray-400);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.pi-meta-value {
  font-size: 0.8125rem;
  color: var(--color-gray-700);
  font-weight: 600;
}

/* Table */
.pi-table-wrap {
  background: white;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-gray-100);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  margin-bottom: 2.5rem;
}

.pi-table-header {
  padding: 1.5rem 1.75rem;
  border-bottom: 1px solid var(--color-gray-100);
  background: var(--color-gray-50);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.pi-table-header h3 {
  font-size: 1rem;
  color: var(--color-gray-900);
}

.pi-table-header p {
  font-size: 0.875rem;
  color: var(--color-gray-500);
}

.pi-table-scroll {
  overflow-x: auto;
}

.pi-table {
  width: 100%;
  border-collapse: collapse;
}

.pi-table th {
  padding: 0.875rem 1.25rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-gray-500);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: var(--color-gray-50);
  border-bottom: 1px solid var(--color-gray-100);
}

.pi-table td {
  padding: 0.875rem 1.25rem;
  font-size: 0.875rem;
  color: var(--color-gray-700);
  border-bottom: 1px solid var(--color-gray-100);
}

.pi-table tr:last-child td {
  border-bottom: none;
}

.pi-table tr:hover td {
  background: var(--color-blue-50);
}

.table-badge {
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
}

.badge-yes {
  background: #dcfce7;
  color: #166534;
}

.badge-no {
  background: #fef3c7;
  color: #92400e;
}

/* Process */
.pi-process {
  background: linear-gradient(135deg, var(--color-gray-900), var(--color-blue-900));
  border-radius: var(--radius-xl);
  padding: 2.5rem;
  color: white;
}

.process-title {
  font-size: 1.125rem;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
}

.steps-row {
  display: flex;
  align-items: flex-start;
  gap: 0;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
}

.step-item {
  flex: 1;
  min-width: 140px;
  max-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  position: relative;
  padding: 0 0.5rem;
}

.step-num {
  width: 28px;
  height: 28px;
  background: var(--color-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 800;
  color: white;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.step-item h4 {
  font-size: 0.875rem;
  color: white;
  font-weight: 700;
  margin-top: 1.5rem;
}

.step-item p {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.5;
}

.step-connector {
  position: absolute;
  top: 1.75rem;
  right: -0.75rem;
  font-size: 1.25rem;
  color: var(--color-accent);
  font-weight: 700;
}

@media (max-width: 768px) {
  .pi-main-grid {
    grid-template-columns: 1fr;
  }

  .steps-row {
    gap: 1.5rem;
  }

  .step-connector {
    display: none;
  }
}
</style>
