<template>
  <section class="section section-alt" id="interactivo">
    <div class="container">
      <div class="section-header">
        <div class="section-badge fade-in" style="background: linear-gradient(135deg, #f5f3ff, #ede9fe); color: #5b21b6; border-color: #ddd6fe;">
          <span>⚡</span>
          <span>Dinámica Interactiva</span>
        </div>
        <h2 class="section-title fade-up">
          ¿Qué puede <span>proteger tu negocio</span>?
        </h2>
        <p class="section-subtitle fade-up">
          Selecciona los elementos que forman parte de tu emprendimiento y descubre qué activos intelectuales ya tienes.
        </p>
      </div>

      <div class="interactive-layout">
        <!-- Selection area -->
        <div class="selection-area fade-up">
          <div class="selection-header">
            <h3>Selecciona los activos de tu negocio:</h3>
            <span class="selected-count">{{ selectedItems.length }} seleccionado{{ selectedItems.length !== 1 ? 's' : '' }}</span>
          </div>

          <div class="options-grid">
            <button
              v-for="option in options"
              :key="option.id"
              class="option-btn"
              :class="{ selected: selectedItems.includes(option.id) }"
              @click="toggleOption(option.id)"
            >
              <span class="option-emoji">{{ option.icon }}</span>
              <span class="option-label">{{ option.label }}</span>
              <div class="option-check">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </button>
          </div>

          <!-- Action buttons -->
          <div class="interaction-actions">
            <button class="btn-analyze" @click="analyze" :disabled="selectedItems.length === 0">
              <span>🔍</span>
              <span>Analizar mis activos</span>
            </button>
            <button class="btn-reset" @click="reset" v-if="selectedItems.length > 0">
              Limpiar selección
            </button>
          </div>
        </div>

        <!-- Results panel -->
        <div class="results-panel fade-up">
          <!-- Default state -->
          <div v-if="!analyzed" class="results-empty">
            <div class="results-empty-icon">🎯</div>
            <h3>Selecciona tus activos</h3>
            <p>Elige al menos un elemento de tu negocio para ver qué tipo de protección intelectual aplica para ti.</p>
          </div>

          <!-- Results state -->
          <div v-else class="results-content">
            <div class="results-celebration">
              <span class="celebration-emoji">🎉</span>
              <div>
                <h3>¡Tu negocio tiene activos intelectuales valiosos!</h3>
                <p>Identificamos <strong>{{ selectedItems.length }}</strong> elemento{{ selectedItems.length !== 1 ? 's' : '' }} con protección aplicable.</p>
              </div>
            </div>

            <div class="results-protections">
              <h4>Tipo de protección que aplica:</h4>
              <div class="protection-list">
                <div
                  v-for="prot in applicableProtections"
                  :key="prot.type"
                  class="protection-item"
                  :style="{ borderColor: prot.color, background: prot.bg }"
                >
                  <span class="prot-icon">{{ prot.icon }}</span>
                  <div>
                    <strong>{{ prot.type }}</strong>
                    <p>{{ prot.items.join(', ') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="results-next">
              <h4>🚀 Próximo paso recomendado:</h4>
              <p>{{ nextStep }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const options = [
  { id: 'logo', icon: '🏷️', label: 'Logo', protection: 'marca', type: 'Marca + Derecho de Autor' },
  { id: 'nombre', icon: '📛', label: 'Nombre del negocio', protection: 'marca', type: 'Marca Comercial' },
  { id: 'fotos', icon: '📸', label: 'Fotografías propias', protection: 'autor', type: 'Derecho de Autor' },
  { id: 'recetas', icon: '🍽️', label: 'Recetas / Fórmulas', protection: 'secreto', type: 'Secreto Empresarial' },
  { id: 'redes', icon: '📱', label: 'Contenido de redes', protection: 'autor', type: 'Derecho de Autor' },
  { id: 'disenos', icon: '🎨', label: 'Diseños gráficos', protection: 'autor', type: 'Derecho de Autor' },
  { id: 'empaques', icon: '📦', label: 'Empaques especiales', protection: 'industrial', type: 'Diseño Industrial' },
  { id: 'slogan', icon: '💬', label: 'Slogan', protection: 'marca', type: 'Marca Comercial' },
  { id: 'proceso', icon: '⚙️', label: 'Proceso innovador', protection: 'patente', type: 'Patente' },
  { id: 'software', icon: '💻', label: 'Software propio', protection: 'autor', type: 'Derecho de Autor' },
  { id: 'musica', icon: '🎵', label: 'Música / Jingles', protection: 'autor', type: 'Derecho de Autor' },
  { id: 'videos', icon: '🎥', label: 'Videos promocionales', protection: 'autor', type: 'Derecho de Autor' },
]

const selectedItems = ref([])
const analyzed = ref(false)

function toggleOption(id) {
  const idx = selectedItems.value.indexOf(id)
  if (idx === -1) {
    selectedItems.value.push(id)
  } else {
    selectedItems.value.splice(idx, 1)
  }
  if (analyzed.value) {
    analyzed.value = false
  }
}

function analyze() {
  if (selectedItems.value.length > 0) {
    analyzed.value = true
  }
}

function reset() {
  selectedItems.value = []
  analyzed.value = false
}

const applicableProtections = computed(() => {
  const selected = options.filter(o => selectedItems.value.includes(o.id))
  const groups = {}
  selected.forEach(o => {
    if (!groups[o.type]) {
      groups[o.type] = { type: o.type, items: [], icon: '', color: '', bg: '' }
    }
    groups[o.type].items.push(o.label)
  })

  const colorMap = {
    'Derecho de Autor': { icon: '©️', color: '#3b82f6', bg: '#eff6ff' },
    'Marca Comercial': { icon: '🏷️', color: '#8b5cf6', bg: '#f5f3ff' },
    'Marca + Derecho de Autor': { icon: '🔒', color: '#6366f1', bg: '#eef2ff' },
    'Secreto Empresarial': { icon: '🔐', color: '#ef4444', bg: '#fef2f2' },
    'Diseño Industrial': { icon: '📦', color: '#06b6d4', bg: '#ecfeff' },
    'Patente': { icon: '🔧', color: '#10b981', bg: '#ecfdf5' },
  }

  return Object.values(groups).map(g => ({
    ...g,
    ...(colorMap[g.type] || { icon: '📋', color: '#64748b', bg: '#f8fafc' }),
  }))
})

const nextStep = computed(() => {
  const hasMarca = selectedItems.value.some(id => ['logo', 'nombre', 'slogan'].includes(id))
  const hasPatente = selectedItems.value.includes('proceso')
  const hasIndustrial = selectedItems.value.includes('empaques')

  if (hasPatente) return 'Tu proceso innovador puede calificar para una patente. Consulta con un abogado de PI antes de publicarlo.'
  if (hasMarca) return 'Inicia el registro de tu marca en el RNPI de Costa Rica. El trámite puede hacerse en línea en registronacional.go.cr'
  if (hasIndustrial) return 'Registra tu diseño de empaque como Diseño Industrial en el Registro Nacional.'
  return 'Documenta las fechas de creación de tu contenido. El derecho de autor nace automáticamente con la obra.'
})
</script>

<style scoped>
.interactive-layout {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 1.5rem;
  align-items: start;
}

/* Selection area */
.selection-area {
  background: white;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-gray-100);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.selection-header {
  padding: 1.5rem 1.75rem;
  background: var(--color-gray-50);
  border-bottom: 1px solid var(--color-gray-100);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.selection-header h3 {
  font-size: 0.9375rem;
  color: var(--color-gray-900);
}

.selected-count {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: white;
  padding: 0.25rem 0.875rem;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 700;
}

.options-grid {
  padding: 1.25rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.option-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.125rem 0.75rem;
  border-radius: var(--radius-lg);
  border: 2px solid var(--color-gray-100);
  background: var(--color-gray-50);
  cursor: pointer;
  transition: all var(--transition-base);
  position: relative;
  text-align: center;
}

.option-btn:hover {
  border-color: var(--color-blue-300);
  background: var(--color-blue-50);
  transform: translateY(-2px);
}

.option-btn.selected {
  border-color: var(--color-primary);
  background: linear-gradient(135deg, var(--color-blue-50), #ecfeff);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.option-emoji {
  font-size: 1.75rem;
  line-height: 1;
}

.option-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-gray-700);
  line-height: 1.3;
}

.option-check {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transform: scale(0);
  transition: all var(--transition-base);
}

.option-btn.selected .option-check {
  opacity: 1;
  transform: scale(1);
}

.interaction-actions {
  padding: 1.25rem 1.25rem 1.5rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  border-top: 1px solid var(--color-gray-100);
}

.btn-analyze {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-blue-500));
  color: white;
  border: none;
  border-radius: var(--radius-full);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-blue);
}

.btn-analyze:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-blue-lg);
}

.btn-analyze:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-reset {
  background: none;
  border: 1px solid var(--color-gray-200);
  color: var(--color-gray-500);
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-reset:hover {
  border-color: var(--color-gray-300);
  color: var(--color-gray-700);
}

/* Results panel */
.results-panel {
  background: white;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-gray-100);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  min-height: 400px;
  display: flex;
  flex-direction: column;
}

.results-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  text-align: center;
  gap: 0.875rem;
}

.results-empty-icon {
  font-size: 3.5rem;
  opacity: 0.4;
}

.results-empty h3 {
  font-size: 1.0625rem;
  color: var(--color-gray-700);
}

.results-empty p {
  font-size: 0.875rem;
  color: var(--color-gray-400);
  line-height: 1.6;
}

.results-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.4s ease;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

.results-celebration {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: white;
}

.celebration-emoji {
  font-size: 1.75rem;
  flex-shrink: 0;
  animation: celebrate 0.6s ease;
}

@keyframes celebrate {
  0% { transform: scale(0) rotate(-180deg); }
  70% { transform: scale(1.2) rotate(10deg); }
  100% { transform: scale(1) rotate(0); }
}

.results-celebration h3 {
  font-size: 0.9375rem;
  color: white;
  margin-bottom: 0.25rem;
  line-height: 1.3;
}

.results-celebration p {
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.85);
}

.results-protections {
  padding: 1.25rem 1.5rem;
  flex: 1;
  border-bottom: 1px solid var(--color-gray-100);
}

.results-protections h4 {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--color-gray-700);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.875rem;
}

.protection-list {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.protection-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: var(--radius-lg);
  border: 1px solid;
  transition: all var(--transition-fast);
}

.prot-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.protection-item strong {
  display: block;
  font-size: 0.8125rem;
  color: var(--color-gray-900);
  margin-bottom: 0.125rem;
}

.protection-item p {
  font-size: 0.75rem;
  color: var(--color-gray-500);
  margin: 0;
  line-height: 1.4;
}

.results-next {
  padding: 1.25rem 1.5rem;
  background: var(--color-gray-50);
}

.results-next h4 {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--color-gray-700);
  margin-bottom: 0.375rem;
}

.results-next p {
  font-size: 0.8125rem;
  color: var(--color-gray-600);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .interactive-layout {
    grid-template-columns: 1fr;
  }

  .options-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .options-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .options-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
