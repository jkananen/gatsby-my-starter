import React, { ReactNode } from 'react'
const styles = require('./container.module.scss')

interface ContainerProps {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <main className={styles.main}>{children}</main>
}
