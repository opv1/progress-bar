export type AppState = {
  theme: string
  progress: number
  timer: string
  customValue: string
  startAnimate: boolean
  doneAnimate: boolean
  animateValue: string
  animateTime: number
  hideProgress: boolean
  sizeRing: number
  strokeWidth: number
  strokeInner: string
  strokeOuter: string
  defaultColor: string
  colorArray: string[]
  toggleTheme: () => void
  onCustomValue: (value: string) => void
  onRandomValue: () => void
  onRandomColor: (checked: boolean) => void
  onAnimateValue: (value: string) => void
  onStartAnimate: (checked: boolean) => void
  onHideProgress: () => void
  finalCountdown: () => void
  resetProgress: () => void
}

export enum AppActionTypes {
  SET_THEME = 'SET_THEME',
  SET_PROGRESS = 'SET_PROGRESS',
  SET_TIME = 'SET_TIME',
  SET_CUSTOM_VALUE = 'SET_CUSTOM_VALUE',
  SET_COLOR = 'SET_COLOR',
  SET_START_ANIMATE = 'SET_START_ANIMATE',
  SET_DONE_ANIMATE = 'SET_DONE_ANIMATE',
  SET_ANIMATE_VALUE = 'SET_ANIMATE_VALUE',
  SET_ANIMATE_TIME = 'SET_ANIMATE_TIME',
  SET_HIDE_PROGRESS = 'SET_HIDE_PROGRESS',
}

interface ISetTheme {
  type: AppActionTypes.SET_THEME
  payload: string
}

interface ISetProgress {
  type: AppActionTypes.SET_PROGRESS
  payload: number
}

interface ISetTimer {
  type: AppActionTypes.SET_TIME
  payload: string
}

interface ISetCustomValue {
  type: AppActionTypes.SET_CUSTOM_VALUE
  payload: string
}

interface ISetColor {
  type: AppActionTypes.SET_COLOR
  payload: string
}

interface ISetAnimate {
  type: AppActionTypes.SET_START_ANIMATE
  payload: boolean
}

interface ISetAnimateValue {
  type: AppActionTypes.SET_ANIMATE_VALUE
  payload: string
}

interface ISetAnimateTime {
  type: AppActionTypes.SET_ANIMATE_TIME
  payload: number
}

interface ISetDoneAnimate {
  type: AppActionTypes.SET_DONE_ANIMATE
  payload: boolean
}

interface ISetHide {
  type: AppActionTypes.SET_HIDE_PROGRESS
}

export type AppAction =
  | ISetTheme
  | ISetProgress
  | ISetTimer
  | ISetCustomValue
  | ISetColor
  | ISetAnimate
  | ISetAnimateValue
  | ISetAnimateTime
  | ISetDoneAnimate
  | ISetHide
