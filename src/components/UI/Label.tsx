import React from 'react'
import styled from 'styled-components'

interface LabelProps {
  title: string
}

const Label: React.FC<LabelProps> = ({ children, title }) => {
  return (
    <LabelWrapper>
      {children}
      {title}
    </LabelWrapper>
  )
}

export default Label

const LabelWrapper = styled.label`
  display: flex;
  align-items: center;
  margin: 0.5rem;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  user-select: none;
`
