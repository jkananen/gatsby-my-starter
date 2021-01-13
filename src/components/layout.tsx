import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import 'normalize.css'
import '../styles/main.scss'
import Container from './container'
import Header from './header'
import Footer from './footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
