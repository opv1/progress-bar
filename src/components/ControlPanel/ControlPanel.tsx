import React, { useContext } from 'react'
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
    onHideBlock,
  } = useContext(AppContext)

  return (
    <form className='control-panel'>
      <label className='control-label'>
        <input
          className='control-label__input'
          onChange={(event) => onCustomValue!(event.target.value)}
          value={state.customValue}
          type='number'
          placeholder='0'
          disabled={state.animate || state.hide}
        />
        Custom value
      </label>
      <div className='control-block'>
        <button
          className='control-block__button'
          onClick={onRandomValue}
          disabled={state.animate || state.hide}
        ></button>
      </div>
      <label className='control-label'>
        <input
          onChange={(event) => onRandomColor!(event.target.checked)}
          type='checkbox'
          disabled={state.hide}
        />
        Random color
      </label>
      <div className='control-block'>
        <label className='control-label'>
          <input
            className='control-label__input'
            onChange={(event) => onAnimateValue!(event.target.value)}
            value={state.animateValue}
            type='number'
            placeholder='0'
            disabled={state.animate || state.hide}
          />
          Seconds
        </label>
        <label className='control-label'>
          <input
            onChange={(event) => onStartAnimate!(event.target)}
            type='checkbox'
            disabled={
              !state.animateValue ||
              Number(state.animateValue) === 0 ||
              state.hide
            }
          />
          Animate
        </label>
      </div>
      <label className='control-label'>
        <input
          onChange={onHideBlock}
          type='checkbox'
          disabled={state.animate}
        />
        Hide progress panel
      </label>
    </form>
  )
}

export default ControlPanel
