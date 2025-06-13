'use client'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>
              Lona <span className={styles.plus}>+</span>
            </h3>
            <p>Qualidade e tradição em lonas sob medida para toda a região.</p>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Produtos</h3>
            <p>LONIL • Lona Leve • Sob Medida</p>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Contato</h3>
            <p>
              WhatsApp: (11) 99999-9999<br />
              R. do Livramento, 540 - Centro<br />
              Ananindeua - PA
            </p>
          </div>
        </div>
        
        <hr className={styles.divider} />
        <p className={styles.copyright}>
          &copy; 2025 Lona +. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}