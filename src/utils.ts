export const getRandomColor = (colorArray: string[]) => {
  return colorArray[Math.floor(Math.random() * colorArray.length)]
}

export const getParseInt = (value: string) => {
  return parseInt(value, 10)
}

export const getTime = (counter: number) => {
  const min = Math.floor(counter / 60)
  const sec = counter % 60 > 9 ? counter % 60 : `0${counter % 60}`

  return { min, sec }
}
