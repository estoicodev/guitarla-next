import Navigation from "@components/Navigation"
import styles from "@styles/footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <Navigation />
        <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>  )
}

export default Footer
