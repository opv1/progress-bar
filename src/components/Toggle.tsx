import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from 'context/AppState'
import Label from 'components/UI/Label'
import Input from 'components/UI/Input'

const Toggle: React.FC = () => {
  const { state, toggleTheme } = useContext(AppContext)

  return (
    <ToggleWrapper>
      <Label title='Theme'>
        <Input
          onChange={() => toggleTheme!()}
          type='checkbox'
          checked={state.theme === 'light'}
        />
      </Label>
    </ToggleWrapper>
  )
}

export default Toggle

const ToggleWrapper = styled.div`
  position: absolute;
  right: 35px;
  top: 15px;
  display: flex;
  align-items: center;
`
