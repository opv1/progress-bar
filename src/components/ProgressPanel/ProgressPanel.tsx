import React, { useContext, useState, useRef, useEffect } from 'react'
import { AppContext } from 'context/AppState'
import 'components/ProgressPanel/ProgressPanel.scss'

const ProgressPanel: React.FC = () => {
  const { state } = useContext(AppContext)
  const [offset, setOffset] = useState<number>(0)
  const circleRef = useRef<SVGCircleElement>(null)

  const center = state.size / 2
  const radius = state.size / 2 - state.strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const progressOffset = ((100 - state.progress) / 100) * circumference
    setOffset(progressOffset)
  }, [state.progress, circumference, offset, setOffset])

  return (
    <div className='progress-panel'>
      {state.hide ? (
        <span className='progress-hide' style={{ width: `${state.size}px` }}>
          Progress block is hidden!
        </span>
      ) : (
        <div className='progress-block' style={{ width: `${state.size}px` }}>
          <span
            className='progress-done'
            style={state.doneAnimate ? { opacity: '1' } : {}}
          >
            Done!
          </span>
          <svg className='progress-ring' width={state.size} height={state.size}>
            <circle
              className='progress-ring__inner'
              stroke={state.strokeInner}
              strokeWidth={state.strokeWidth}
              cx={center}
              cy={center}
              r={radius}
            />
            <circle
              className='progress-ring__outer'
              stroke={state.strokeOuter}
              strokeWidth={state.strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              cx={center}
              cy={center}
              r={radius}
              ref={circleRef}
              transform={`rotate(-90, ${center}, ${center})`}
            />
            <text
              className='progress-ring__percent'
              x={`${center}`}
              y={`${center}`}
            >
              {state.progress}%
            </text>
          </svg>
          <span
            className='progress-timer'
            style={
              state.animateValue && Number(state.animateValue) !== 0
                ? { opacity: '1' }
                : {}
            }
          >
            {state.timer}
          </span>
        </div>
      )}
    </div>
  )
}

export default ProgressPanel
