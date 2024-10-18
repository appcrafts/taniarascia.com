import React, { useState } from 'react'

const colors = ['blue', 'green', 'light-yellow', 'pink', 'lavender']

export const Colors = () => {
  const [savedColor, setSavedColor] = useState(
    localStorage.getItem('selected-color') || 'yellow'
  )

  const handleUpdateColor = (color) => {
    const cssRoot = document.querySelector(':root')
    cssRoot.style.setProperty('--selected-color', `var(--${color})`)
    localStorage.setItem('selected-color', color)

    setSavedColor(color)
  }

  return colors.map((color) => (
    <div
      key={color}
      className={`circle ${savedColor === color ? 'active' : ''}`}
      style={{ background: `var(--${color})` }}
      onClick={() => handleUpdateColor(color)}
    />
  ))
}
