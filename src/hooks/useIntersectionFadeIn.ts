import { useEffect } from 'react'

interface UseIntersectionFadeInOptions {
  selector?: string
  visibleClass?: string
  threshold?: number
}

export function useIntersectionFadeIn({
  selector = '.fade-in-section',
  visibleClass = 'fade-in',
  threshold = 0.1,
}: UseIntersectionFadeInOptions = {}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold },
    )

    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [selector, visibleClass, threshold])
}
