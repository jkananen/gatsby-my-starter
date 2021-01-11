import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

export default function HomePage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Hello from a Gatsby starter.</h1>
        <p>
          You may proceed to <Link to="another-page">another page</Link>
        </p>
      </div>
    </Layout>
  )
}

HomePage.propTypes = {}
