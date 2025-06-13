'use client'
import { useState, useEffect, useRef } from 'react'
import styles from '../styles/Features.module.css'

export default function Features() {
  const [visibleItems, setVisibleItems] = useState([])
  const itemsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemsRef.current.indexOf(entry.target)
            setVisibleItems(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.3 }
    )

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: '🏆',
      title: 'Alta Qualidade',
      description: 'Produtos premium com a melhor qualidade do mercado'
    },
    {
      icon: '📏',
      title: 'Sob Medida',
      description: 'Fabricamos nas dimensões exatas que você precisa'
    },
    {
      icon: '🚚',
      title: 'Entrega Rápida',
      description: 'Prazos de entrega otimizados para toda a região'
    },
    {
      icon: '💪',
      title: 'Durabilidade +',
      description: 'Materiais de alta qualidade garantem longa vida útil'
    }
  ]

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Por que escolher a Lona <span className={styles.plus}>+</span>?
        </h2>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => itemsRef.current[index] = el}
              className={`${styles.featureItem} ${visibleItems.includes(index) ? styles.visible : ''}`}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}