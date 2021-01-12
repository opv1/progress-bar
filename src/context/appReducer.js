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

const handlers = {
  [SET_PROGRESS]: (state, { payload }) => ({
    ...state,
    progress: payload,
  }),
  [SET_TIMER]: (state, { payload }) => ({
    ...state,
    timer: payload,
  }),
  [SET_CUSTOM_VALUE]: (state, { payload }) => ({
    ...state,
    customValue: payload,
  }),
  [SET_COLOR]: (state, { payload }) => ({
    ...state,
    strokeOuter: payload,
  }),
  [SET_ANIMATE]: (state, { payload }) => ({
    ...state,
    animate: payload,
  }),
  [SET_DONE_ANIMATE]: (state, { payload }) => ({
    ...state,
    doneAnimate: payload,
  }),
  [SET_ANIMATE_VALUE]: (state, { payload }) => ({
    ...state,
    animateValue: payload,
  }),
  [SET_ANIMATE_TIME]: (state, { payload }) => ({
    ...state,
    animateTime: payload,
  }),
  [SET_HIDE]: (state) => ({
    ...state,
    hide: !state.hide,
  }),
  DEFAULT: (state) => state,
}

export const appReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT

  return handler(state, action)
}
