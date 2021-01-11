import React from 'react'
import Container from './container'
const styles = require('./footer.module.scss')

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          Gatsby starter by <a href="https://github.com/jkananen/">@jkananen</a>
        </div>
      </Container>
    </footer>
  )
}
