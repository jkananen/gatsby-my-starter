/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from 'react'

import { AppProvider } from './src/context/GlobalContext'

export const wrapRootElement = ({ element }) => <AppProvider>{element}</AppProvider>
