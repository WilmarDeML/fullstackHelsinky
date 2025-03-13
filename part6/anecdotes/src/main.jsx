import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import anecdoteReducer from './reducers/anecdoteReducer'
import App from './App.jsx'

const rootReducer = combineReducers({
  anecdotes: anecdoteReducer // <-- note reducer forms state.notes
});

const store = createStore(rootReducer)

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  )
