import React from 'react'
import ProgressPanel from 'components/ProgressPanel/ProgressPanel'
import ControlPanel from 'components/ControlPanel/ControlPanel'
import 'App.scss'

const App: React.FC = () => {
  return (
    <div className='app'>
      <ProgressPanel />
      <ControlPanel />
    </div>
  )
}

export default App
