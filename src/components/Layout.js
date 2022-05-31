import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'

import favicon from '../assets/nav-floppy.png'
import { Navigation } from './Navigation'
import { Footer } from './Footer'

import '../style.css'

export const Layout = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const onUpdateTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    setTheme(savedTheme)
  }, [])

  return (
    <>
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>

      <div className={theme}>
        <Navigation onUpdateTheme={() => onUpdateTheme(theme)} theme={theme} />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  )
}
