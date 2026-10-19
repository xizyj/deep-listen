import { useEffect } from 'react'

interface UseIntersectionFadeInOptions {
  selector?: string
  visibleClass?: string
  threshold?: number
  deps?: unknown[]
}

export function useIntersectionFadeIn({
  selector = '.fade-in-section',
  visibleClass = 'fade-in',
  threshold = 0.1,
  deps = [],
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector, visibleClass, threshold, ...deps])
}
