'use client'
import { useState, useEffect } from 'react'
import styles from '../styles/Header.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🇧🇷</span> 
          <span className={styles.logoText}>Lona <span className={styles.plus}>+</span></span>
        </div>
        
        <button 
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navOpen : ''}`}>
          <li><button onClick={() => scrollToSection('home')}>Início</button></li>
          <li><button onClick={() => scrollToSection('products')}>Produtos</button></li>
          <li><button onClick={() => scrollToSection('features')}>Vantagens</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contato</button></li>
        </ul>
      </nav>
    </header>
  )
}