<template>
  <section class="section section-alt" id="equipo">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title fade-up">Facilitadores del Taller</h2>
        <p class="section-subtitle fade-up">
          Este espacio es desarrollado por estudiantes de la Universidad de Costa Rica como parte de su Trabajo Comunal Universitario (TCU).
        </p>
      </div>

      <div class="team-simple-grid fade-up">
        <div class="team-simple-card">
          <div class="team-card-indicator"></div>
          <h3 class="member-name">[Alexander Umaña Guevara ]</h3>
        </div>
        <div class="team-simple-card">
          <div class="team-card-indicator"></div>
          <h3 class="member-name">[Dariel Josué Benavides Tapia]</h3>
        </div>
        <div class="team-simple-card">
          <div class="team-card-indicator indicator-green"></div>
          <h3 class="member-name">[Sofía Esquivel López ]</h3>
        </div>
        <div class="team-simple-card">
          <div class="team-card-indicator indicator-blue"></div>
          <h3 class="member-name">[Jehudy Rivas López]</h3>
        </div>
        
        <div class="team-simple-card">
          <div class="team-card-indicator indicator-purple"></div>
          <h3 class="member-name">[Valeria González Ojeda]</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Simplified text-only Team section
</script>

<style scoped>
.text-center {
  text-align: center;
}

.team-simple-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-8);
}

.team-simple-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-gray-100);
  padding: var(--space-6) var(--space-5);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.team-simple-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-blue-100);
}

.team-card-indicator {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--color-primary);
}

.indicator-blue {
  background: var(--color-blue-400);
}

.indicator-green {
  background: #10b981;
}

.indicator-purple {
  background: #8b5cf6;
}

.member-name {
  font-size: 1.0625rem;
  color: var(--color-gray-900);
  margin-bottom: var(--space-1);
  font-weight: 700;
}

.member-role {
  font-size: 0.8125rem;
  color: var(--color-gray-500);
  font-weight: 500;
}

@media (max-width: 1024px) {
  .team-simple-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .team-simple-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}
</style>
