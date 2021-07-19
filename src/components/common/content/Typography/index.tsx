import React, { ReactNode } from 'react'

import styles from './typography.module.scss'

interface TypographyProperties {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'label'
  children: ReactNode
}

export const Typography: React.FC<TypographyProperties> = ({ variant = 'p', children }: TypographyProperties) => {
  return React.createElement(variant, { className: `${styles.typography}` }, children)
}
