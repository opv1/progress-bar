import React from 'react'
import styled, { css } from 'styled-components'

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  value?: string
  placeholder?: string
  checked?: boolean
  disabled?: boolean
}

const Input: React.FC<InputProps> = (props) => {
  return <InputWrapper {...props} />
}

export default Input

const InputWrapper = styled.input<{ type: string }>`
  margin: 0.5rem;
  outline: none;
  border: none;
  border-radius: 20px;
  width: 120px;
  height: 40px;
  box-shadow: ${({ theme }) => theme.complexShadow};
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.linearGradient};
  transition: opacity 0.5s;

  ${(props) =>
    props.type === 'number' &&
    css`
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        appearance: none;
        margin: 0;
      }

      &:focus,
      &:hover {
        appearance: number-input;
      }
    `}

  ${(props) =>
    props.type === 'checkbox' &&
    css`
      appearance: none;
      position: relative;
      overflow: hidden;
      background: ${({ theme }) => theme.darkColor};
      transition: 0.5s;
      cursor: pointer;
      clip: rect(0 0 0 0);

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 20px;
        width: 80px;
        height: 40px;
        box-shadow: ${({ theme }) => theme.lightShadow};
        background: ${({ theme }) => theme.linearGradient};
        transform: scale(0.98, 0.96);
        transition: 0.5s;
      }

      &::after {
        content: '';
        position: absolute;
        left: 65px;
        top: calc(50% - 2px);
        border-radius: 50%;
        width: 4px;
        height: 4px;
        background: #555;
        transition: 0.5s;
      }

      &:checked {
        background: ${({ theme }) => theme.activeColor};
      }

      &:checked::before {
        left: 40px;
      }

      &:checked::after {
        left: calc(65px + 40px);
        box-shadow: ${({ theme }) => theme.activeShadow};
        background: ${({ theme }) => theme.activeColor};
      }
    `}

  &:disabled {
    opacity: 0.5;
  }
`
