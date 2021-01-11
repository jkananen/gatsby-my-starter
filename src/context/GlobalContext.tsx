import React, { useState, useContext, ReactNode } from 'react'

const AppContext = React.createContext(null)

interface AppProviderProps {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [sampleSetting, setSampleSetting] = useState('this is the global setting')

  return (
    <AppContext.Provider value={{ sampleSetting, setSampleSetting }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
