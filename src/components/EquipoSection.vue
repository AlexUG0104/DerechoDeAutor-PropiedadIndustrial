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
          <h3 class="member-name">Alexander Umaña Guevara</h3>
          <span class="member-role">Facilitador TCU</span>
        </div>
        <div class="team-simple-card">
          <div class="team-card-indicator"></div>
          <h3 class="member-name">Dariel Josué Benavides Tapia</h3>
          <span class="member-role">Facilitador TCU</span>
        </div>
        <div class="team-simple-card">
          <div class="team-card-indicator indicator-green"></div>
          <h3 class="member-name">Sofía Esquivel López</h3>
          <span class="member-role">Facilitadora TCU</span>
        </div>
        <div class="team-simple-card">
          <div class="team-card-indicator indicator-blue"></div>
          <h3 class="member-name">Jehudy Rivas López</h3>
          <span class="member-role">Facilitador TCU</span>
        </div>
        
        <div class="team-simple-card">
          <div class="team-card-indicator indicator-purple"></div>
          <h3 class="member-name">Valeria González Ojeda</h3>
          <span class="member-role">Facilitadora TCU</span>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-6);
  margin-top: var(--space-8);
}

.team-simple-card {
  flex: 1 1 calc(20% - var(--space-6));
  min-width: 220px;
  max-width: 280px;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-gray-100);
  padding: var(--space-8) var(--space-5) var(--space-6);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-bottom: var(--space-2);
  font-weight: 700;
  line-height: 1.3;
}

.member-role {
  font-size: 0.8125rem;
  color: var(--color-gray-500);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (max-width: 1024px) {
  .team-simple-card {
    flex: 1 1 calc(33.333% - var(--space-6));
  }
}

@media (max-width: 768px) {
  .team-simple-card {
    flex: 1 1 calc(50% - var(--space-6));
  }
}

@media (max-width: 480px) {
  .team-simple-card {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
