import React from 'react'
import { Link } from 'gatsby'
import Container from './container'
const styles = require('./header.module.scss')

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/another-page">Another Page</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
