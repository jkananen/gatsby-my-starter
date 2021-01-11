/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from 'react'

import { AppProvider } from './src/context/GlobalContext'

export const wrapRootElement = ({ element }) => <AppProvider>{element}</AppProvider>
