import ReactDOM from 'react-dom'
import { AppProvider } from 'context/AppState'
import App from 'App'

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root'),
)
