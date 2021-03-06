import React, { useState, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { useQueryParam, StringParam, withDefault } from 'use-query-params'

import StyleContext from 'utils/StyleContext'
import UXContext from 'utils/UXContext'
import { themes } from 'utils/styles'

export default function CO2NumberProvider(props) {
  const [theme, setTheme] = useQueryParam(
    'theme',
    withDefault(StringParam, 'default')
  )

  const { embedOpen } = useContext(UXContext)
  const [accessibility, setAccessibility] = useState(false)

  return (
    <StyleContext.Provider
      value={{
        themes,
        theme,
        setTheme,
        accessibility,
        setAccessibility,
      }}
    >
      <ThemeProvider
        theme={{
          ...themes[accessibility && !embedOpen ? 'night' : theme],
        }}
      >
        {props.children}
      </ThemeProvider>
    </StyleContext.Provider>
  )
}
