<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container navbar-inner">
      <!-- Logos -->
      <div class="navbar-logos">
        <div class="logo-pill">
          <img src="../assets/ucr-logo.png" alt="UCR" class="logo-img" />
        </div>
        <div class="logo-divider"></div>
        <div class="logo-pill">
          <img src="../assets/tcu-logo.jpg" alt="TCU" class="logo-img" />
        </div>
      </div>

      <!-- Nav links -->
      <nav class="navbar-nav" :class="{ open: mobileOpen }">
        <a href="#propiedad-intelectual" class="nav-link" @click="mobileOpen = false">¿Qué es?</a>
        <a href="#derechos-autor" class="nav-link" @click="mobileOpen = false">D. de Autor</a>
        <a href="#propiedad-industrial" class="nav-link" @click="mobileOpen = false">P. Industrial</a>
        <a href="#importancia" class="nav-link" @click="mobileOpen = false">Importancia</a>
        <a href="#riesgos" class="nav-link" @click="mobileOpen = false">Riesgos</a>
        <a href="#practicas" class="nav-link" @click="mobileOpen = false">Prácticas</a>
        <a href="#ejemplos-emprendedores" class="nav-link" @click="mobileOpen = false">Ejemplos</a>
        <a href="#equipo" class="nav-link" @click="mobileOpen = false">Equipo</a>
      </nav>

      <!-- Mobile toggle -->
      <button class="burger" @click="mobileOpen = !mobileOpen" aria-label="Menú">
        <span :class="{ open: mobileOpen }"></span>
        <span :class="{ open: mobileOpen }"></span>
        <span :class="{ open: mobileOpen }"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-navbar);
  padding: 0.75rem 0;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.90);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 rgba(0,0,0,0.05), 0 4px 20px rgba(0, 0, 0, 0.03);
}

.navbar.scrolled {
  padding: 0.5rem 0;
  background: rgba(255, 255, 255, 0.98);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

/* Logos */
.navbar-logos {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.logo-pill {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-img {
  height: 36px;
  width: auto;
  object-fit: contain;
}

.logo-fallback {
  display: none;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 0.75rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  color: white;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  border-radius: var(--radius-md);
}

.logo-fallback-tcu {
  background: linear-gradient(135deg, #0f3460, #16213e);
}

.logo-divider {
  width: 1px;
  height: 28px;
  background: rgba(29, 78, 216, 0.2);
}

/* Nav links */
.navbar-nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  padding: 0.5rem 0.875rem;
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-gray-600);
  text-decoration: none;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.nav-link:hover {
  background: var(--color-blue-50);
  color: var(--color-primary);
}

/* Burger */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-md);
}

.burger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.burger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger span.open:nth-child(2) { opacity: 0; transform: scaleX(0); }
.burger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 1024px) {
  .navbar-nav {
    display: none;
  }
}

@media (max-width: 768px) {
  .burger {
    display: flex;
  }

  .navbar-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(255,255,255,0.98);
    backdrop-filter: blur(20px);
    padding: 1rem;
    gap: 0.25rem;
    box-shadow: 0 10px 40px rgba(0,0,0,0.12);
    transform: translateY(-120%);
    opacity: 0;
    transition: all 0.3s ease;
  }

  .navbar-nav.open {
    transform: translateY(0);
    opacity: 1;
  }

  .nav-link {
    color: var(--color-gray-700) !important;
    width: 100%;
    text-align: center;
    padding: 0.75rem 1rem;
  }
}
</style>
