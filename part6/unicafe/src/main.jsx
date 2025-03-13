import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { createStore } from 'redux'

import counterReducer from './reducer'

const store = createStore(counterReducer)

const root = createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(
    <StrictMode>
      <App store={store} />
    </StrictMode>,
  )
}

renderApp()
store.subscribe(renderApp)


