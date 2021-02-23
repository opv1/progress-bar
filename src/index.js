import React from 'react'
import ReactDOM from 'react-dom'
import AppState from 'context/AppState'
import App from 'App'
import 'index.scss'
import reportWebVitals from 'reportWebVitals'

ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
  document.getElementById('root')
)

reportWebVitals()
