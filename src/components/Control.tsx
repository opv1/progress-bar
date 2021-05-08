import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { AppContext } from 'context/AppState'
import Button from 'components/UI/Button'
import Label from 'components/UI/Label'
import Input from 'components/UI/Input'

const Control: React.FC = () => {
  const {
    theme,
    customValue,
    startAnimate,
    animateValue,
    animateTime,
    hideProgress,
    doneAnimate,
    toggleTheme,
    onCustomValue,
    onRandomValue,
    onRandomColor,
    onAnimateValue,
    onStartAnimate,
    onHideProgress,
    finalCountdown,
    resetProgress,
  } = useContext(AppContext)

  useEffect(() => {
    if (startAnimate && animateTime !== 0) {
      window.intervalId = setInterval(() => {
        finalCountdown()
      }, 1000)
    } else {
      clearInterval(window.intervalId)
    }

    return () => clearInterval(window.intervalId)
    // eslint-disable-next-line
  }, [startAnimate, animateTime])

  useEffect(() => {
    if (doneAnimate) {
      window.timeoutId = setTimeout(() => {
        resetProgress()
      }, 3000)
    } else {
      clearTimeout(window.timeoutId)
    }

    return () => clearTimeout(window.timeoutId)
    // eslint-disable-next-line
  }, [doneAnimate])

  return (
    <ControlWrapper>
      <Label title='Custom value'>
        <Input
          onChange={(event) => onCustomValue(event.target.value)}
          value={customValue}
          type='number'
          placeholder='0'
          disabled={startAnimate || hideProgress}
        />
      </Label>
      <ControlBlock>
        <Button
          onClick={onRandomValue}
          disabled={startAnimate || hideProgress}
        />
      </ControlBlock>
      <Label title='Random color'>
        <Input
          onChange={(event) => onRandomColor(event.target.checked)}
          type='checkbox'
          disabled={hideProgress}
        />
      </Label>
      <ControlBlock>
        <Label title='Seconds'>
          <Input
            onChange={(event) => onAnimateValue(event.target.value)}
            value={animateValue}
            type='number'
            placeholder='0'
            disabled={startAnimate || hideProgress}
          />
        </Label>
        <Label title='Animate'>
          <Input
            onChange={(event) => onStartAnimate(event.target.checked)}
            type='checkbox'
            checked={startAnimate}
            disabled={
              !animateValue || Number(animateValue) === 0 || hideProgress
            }
          />
        </Label>
      </ControlBlock>
      <Label title='Hide progress'>
        <Input
          onChange={onHideProgress}
          type='checkbox'
          checked={hideProgress}
          disabled={startAnimate}
        />
      </Label>
      <Label title='Theme'>
        <Input
          onChange={toggleTheme}
          type='checkbox'
          checked={theme === 'light'}
        />
      </Label>
    </ControlWrapper>
  )
}

export default Control

const ControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`

const ControlBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
