import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger children if data-stagger attribute present
            const children = entry.target.querySelectorAll('[data-animate]')
            if (children.length > 0) {
              children.forEach((child, i) => {
                setTimeout(() => {
                  child.classList.add('visible')
                }, i * 100)
              })
            } else {
              entry.target.classList.add('visible')
            }
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    // Observe all animatable elements
    document.querySelectorAll('.fade-up, .fade-in').forEach((el) => {
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { observer }
}
