import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import './ControlPanel.scss'

function ControlPanel() {
  const {
    customValue,
    animate,
    animateValue,
    hide,
    onCustomValue,
    onRandomValue,
    onRandomColor,
    onAnimateValue,
    onStartAnimate,
    onHideBlock,
  } = useContext(AppContext)

  return (
    <form className='control-panel'>
      <label className='control-label'>
        <input
          className='control-label__input'
          onChange={(e) => onCustomValue(e.target.value)}
          value={customValue}
          type='number'
          placeholder='0'
          disabled={animate || hide}
        />
        Custom value
      </label>
      <div className='control-block'>
        <button
          className='control-block__button'
          onClick={onRandomValue}
          disabled={animate || hide}
        ></button>
      </div>
      <label className='control-label'>
        <input
          onChange={(e) => onRandomColor(e.target.checked)}
          type='checkbox'
          disabled={hide}
        />
        Random color
      </label>
      <div className='control-block'>
        <label className='control-label'>
          <input
            className='control-label__input'
            onChange={(e) => onAnimateValue(e.target.value)}
            value={animateValue}
            type='number'
            placeholder='0'
            disabled={animate || hide}
          />
          Seconds
        </label>
        <label className='control-label'>
          <input
            onChange={(e) => onStartAnimate(e.target)}
            type='checkbox'
            disabled={!animateValue || Number(animateValue) === 0 || hide}
          />
          Animate
        </label>
      </div>
      <label className='control-label'>
        <input onChange={onHideBlock} type='checkbox' disabled={animate} />
        Hide progress panel
      </label>
    </form>
  )
}

export default ControlPanel
