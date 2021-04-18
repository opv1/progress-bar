import React, { createContext, useReducer } from 'react'
import { appReducer } from 'context/appReducer'
import { AppState, AppActionTypes } from 'context/types'
import { getRandomColor, getTime, getParseInt } from 'utils'

declare global {
  interface Window {
    intervalId: any
    timeoutId: any
  }
}

const initialState = {
  progress: 0,
  timer: '0:00',
  customValue: '',
  startAnimate: false,
  doneAnimate: false,
  animateValue: '',
  animateTime: 0,
  hideProgress: false,
  sizeRing: 250,
  strokeWidth: 15,
  strokeInner: '#fff',
  strokeOuter: '#20b7ff',
  defaultColor: '#20b7ff',
  colorArray: [
    '#7ea9e1',
    '#ed004f',
    '#00fcf0',
    '#d2fc00',
    '#7bff00',
    '#fa6900',
  ],
}

type Context = {
  state: AppState
  onCustomValue?: (value: string) => void
  onRandomValue?: () => void
  onRandomColor?: (checked: boolean) => void
  onAnimateValue?: (value: string) => void
  onStartAnimate?: (checked: boolean) => void
  onHideProgress?: () => void
  finalCountdown?: () => void
  resetProgress?: () => void
}

export const AppContext = createContext<Context>({ state: initialState })

interface Provider {
  children: React.ReactNode
}

export const AppProvider: React.FC<Provider> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const onCustomValue = (value: string) => {
    dispatch({
      type: AppActionTypes.SET_CUSTOM_VALUE,
      payload: value,
    })

    let integerValue = getParseInt(value)

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
      type: AppActionTypes.SET_CUSTOM_VALUE,
      payload: '',
    })

    dispatch({
      type: AppActionTypes.SET_PROGRESS,
      payload: Math.floor(Math.random() * 101),
    })
  }

  const onRandomColor = (checked: boolean) => {
    if (checked) {
      dispatch({
        type: AppActionTypes.SET_COLOR,
        payload: getRandomColor(state.colorArray),
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
      payload: getParseInt(value),
    })

    if (value) {
      setTime(getParseInt(value))
    } else {
      setTime(0)
    }
  }

  const onStartAnimate = (checked: boolean) => {
    if (checked) {
      dispatch({
        type: AppActionTypes.SET_PROGRESS,
        payload: 0,
      })

      dispatch({
        type: AppActionTypes.SET_CUSTOM_VALUE,
        payload: '',
      })

      dispatch({
        type: AppActionTypes.SET_START_ANIMATE,
        payload: true,
      })
    } else {
      dispatch({
        type: AppActionTypes.SET_PROGRESS,
        payload: 0,
      })

      dispatch({
        type: AppActionTypes.SET_ANIMATE_TIME,
        payload: getParseInt(state.animateValue),
      })

      dispatch({
        type: AppActionTypes.SET_START_ANIMATE,
        payload: false,
      })

      setTime(getParseInt(state.animateValue))
    }
  }

  const onHideProgress = () => {
    dispatch({
      type: AppActionTypes.SET_HIDE_PROGRESS,
    })
  }

  const setTime = (value: number) => {
    const time = getTime(value)

    dispatch({
      type: AppActionTypes.SET_TIME,
      payload: `${time.min}:${time.sec}`,
    })
  }

  const finalCountdown = () => {
    const startPoint = getParseInt(state.animateValue)
    let counter = state.animateTime - 1
    const progress = Math.ceil(((startPoint - counter) / startPoint) * 100)

    dispatch({
      type: AppActionTypes.SET_PROGRESS,
      payload: progress,
    })

    setTime(counter)

    if (counter === 0) {
      dispatch({
        type: AppActionTypes.SET_DONE_ANIMATE,
        payload: true,
      })
    }

    dispatch({
      type: AppActionTypes.SET_ANIMATE_TIME,
      payload: counter,
    })
  }

  const resetProgress = () => {
    dispatch({
      type: AppActionTypes.SET_PROGRESS,
      payload: 0,
    })

    dispatch({
      type: AppActionTypes.SET_ANIMATE_VALUE,
      payload: '',
    })

    dispatch({
      type: AppActionTypes.SET_START_ANIMATE,
      payload: false,
    })

    dispatch({
      type: AppActionTypes.SET_DONE_ANIMATE,
      payload: false,
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
        onHideProgress,
        resetProgress,
        finalCountdown,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
