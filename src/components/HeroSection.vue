<template>
  <section class="hero" id="inicio">
    <!-- Animated background -->
    <div class="hero-bg">
      <div class="hero-bg-image"></div>
      <div class="hero-overlay"></div>
      <!-- Floating orbs -->
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
      <!-- Grid pattern -->
      <div class="hero-grid"></div>
    </div>

    <!-- Content -->
    <div class="container hero-content">
      <!-- Logo bar -->
      <div class="hero-logos fade-in">
        <div class="hero-logo-card">
          <img src="../assets/ucr-logo.png" alt="Universidad de Costa Rica" />
        </div>
        <div class="hero-logo-divider"></div>
        <div class="hero-logo-card">
          <img src="../assets/tcu-logo.jpg" alt="TCU" />
        </div>

      </div>

      <!-- Workshop tag -->
      <div class="workshop-tag fade-up">
        <span class="tag-dot"></span>
        <span>Taller Virtual · Zoom · 2026</span>
      </div>

      <!-- Main heading -->
      <h1 class="hero-title fade-up">
        Derechos de Autor y<br />
        <span class="hero-title-gradient">Propiedad Industrial</span>
      </h1>

      <!-- Subtitle -->
      <p class="hero-subtitle fade-up">
        Protegiendo la creatividad y el valor de los emprendimientos
      </p>

      <!-- CTA Buttons -->
      <div class="hero-actions fade-up">
        <a href="#propiedad-intelectual" class="btn btn-primary hero-btn-primary">
          <span>Explorar contenido</span>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </a>
      </div>

      <!-- Stats bar -->
      <div class="hero-stats fade-up">
        <div class="stat-item">
          <span class="stat-number">6</span>
          <span class="stat-label">Módulos</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">4</span>
          <span class="stat-label">Expertos</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">100%</span>
          <span class="stat-label">Virtual</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">UCR</span>
          <span class="stat-label">Certificado</span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <span class="scroll-text">Desliza para explorar</span>
      <div class="scroll-arrow">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for hero
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 7rem 0 8.5rem;
}

/* Background */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg-image {
  position: absolute;
  inset: 0;
  background: url('../assets/hero-bg.png') center/cover no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(15, 23, 42, 0.88) 0%,
    rgba(29, 78, 216, 0.75) 50%,
    rgba(6, 182, 212, 0.60) 100%
  );
}

/* Grid pattern */
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 64px 64px;
}

/* Floating orbs */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: float 8s ease-in-out infinite;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, transparent 70%);
  top: -15%;
  right: -10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%);
  bottom: -10%;
  left: -5%;
  animation-delay: -3s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(29, 78, 216, 0.3) 0%, transparent 70%);
  top: 40%;
  left: 50%;
  animation-delay: -6s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(20px, -20px) scale(1.05); }
  66% { transform: translate(-10px, 15px) scale(0.95); }
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.75rem;
}

/* Logo bar */
.hero-logos {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: var(--radius-2xl);
  padding: 0.75rem 2rem;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.hero-logo-card {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  background: white;
  padding: 4px 10px;
  border-radius: var(--radius-lg);
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.hero-logo-card img {
  height: 64px;
  width: auto;
  opacity: 1;
}

.fallback {
  display: none;
}

.logo-text-block {
  flex-direction: column;
  align-items: flex-start;
}

.logo-abbr {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 800;
  color: white;
  line-height: 1;
  letter-spacing: 0.05em;
}

.logo-full {
  font-size: 0.625rem;
  color: rgba(255,255,255,0.7);
  font-weight: 400;
  white-space: nowrap;
}

.hero-logo-divider {
  width: 1px;
  height: 48px;
  background: rgba(0, 0, 0, 0.15);
}

.logo-placeholder {
  flex-direction: column;
  gap: 0.25rem;
  opacity: 0.7;
}

.placeholder-icon {
  font-size: 1.5rem;
}

.placeholder-text {
  font-size: 0.6rem;
  color: var(--color-gray-600);
  text-align: center;
  max-width: 80px;
}

/* Workshop tag */
.workshop-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(6, 182, 212, 0.15);
  border: 1px solid rgba(6, 182, 212, 0.35);
  color: var(--color-cyan-400);
  padding: 0.375rem 1rem;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.tag-dot {
  width: 6px;
  height: 6px;
  background: var(--color-cyan-400);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

/* Hero title */
.hero-title {
  font-size: clamp(2.25rem, 6vw, 4.5rem);
  font-weight: 800;
  color: white;
  line-height: 1.1;
  letter-spacing: -0.03em;
  max-width: 900px;
}

.hero-title-gradient {
  background: linear-gradient(135deg, #60a5fa, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

/* Hero subtitle */
.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.375rem);
  color: rgba(255,255,255,0.8);
  max-width: 600px;
  font-weight: 400;
  line-height: 1.65;
}

/* Actions */
.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-btn-primary {
  background: linear-gradient(135deg, var(--color-primary), #60a5fa);
  color: white;
  font-size: 1.0625rem;
  padding: 0.9rem 2rem;
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.45);
}

.hero-btn-primary:hover {
  box-shadow: 0 12px 48px rgba(59, 130, 246, 0.6);
  transform: translateY(-3px);
}

.btn-icon {
  font-size: 1rem;
}

/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 0;
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--radius-2xl);
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  line-height: 1;
}

.stat-label {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.55);
  font-weight: 500;
  margin-top: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.stat-divider {
  width: 1px;
  height: 36px;
  background: rgba(255,255,255,0.15);
  flex-shrink: 0;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-cyan-400);
  text-shadow: 0 2px 4px rgba(0,0,0,0.6);
  animation: bounce 2s ease-in-out infinite;
  z-index: 10;
}

.scroll-text {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.scroll-arrow {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}

@media (max-width: 768px) {
  .hero-logos {
    gap: 1rem;
    padding: 0.75rem 1.25rem;
  }

  .hero-logo-card {
    padding: 3px 8px;
  }

  .hero-logo-card img {
    height: 44px;
  }

  .stat-item { padding: 0 1rem; }

  .hero-stats {
    gap: 0.5rem;
  }

  .scroll-indicator {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1.25rem;
  }

  .stat-divider { display: none; }
  .stat-item { padding: 0; }
}
</style>
