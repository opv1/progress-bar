import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  onClick: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonWrapper {...props}></ButtonWrapper>
}

export default Button

const ButtonWrapper = styled.button`
  appearance: none;
  position: relative;
  margin: 1rem;
  outline: none;
  border: none;
  border-radius: 20px;
  width: 120px;
  height: 40px;
  box-shadow: ${({ theme }) => theme.complexShadow};
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.darkColor};
  transition: opacity 0.5s;
  cursor: pointer;

  &::before {
    content: 'Random';
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    width: 100%;
    height: 40px;
    box-shadow: ${({ theme }) => theme.lightShadow};
    font-size: 1rem;
    background: ${({ theme }) => theme.linearGradient};
  }

  &:disabled {
    opacity: 0.5;
  }
`
