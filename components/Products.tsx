'use client'
import { useState, useEffect, useRef } from 'react'
import styles from '../styles/Products.module.css'

export default function Products() {
  const [visibleCards, setVisibleCards] = useState([])
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target)
            setVisibleCards(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.2 }
    )

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const products = [
    {
      icon: '🏗️',
      title: 'LONIL',
      description: 'Lona resistente e durável, ideal para aplicações industriais e comerciais que exigem máxima proteção.',
      features: [
        'Alta resistência à tração',
        'Proteção UV avançada',
        'Impermeável 100%',
        'Acabamento profissional',
        'Medidas personalizadas'
      ]
    },
    {
      icon: '🏠',
      title: 'Lona Leve',
      description: 'Solução econômica e versátil para coberturas temporárias, proteções e uso residencial.',
      features: [
        'Leveza e praticidade',
        'Fácil instalação',
        'Resistente a intempéries',
        'Várias cores disponíveis',
        'Custo-benefício excelente'
      ]
    }
  ]

  return (
    <section id="products" className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Nossos Produtos <span className={styles.plus}>+</span>
        </h2>
        
        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`${styles.productCard} ${visibleCards.includes(index) ? styles.visible : ''}`}
            >
              <div className={styles.productIcon}>{product.icon}</div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <ul className={styles.productFeatures}>
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className={styles.productButton}>
                Saiba Mais +
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}