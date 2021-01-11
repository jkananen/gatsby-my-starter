/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import 'normalize.css'
import '../styles/main.scss'
import { Helmet } from 'react-helmet'
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
