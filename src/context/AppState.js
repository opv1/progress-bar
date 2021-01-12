import React, { useReducer } from 'react'
import { AppContext } from './AppContext'
import { appReducer } from './appReducer'
import {
  SET_PROGRESS,
  SET_TIMER,
  SET_CUSTOM_VALUE,
  SET_COLOR,
  SET_ANIMATE,
  SET_DONE_ANIMATE,
  SET_ANIMATE_VALUE,
  SET_ANIMATE_TIME,
  SET_HIDE,
} from './types'
import { randomColor, statusChecked, setTimer } from '../utils'

function AppState({ children }) {
  const initialState = {
    progress: 0,
    timer: '0:00',
    waitTime: 3000,
    customValue: '',
    defaultColor: '#20b7ff',
    colorArray: [
      '#7ea9e1',
      '#ed004f',
      '#00fcf0',
      '#d2fc00',
      '#7bff00',
      '#fa6900',
    ],
    animate: false,
    doneAnimate: false,
    animateValue: '',
    animateTime: 0,
    size: 250,
    strokeWidth: 15,
    strokeInner: '#ffffff',
    strokeOuter: '#20b7ff',
    hide: false,
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  const {
    progress,
    timer,
    waitTime,
    customValue,
    defaultColor,
    colorArray,
    animate,
    doneAnimate,
    animateValue,
    animateTime,
    size,
    strokeWidth,
    strokeInner,
    strokeOuter,
    hide,
  } = state

  let secondsCounter = animateTime

  const onCustomValue = (value) => {
    dispatch({
      type: SET_CUSTOM_VALUE,
      payload: value,
    })

    let integerValue = parseInt(value, 10)

    if (integerValue && integerValue > 0) {
      if (integerValue > 100) {
        integerValue = 100
      }

      dispatch({
        type: SET_PROGRESS,
        payload: integerValue,
      })
    } else {
      dispatch({
        type: SET_PROGRESS,
        payload: 0,
      })
    }
  }

  const onRandomValue = (e) => {
    e.preventDefault()

    dispatch({
      type: SET_PROGRESS,
      payload: Math.floor(Math.random() * 101),
    })

    dispatch({
      type: SET_CUSTOM_VALUE,
      payload: '',
    })
  }

  const onRandomColor = (checked) => {
    if (checked) {
      dispatch({
        type: SET_COLOR,
        payload: randomColor(colorArray),
      })
    } else {
      dispatch({
        type: SET_COLOR,
        payload: defaultColor,
      })
    }
  }

  const onAnimateValue = (value) => {
    dispatch({
      type: SET_ANIMATE_VALUE,
      payload: value,
    })

    dispatch({
      type: SET_ANIMATE_TIME,
      payload: parseInt(value, 10),
    })

    const timer = setTimer(parseInt(value, 10))

    if (timer) {
      dispatch({
        type: SET_TIMER,
        payload: `${timer.min}:${timer.sec}`,
      })
    }
  }

  const finalCountdown = (target) => {
    secondsCounter--

    const percent = Math.ceil(
      ((animateTime - secondsCounter) / animateTime) * 100
    )

    dispatch({
      type: SET_PROGRESS,
      payload: percent,
    })

    if (secondsCounter === 0) {
      clearInterval(window.intervalId)

      dispatch({
        type: SET_DONE_ANIMATE,
        payload: true,
      })

      return setTimeout(() => {
        statusChecked(target)

        dispatch({
          type: SET_DONE_ANIMATE,
          payload: false,
        })

        dispatch({
          type: SET_ANIMATE,
          payload: false,
        })

        dispatch({
          type: SET_ANIMATE_VALUE,
          payload: '',
        })

        dispatch({
          type: SET_PROGRESS,
          payload: 0,
        })
      }, waitTime)
    }
  }

  const startTimer = () => {
    const timer = setTimer(secondsCounter)

    dispatch({
      type: SET_TIMER,
      payload: `${timer.min}:${timer.sec}`,
    })
  }

  const onStartAnimate = (target) => {
    if (target.checked) {
      dispatch({
        type: SET_ANIMATE,
        payload: true,
      })

      dispatch({
        type: SET_CUSTOM_VALUE,
        payload: '',
      })

      window.intervalId = setInterval(() => {
        finalCountdown(target)
        startTimer()
      }, 1000)
    } else {
      dispatch({
        type: SET_ANIMATE,
        payload: false,
      })

      dispatch({
        type: SET_PROGRESS,
        payload: 0,
      })

      const timer = setTimer(secondsCounter)

      dispatch({
        type: SET_TIMER,
        payload: `${timer.min}:${timer.sec}`,
      })

      clearInterval(window.intervalId)
    }
  }

  const onHideBlock = () => {
    dispatch({
      type: SET_HIDE,
    })
  }

  return (
    <AppContext.Provider
      value={{
        progress,
        timer,
        waitTime,
        customValue,
        animate,
        doneAnimate,
        animateValue,
        size,
        strokeWidth,
        strokeInner,
        strokeOuter,
        hide,
        onCustomValue,
        onRandomValue,
        onRandomColor,
        onAnimateValue,
        onStartAnimate,
        onHideBlock,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppState
