import React from 'react'
import ReactDOM from 'react-dom'
import { AppState } from 'context/AppState'
import App from 'App'
import reportWebVitals from 'reportWebVitals'
import 'index.scss'

ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
  document.getElementById('root')
)

reportWebVitals()
