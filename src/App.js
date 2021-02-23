import React from 'react'
import ProgressPanel from 'components/ProgressPanel/ProgressPanel'
import ControlPanel from 'components/ControlPanel/ControlPanel'
import 'App.scss'

function App() {
  return (
    <div className='app'>
      <ProgressPanel />
      <ControlPanel />
    </div>
  )
}

export default App
