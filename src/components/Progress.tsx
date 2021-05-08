import React, { useEffect, useContext, useState } from 'react'
import styled from 'styled-components'
import { AppContext } from 'context/AppState'

const Progress: React.FC = () => {
  const [offset, setOffset] = useState<number>(0)
  const {
    progress,
    timer,
    doneAnimate,
    animateValue,
    sizeRing,
    strokeInner,
    strokeOuter,
    strokeWidth,
    hideProgress,
  } = useContext(AppContext)

  const center = sizeRing / 2
  const radius = sizeRing / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference
    setOffset(progressOffset)
  }, [progress, circumference, offset, setOffset])

  return (
    <ProgressWrapper style={hideProgress ? { opacity: '0' } : {}}>
      <ProgressBlock style={{ width: `${sizeRing}px` }}>
        <ProgressDone style={doneAnimate ? { opacity: '1' } : {}}>
          Done!
        </ProgressDone>
        <ProgressRing width={sizeRing} height={sizeRing}>
          <ProgressInner
            stroke={strokeInner}
            strokeWidth={strokeWidth}
            cx={center}
            cy={center}
            r={radius}
          />
          <ProgressOuter
            stroke={strokeOuter}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            cx={center}
            cy={center}
            r={radius}
            transform={`rotate(-90, ${center}, ${center})`}
          />
          <ProgressPercent x={`${center}`} y={`${center}`}>
            {progress}%
          </ProgressPercent>
        </ProgressRing>
        <ProgressTimer
          style={
            animateValue && Number(animateValue) !== 0 ? { opacity: '1' } : {}
          }
        >
          {timer}
        </ProgressTimer>
      </ProgressBlock>
    </ProgressWrapper>
  )
}

export default Progress

const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  opacity: 1;
  transition: opacity 0.5s;
`

const ProgressBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProgressDone = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.textColor};
  opacity: 0;
  transition: opacity 0.5s;
`

const ProgressRing = styled.svg`
  display: block;
  margin: 20px auto;
  max-width: 100%;
`

const ProgressInner = styled.circle`
  fill: none;
`

const ProgressOuter = styled.circle`
  fill: none;
  transition: stroke-dashoffset 850ms ease-in-out;
`

const ProgressPercent = styled.text`
  font-weight: 700;
  font-size: 2rem;
  fill: ${({ theme }) => theme.textColor};
  text-anchor: middle;
`

const ProgressTimer = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.textColor};
  opacity: 0;
  transition: opacity 0.5s;
`
