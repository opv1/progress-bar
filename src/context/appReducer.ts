import { AppState, AppAction, AppActionTypes } from 'context/types'

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      }
    case AppActionTypes.SET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      }
    case AppActionTypes.SET_TIME:
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
    case AppActionTypes.SET_START_ANIMATE:
      return {
        ...state,
        startAnimate: action.payload,
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
    case AppActionTypes.SET_HIDE_PROGRESS:
      return {
        ...state,
        hideProgress: !state.hideProgress,
      }
    default:
      return state
  }
}
