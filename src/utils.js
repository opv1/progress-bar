export const randomColor = (colorArray) => {
  return colorArray[Math.floor(Math.random() * colorArray.length)]
}

export const statusChecked = (target) => {
  target.checked = false
}

export const setTimer = (counter) => {
  if (counter >= 0) {
    const min = Math.floor(counter / 60)
    const sec = counter % 60 > 9 ? counter % 60 : `0${counter % 60}`

    return { min, sec }
  }
}
