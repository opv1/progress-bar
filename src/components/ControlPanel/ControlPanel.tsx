import React, { useContext, useEffect } from 'react'
import { AppContext } from 'context/AppState'
import 'components/ControlPanel/ControlPanel.scss'

const ControlPanel: React.FC = () => {
  const {
    state,
    onCustomValue,
    onRandomValue,
    onRandomColor,
    onAnimateValue,
    onStartAnimate,
    onHideProgress,
    finalCountdown,
    resetProgress,
  } = useContext(AppContext)
  const {
    customValue,
    startAnimate,
    animateValue,
    animateTime,
    hideProgress,
    doneAnimate,
  } = state

  useEffect(() => {
    if (startAnimate && animateTime !== 0) {
      window.intervalId = setInterval(() => {
        finalCountdown!()
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
        resetProgress!()
      }, 3000)
    } else {
      clearTimeout(window.timeoutId)
    }

    return () => clearTimeout(window.timeoutId)
    // eslint-disable-next-line
  }, [doneAnimate])

  return (
    <div className='control'>
      <label className='control__label'>
        <input
          className='control__input'
          onChange={(event) => onCustomValue!(event.target.value)}
          value={customValue}
          type='number'
          placeholder='0'
          disabled={startAnimate || hideProgress}
        />
        Custom value
      </label>
      <div className='control__block'>
        <button
          className='control__button'
          onClick={onRandomValue}
          disabled={startAnimate || hideProgress}
        ></button>
      </div>
      <label className='control__label'>
        <input
          onChange={(event) => onRandomColor!(event.target.checked)}
          type='checkbox'
          disabled={hideProgress}
        />
        Random color
      </label>
      <div className='control__block'>
        <label className='control__label'>
          <input
            className='control__input'
            onChange={(event) => onAnimateValue!(event.target.value)}
            value={animateValue}
            type='number'
            placeholder='0'
            disabled={startAnimate || hideProgress}
          />
          Seconds
        </label>
        <label className='control__label'>
          <input
            onChange={(event) => onStartAnimate!(event.target.checked)}
            type='checkbox'
            checked={startAnimate}
            disabled={
              !animateValue || Number(animateValue) === 0 || hideProgress
            }
          />
          Animate
        </label>
      </div>
      <label className='control__label'>
        <input
          onChange={onHideProgress}
          type='checkbox'
          checked={hideProgress}
          disabled={startAnimate}
        />
        Hide progress
      </label>
    </div>
  )
}

export default ControlPanel
