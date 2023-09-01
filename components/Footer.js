import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src='/logo-netlify.svg' alt='Netlify Logo' className={styles.logo} />
    </footer>
  )
}

export default Footer
