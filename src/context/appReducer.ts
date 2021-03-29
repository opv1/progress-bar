import { AppState, AppAction, AppActionTypes } from 'context/types'

export const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case AppActionTypes.SET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      }
    case AppActionTypes.SET_TIMER:
      return {
        ...state,
        timer: action.payload,
      }
    case AppActionTypes.SET_CUSTOM_VALUE:
      return {
        ...state,
        customValue: action.payload,
      }
    case AppActionTypes.SET_COLOR:
      return {
        ...state,
        strokeOuter: action.payload,
      }
    case AppActionTypes.SET_ANIMATE:
      return {
        ...state,
        animate: action.payload,
      }
    case AppActionTypes.SET_DONE_ANIMATE:
      return {
        ...state,
        doneAnimate: action.payload,
      }
    case AppActionTypes.SET_ANIMATE_VALUE:
      return {
        ...state,
        animateValue: action.payload,
      }
    case AppActionTypes.SET_ANIMATE_TIME:
      return {
        ...state,
        animateTime: action.payload,
      }
    case AppActionTypes.SET_HIDE:
      return {
        ...state,
        hide: !state.hide,
      }
    default:
      return state
  }
}
