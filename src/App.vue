<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import PropiedadIntelectualSection from './components/PropiedadIntelectualSection.vue'
import DerechosAutorSection from './components/DerechosAutorSection.vue'
import PropiedadIndustrialSection from './components/PropiedadIndustrialSection.vue'
import ImportanciaSection from './components/ImportanciaSection.vue'
import RiesgosSection from './components/RiesgosSection.vue'
import BuenasPracticasSection from './components/BuenasPracticasSection.vue'
import EjemplosSection from './components/EjemplosSection.vue'
import EquipoSection from './components/EquipoSection.vue'
import FooterSection from './components/FooterSection.vue'

import { useScrollAnimation } from './composables/useScrollAnimation'

// Initialize IntersectionObserver scroll animation
useScrollAnimation()
</script>

<template>
  <div class="app-wrapper">
    <!-- Navigation Bar -->
    <NavBar />

    <main>
      <!-- Hero Section -->
      <HeroSection />

      <!-- Section: ¿Qué es la Propiedad Intelectual? -->
      <PropiedadIntelectualSection />

      <!-- Section: Derechos de Autor -->
      <DerechosAutorSection />

      <!-- Section: Propiedad Industrial -->
      <PropiedadIndustrialSection />

      <!-- Section: Importancia de Proteger las Creaciones -->
      <ImportanciaSection />

      <!-- Section: Riesgos -->
      <RiesgosSection />

      <!-- Section: Buenas Prácticas -->
      <BuenasPracticasSection />

      <!-- Section: Ejemplos para Emprendedores -->
      <EjemplosSection />

      <!-- Section: Encargados del Taller -->
      <EquipoSection />
    </main>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<style>
/* Base application layout */
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
