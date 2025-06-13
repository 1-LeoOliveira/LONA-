'use client'
import styles from '../styles/Map.module.css'

export default function Map() {
  const handleDirectionsClick = () => {
    window.open('https://maps.app.goo.gl/jJUfwkK8DZY9EYrS7', '_blank')
  }

  return (
    <section className={styles.mapSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Nossa Localização <span className={styles.plus}>+</span>
        </h2>
        
        <div className={styles.mapContent}>
          <div className={styles.mapInfo}>
            <div className={styles.addressCard}>
              <h3>📍 Visite nossa loja</h3>
              <p className={styles.address}>
                <strong>R. do Livramento, 540 - Centro</strong><br/>
                Ananindeua - PA, CEP 67030-130
              </p>
              
              <div className={styles.scheduleInfo}>
                <span className={styles.scheduleIcon}>🕒</span>
                <div>
                  <strong>Horário de Funcionamento</strong>
                  <p>Seg a Sex: 8h às 18h • Sáb: 8h às 12h</p>
                </div>
              </div>
              
              <button onClick={handleDirectionsClick} className={styles.directionsBtn}>
                🗺️ Como Chegar
              </button>
            </div>
          </div>
          
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6234567890123!2d-48.37123456789!3d-1.36789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48123456789ab%3A0x123456789abcdef0!2sR.%20do%20Livramento%2C%20540%20-%20Centro%2C%20Ananindeua%20-%20PA%2C%2067030-130!5e0!3m2!1spt-BR!2sbr!4v1703123456789!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Lona + - Ananindeua, PA"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}