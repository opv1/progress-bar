import ReactDOM from 'react-dom'
import { AppProvider } from 'context/AppState'
import App from 'App'
import reportWebVitals from 'reportWebVitals'
import 'index.scss'

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
)

reportWebVitals()
