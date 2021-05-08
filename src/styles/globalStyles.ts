import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

type ThemeType = {
  [key: string]: string
}

interface GlobalStylesProps {
  theme: ThemeType
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto Mono', 'Arial', 'Helvetica', sans-serif;
    background: ${({ theme }) => theme.primaryColor};
    content-visibility: auto;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 320px;
    min-height: 100vh;
    max-height: 100%;
  }
`

export const darkTheme = {
  primaryColor: '#313131',
  secondaryColor: '#414141',
  activeColor: '#20b7ff',
  darkColor: '#111',
  textColor: '#fff',
  complexShadow:
    '-5px -5px 20px rgba(255, 255, 255, 0.1), 5px 5px 10px rgba(0, 0, 0, 1), inset -2px -2px 5px rgba(255, 255, 255, 0.1), inset 2px 2px 5px rgba(0, 0, 0, 0.5), 0 0 0 2px #1f1f1f',
  lightShadow: '0 0 0 1px #232323',
  activeShadow: '0 0 5px #20b7ff, 0 0 15px #20b7ff, 0 0 30px #20b7ff',
  linearGradient: 'linear-gradient(to top, #000, #555)',
}

export const lightTheme = {
  primaryColor: '#c4c4c4',
  secondaryColor: '#e2e2e2',
  activeColor: '#ffef08',
  darkColor: '#111',
  textColor: '#000',
  complexShadow:
    '-5px -5px 20px rgba(255, 255, 255, 0.1), 5px 5px 10px rgba(0, 0, 0, 1), inset -2px -2px 5px rgba(255, 255, 255, 0.1), inset 2px 2px 5px rgba(0, 0, 0, 0.5), 0 0 0 2px #1f1f1f',
  lightShadow: '0 0 0 1px #232323',
  activeShadow: '0 0 5px #ffef08, 0 0 15px #ffef08, 0 0 30px #ffef08',
  linearGradient: 'linear-gradient(to top, #fff, #bfbfbf)',
}
