import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { useGlobalContext } from '../context/GlobalContext'

export default function AnotherPage() {
  const { sampleSetting } = useGlobalContext()

  return (
    <Layout>
      <SEO title="Another Page" />
      <h1>And this is another page.</h1>
      <p>... with something from the GlobalContext: {sampleSetting}</p>
    </Layout>
  )
}

AnotherPage.propTypes = {}
