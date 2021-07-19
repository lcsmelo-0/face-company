import React from 'react'
import { useRouter } from 'next/router'

import styles from './button.module.scss'

interface ButtonProperties {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  variant?: 'primary' | 'link'
  href?: string
}

export const Button: React.FC<ButtonProperties> = ({
  variant = 'primary',
  children,
  onClick,
  href,
}: ButtonProperties) => {
  const router = useRouter()

  const getClassName = () => {
    if (variant === 'link') {
      return styles.link
    }

    if (variant === 'primary') {
      return styles.primary
    }
  }

  return (
    <button
      onClick={href ? async () => await router.push(href) : onClick}
      className={`${styles.button} ${getClassName()}`}
    >
      {children}
    </button>
  )
}
