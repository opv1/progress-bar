import { MouseEvent } from 'react'

export type AppState = {
  progress: number
  timer: string
  customValue: string
  defaultColor: string
  colorArray: string[]
  animate: boolean
  doneAnimate: boolean
  animateValue: string
  animateTime: number
  size: number
  strokeWidth: number
  strokeInner: string
  strokeOuter: string
  hide: boolean
}

export type AppCntxt = {
  state: AppState
  onCustomValue?: (value: string) => void
  onRandomValue?: (event: MouseEvent<HTMLButtonElement>) => void
  onRandomColor?: (checked: boolean) => void
  onAnimateValue?: (value: string) => void
  onStartAnimate?: (target: HTMLInputElement) => void
  onHideBlock?: () => void
}

export enum AppActionTypes {
  SET_PROGRESS = 'SET_PROGRESS',
  SET_TIMER = 'SET_TIMER',
  SET_CUSTOM_VALUE = 'SET_CUSTOM_VALUE',
  SET_COLOR = 'SET_COLOR',
  SET_ANIMATE = 'SET_ANIMATE',
  SET_DONE_ANIMATE = 'SET_DONE_ANIMATE',
  SET_ANIMATE_VALUE = 'SET_ANIMATE_VALUE',
  SET_ANIMATE_TIME = 'SET_ANIMATE_TIME',
  SET_HIDE = 'SET_HIDE',
}

interface ISetProgress {
  type: AppActionTypes.SET_PROGRESS
  payload: number
}

interface ISetTimer {
  type: AppActionTypes.SET_TIMER
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
  type: AppActionTypes.SET_ANIMATE
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
  type: AppActionTypes.SET_HIDE
}

export type AppAction =
  | ISetProgress
  | ISetTimer
  | ISetCustomValue
  | ISetColor
  | ISetAnimate
  | ISetAnimateValue
  | ISetAnimateTime
  | ISetDoneAnimate
  | ISetHide
