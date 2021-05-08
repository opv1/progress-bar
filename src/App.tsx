import React, { useContext } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles, darkTheme, lightTheme } from 'styles/globalStyles'
import { AppContext } from 'context/AppState'
import Progress from 'components/Progress'
import Control from 'components/Control'
import Toggle from 'components/Toggle'

const App: React.FC = () => {
  const { theme } = useContext(AppContext)

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppWrapper>
        <Progress />
        <Control />
        <Toggle />
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App

const AppWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 2rem;
  border-radius: 50px;
  width: 100%;
  min-height: 750px;
  max-width: 1440px;
  box-shadow: ${({ theme }) => theme.complexShadow};
  background: ${({ theme }) => theme.secondaryColor};
`
