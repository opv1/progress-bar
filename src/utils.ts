export const randomColor = (colorArray: string[]) => {
  return colorArray[Math.floor(Math.random() * colorArray.length)]
}

export const statusChecked = (target: HTMLInputElement) => {
  target.checked = false
}

export const setTimer = (counter: number) => {
  if (counter >= 0) {
    const min = Math.floor(counter / 60)
    const sec = counter % 60 > 9 ? counter % 60 : `0${counter % 60}`

    return { min, sec }
  }
}
