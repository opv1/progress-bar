import React, { createContext, useReducer } from 'react'
import { appReducer } from 'context/appReducer'
import { AppCntxt, AppActionTypes } from 'context/types'
import { randomColor, statusChecked, setTimer } from 'utils'

declare global {
  interface Window {
    intervalId: any
  }
}

const initialState = {
  progress: 0,
  timer: '0:00',
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

export const AppContext = createContext<AppCntxt>({ state: initialState })

interface Props {
  children: React.ReactNode
}

export const AppState: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  let secondsCounter = state.animateTime

  const onCustomValue = (value: string) => {
    dispatch({
      type: AppActionTypes.SET_CUSTOM_VALUE,
      payload: value,
    })

    let integerValue = parseInt(value, 10)

    if (integerValue && integerValue > 0) {
      if (integerValue > 100) {
        integerValue = 100
      }

      dispatch({
        type: AppActionTypes.SET_PROGRESS,
        payload: integerValue,
      })
    } else {
      dispatch({
        type: AppActionTypes.SET_PROGRESS,
        payload: 0,
      })
    }
  }

  const onRandomValue = () => {
    dispatch({
      type: AppActionTypes.SET_PROGRESS,
      payload: Math.floor(Math.random() * 101),
    })
    dispatch({
      type: AppActionTypes.SET_CUSTOM_VALUE,
      payload: '',
    })
  }

  const onRandomColor = (checked: boolean) => {
    if (checked) {
      dispatch({
        type: AppActionTypes.SET_COLOR,
        payload: randomColor(state.colorArray),
      })
    } else {
      dispatch({
        type: AppActionTypes.SET_COLOR,
        payload: state.defaultColor,
      })
    }
  }

  const onAnimateValue = (value: string) => {
    dispatch({
      type: AppActionTypes.SET_ANIMATE_VALUE,
      payload: value,
    })
    dispatch({
      type: AppActionTypes.SET_ANIMATE_TIME,
      payload: parseInt(value, 10),
    })

    const timer = setTimer(parseInt(value, 10))

    if (timer) {
      dispatch({
        type: AppActionTypes.SET_TIMER,
        payload: `${timer.min}:${timer.sec}`,
      })
    }
  }

  const finalCountdown = (target: any) => {
    secondsCounter--

    const percent = Math.ceil(
      ((state.animateTime - secondsCounter) / state.animateTime) * 100
    )

    dispatch({
      type: AppActionTypes.SET_PROGRESS,
      payload: percent,
    })

    if (secondsCounter === 0) {
      clearInterval(window.intervalId)

      dispatch({
        type: AppActionTypes.SET_DONE_ANIMATE,
        payload: true,
      })

      return setTimeout(() => {
        statusChecked(target)

        dispatch({
          type: AppActionTypes.SET_DONE_ANIMATE,
          payload: false,
        })
        dispatch({
          type: AppActionTypes.SET_ANIMATE,
          payload: false,
        })
        dispatch({
          type: AppActionTypes.SET_ANIMATE_VALUE,
          payload: '',
        })
        dispatch({
          type: AppActionTypes.SET_PROGRESS,
          payload: 0,
        })
      }, 3000)
    }
  }

  const startTimer = () => {
    const timer = setTimer(secondsCounter)

    dispatch({
      type: AppActionTypes.SET_TIMER,
      payload: `${timer!.min}:${timer!.sec}`,
    })
  }

  const onStartAnimate = (target: any) => {
    if (target.checked) {
      dispatch({
        type: AppActionTypes.SET_ANIMATE,
        payload: true,
      })
      dispatch({
        type: AppActionTypes.SET_CUSTOM_VALUE,
        payload: '',
      })

      window.intervalId = setInterval(() => {
        finalCountdown(target)
        startTimer()
      }, 1000)
    } else {
      dispatch({
        type: AppActionTypes.SET_ANIMATE,
        payload: false,
      })
      dispatch({
        type: AppActionTypes.SET_PROGRESS,
        payload: 0,
      })

      const timer = setTimer(secondsCounter)

      dispatch({
        type: AppActionTypes.SET_TIMER,
        payload: `${timer!.min}:${timer!.sec}`,
      })

      clearInterval(window.intervalId)
    }
  }

  const onHideBlock = () => {
    dispatch({
      type: AppActionTypes.SET_HIDE,
    })
  }

  return (
    <AppContext.Provider
      value={{
        state,
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
