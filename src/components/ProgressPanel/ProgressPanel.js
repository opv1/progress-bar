import React, { useContext, useState, useRef, useEffect } from 'react'
import propTypes from 'prop-types'
import { AppContext } from '../../context/AppContext'
import './ProgressPanel.scss'

function ProgressPanel() {
  const {
    progress,
    timer,
    waitTime,
    doneAnimate,
    animateValue,
    size,
    strokeWidth,
    strokeInner,
    strokeOuter,
    hide,
  } = useContext(AppContext)

  const [offset, setOffset] = useState(0)

  const circleRef = useRef(null)

  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference

    setOffset(progressOffset)

    circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out'
  }, [progress, circumference, offset, setOffset])

  return (
    <div className='progress-panel'>
      {hide ? (
        <span className='progress-hide'>Progress block is hidden!</span>
      ) : (
        <div className='progress-block' style={{ width: `${size}px` }}>
          <span
            className='progress-done'
            style={doneAnimate ? { opacity: '1' } : {}}
          >
            Done! Wait {waitTime / 1000} sec
          </span>
          <svg className='progress-ring' width={size} height={size}>
            <circle
              className='progress-ring__bg'
              stroke={strokeInner}
              strokeWidth={strokeWidth}
              cx={center}
              cy={center}
              r={radius}
            />
            <circle
              className='progress-ring__bar'
              ref={circleRef}
              stroke={strokeOuter}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              cx={center}
              cy={center}
              r={radius}
            />
            <text
              className='progress-ring__text'
              x={`${center}`}
              y={`${center}`}
            >
              {progress}%
            </text>
          </svg>
          <span
            className='progress-timer'
            style={animateValue ? { opacity: '1' } : {}}
          >
            {timer}
          </span>
        </div>
      )}
    </div>
  )
}

ProgressPanel.propTypes = {
  size: propTypes.number,
  progress: propTypes.number,
  strokeWidth: propTypes.number,
  strokeOne: propTypes.string,
  strokeTwo: propTypes.string,
}

export default ProgressPanel
