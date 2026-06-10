<template>
  <section class="section" id="ejemplos-emprendedores">
    <div class="container">
      <!-- Section header -->
      <div class="section-header">
        <div class="section-badge fade-in">
          <span>Casos de Estudio</span>
        </div>
        <h2 class="section-title fade-up">
          La PI en <span>negocios cotidianos</span>
        </h2>
        <p class="section-subtitle fade-up">
          Mira cómo se aplica la propiedad intelectual y qué activos específicos existen en diferentes tipos de emprendimientos.
        </p>
      </div>

      <div class="ejemplos-layout">
        <!-- Sidebar Navigation -->
        <div class="ejemplos-tabs fade-up">
          <button
            v-for="item in businessTypes"
            :key="item.id"
            class="tab-btn"
            :class="{ active: activeTab === item.id }"
            @click="activeTab = item.id"
          >
            <span class="tab-label">{{ item.title }}</span>
          </button>
        </div>

        <!-- Detail Card -->
        <div class="ejemplos-content-card fade-up" v-if="activeBusiness">
          <div class="card-header-gradient" :style="{ background: activeBusiness.gradient }">
            <div class="business-meta">
              <h3>{{ activeBusiness.title }}</h3>
              <p>{{ activeBusiness.subtitle }}</p>
            </div>
          </div>
          <div class="card-body">
            <h4 class="body-title">Activos claves del negocio:</h4>
            <div class="assets-grid">
              <div v-for="(asset, idx) in activeBusiness.assets" :key="asset.name" class="asset-item">
                <span class="asset-num">0{{ idx + 1 }}</span>
                <div>
                  <strong>{{ asset.name }}</strong>
                  <span class="asset-badge" :style="{ background: asset.badgeBg, color: asset.badgeColor }">
                    {{ asset.type }}
                  </span>
                  <p class="asset-desc">{{ asset.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('panaderia')

const businessTypes = [
  {
    id: 'panaderia',
    title: 'Panaderías',
    subtitle: 'Protección de recetas y marca local',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    assets: [
      { name: 'Nombre y Logotipo', type: 'Marca', desc: 'Evita que otras panaderías en la zona usen el mismo nombre.', badgeBg: '#dbeafe', badgeColor: '#1e40af' },
      { name: 'Receta del pan especial', type: 'Secreto Empresarial', desc: 'Información confidencial sobre ingredientes y tiempos de fermentación.', badgeBg: '#fee2e2', badgeColor: '#991b1b' },
      { name: 'Fotografías del menú', type: 'Derecho de Autor', desc: 'Fotos originales en redes sociales y catálogos.', badgeBg: '#ede9fe', badgeColor: '#5b21b6' }
    ]
  },
  {
    id: 'restaurante',
    title: 'Restaurantes',
    subtitle: 'Sabor, marca y experiencia única',
    gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
    assets: [
      { name: 'Slogan y Menú', type: 'Marca + Autor', desc: 'El diseño artístico de la carta y frases publicitarias representativas.', badgeBg: '#eef2ff', badgeColor: '#6366f1' },
      { name: 'Salsa o aderezo secreto', type: 'Secreto Empresarial', desc: 'Fórmula de sabor única que caracteriza a tus platillos.', badgeBg: '#fee2e2', badgeColor: '#991b1b' },
      { name: 'Decoración del local', type: 'Diseño Comercial', desc: 'Identidad visual exclusiva y distribución del espacio.', badgeBg: '#fef3c7', badgeColor: '#92400e' }
    ]
  },
  {
    id: 'digital',
    title: 'Negocios Digitales',
    subtitle: 'Software, blogs y plataformas',
    gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    assets: [
      { name: 'Software o App', type: 'Derecho de Autor', desc: 'El código fuente y diseño de interfaz de usuario de tu plataforma.', badgeBg: '#ede9fe', badgeColor: '#5b21b6' },
      { name: 'Cursos y Ebooks', type: 'Derecho de Autor', desc: 'El contenido educativo y material audiovisual que vendes.', badgeBg: '#ede9fe', badgeColor: '#5b21b6' },
      { name: 'Dominio Web', type: 'Activo Digital', desc: 'Tu dirección en internet registrada vinculada a tu marca.', badgeBg: '#ecfdf5', badgeColor: '#065f46' }
    ]
  },
  {
    id: 'artesano',
    title: 'Artesanos',
    subtitle: 'Diseño estético y obras únicas',
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    assets: [
      { name: 'Forma de la vajilla', type: 'Diseño Industrial', desc: 'Aspecto ornamental exterior tridimensional de tus piezas.', badgeBg: '#ecfeff', badgeColor: '#155e75' },
      { name: 'Ilustraciones y motivos', type: 'Derecho de Autor', desc: 'Patrones estéticos pintados sobre las artesanías.', badgeBg: '#ede9fe', badgeColor: '#5b21b6' },
      { name: 'Nombre del taller', type: 'Marca', desc: 'La firma y sello comercial con el que vendes tus productos.', badgeBg: '#dbeafe', badgeColor: '#1e40af' }
    ]
  },
  {
    id: 'rural',
    title: 'Rurales',
    subtitle: 'Turismo ecológico y productos agrícolas',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    assets: [
      { name: 'Café de especialidad', type: 'Denominación de Origen', desc: 'Protección geográfica por el suelo y clima especial de cultivo.', badgeBg: '#ecfdf5', badgeColor: '#065f46' },
      { name: 'Tour de aventura', type: 'Marca de Servicio', desc: 'El nombre específico y branding de tus actividades guiadas.', badgeBg: '#dbeafe', badgeColor: '#1e40af' },
      { name: 'Manuales ecológicos', type: 'Derecho de Autor', desc: 'Guías explicativas sobre naturaleza o sostenibilidad propias.', badgeBg: '#ede9fe', badgeColor: '#5b21b6' }
    ]
  }
]

const activeBusiness = computed(() => businessTypes.find(b => b.id === activeTab.value))
</script>

<style scoped>
.ejemplos-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: var(--space-8);
  align-items: start;
}

/* Sidebar Tabs */
.ejemplos-tabs {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5);
  border: 1px solid var(--color-gray-100);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  cursor: pointer;
  text-align: left;
  transition: all var(--transition-fast);
}

.tab-btn:hover {
  background: var(--color-blue-50);
  border-color: var(--color-blue-100);
  transform: translateX(4px);
}

.tab-btn.active {
  background: var(--color-primary-light);
  border-color: var(--color-primary);
  color: var(--color-white);
  box-shadow: var(--shadow-sm);
}

.tab-btn.active .tab-label {
  color: var(--color-white);
}

.tab-emoji {
  font-size: 1.25rem;
}

.tab-label {
  font-family: var(--font-heading);
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-gray-700);
}

/* Content Card */
.ejemplos-content-card {
  background: var(--color-white);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-gray-100);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.card-header-gradient {
  padding: var(--space-8);
  color: var(--color-white);
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.business-emoji {
  font-size: 3rem;
  background: rgba(255,255,255,0.2);
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  backdrop-filter: blur(8px);
}

.business-meta h3 {
  font-size: 1.5rem;
  margin-bottom: var(--space-1);
  color: var(--color-white);
}

.business-meta p {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.85);
}

.card-body {
  padding: var(--space-8);
}

.body-title {
  font-size: 1rem;
  margin-bottom: var(--space-6);
  color: var(--color-gray-800);
}

.assets-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

.asset-item {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
}

.asset-num {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 0.95rem;
  color: var(--color-primary-dark);
  width: 36px;
  height: 36px;
  background: var(--color-gray-50);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.asset-item strong {
  font-size: 0.9375rem;
  color: var(--color-gray-900);
  display: inline-block;
  margin-right: var(--space-2);
}

.asset-badge {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-block;
  vertical-align: middle;
}

.asset-desc {
  font-size: 0.8125rem;
  color: var(--color-gray-500);
  margin-top: var(--space-1);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .ejemplos-layout {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .ejemplos-tabs {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .tab-btn {
    flex: 1;
    min-width: 130px;
    justify-content: center;
  }
}
</style>
