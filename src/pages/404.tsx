import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function NotFoundPage({ data }) {
  const { title }: { title: string } = data.site.siteMetadata

  return (
    <Layout>
      <SEO title={`404: Page not found - ${title}`} description="404: Page not found" />
      <h1>404 - Page not found</h1>
    </Layout>
  )
}

export const PageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
