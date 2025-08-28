import * as React from 'react'

export function useScrollPosition() {
  const [currentSection, setCurrentSection] = React.useState<string>('home')

  // Сохраняем текущую секцию в localStorage
  const saveSection = React.useCallback((sectionId: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('landing-section', sectionId)
      setCurrentSection(sectionId)
    }
  }, [])

  // Восстанавливаем позицию при загрузке страницы
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedSection = localStorage.getItem('landing-section')
      if (savedSection) {
        setCurrentSection(savedSection)
        // Плавно скроллим к сохраненной секции
        setTimeout(() => {
          const element = document.getElementById(savedSection)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }
  }, [])

  // Отслеживаем скролл и обновляем активную секцию
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'pricing', 'faq']
      let current = 'home'
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = sectionId
            break
          }
        }
      }
      
      if (current !== currentSection) {
        saveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentSection, saveSection])

  return { currentSection, saveSection }
} 