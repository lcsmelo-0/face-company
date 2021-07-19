import React, { ReactNode } from 'react'

import styles from './typography.module.scss'

interface TypographyProperties {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'label'
  children: ReactNode
  className?: 'error'
  showError?: boolean
}

export const Typography: React.FC<TypographyProperties> = ({
  variant = 'p',
  children,
  className,
  showError,
}: TypographyProperties) => {
  const _handleClassName = () => {
    if (className === 'error') {
      if (showError) {
        return styles.error
      }

      return styles.error__hide
    }
  }
  return React.createElement(variant, { className: `${styles.typography} ${_handleClassName()}` }, children)
}
