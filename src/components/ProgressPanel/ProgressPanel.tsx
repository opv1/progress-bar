import React, { useEffect, useContext, useState } from 'react'
import { AppContext } from 'context/AppState'
import 'components/ProgressPanel/ProgressPanel.scss'

const ProgressPanel: React.FC = () => {
  const [offset, setOffset] = useState<number>(0)
  const { state } = useContext(AppContext)
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
  } = state

  const center = sizeRing / 2
  const radius = sizeRing / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference
    setOffset(progressOffset)
  }, [progress, circumference, offset, setOffset])

  return (
    <div className={hideProgress ? 'progress progress_hide' : 'progress'}>
      <div className='progress__block' style={{ width: `${sizeRing}px` }}>
        <span
          className='progress__done'
          style={doneAnimate ? { opacity: '1' } : {}}
        >
          Done!
        </span>
        <svg className='progress__ring' width={sizeRing} height={sizeRing}>
          <circle
            className='progress__inner'
            stroke={strokeInner}
            strokeWidth={strokeWidth}
            cx={center}
            cy={center}
            r={radius}
          />
          <circle
            className='progress__outer'
            stroke={strokeOuter}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            cx={center}
            cy={center}
            r={radius}
            transform={`rotate(-90, ${center}, ${center})`}
          />
          <text className='progress__percent' x={`${center}`} y={`${center}`}>
            {progress}%
          </text>
        </svg>
        <span
          className='progress__timer'
          style={
            animateValue && Number(animateValue) !== 0 ? { opacity: '1' } : {}
          }
        >
          {timer}
        </span>
      </div>
    </div>
  )
}

export default ProgressPanel
