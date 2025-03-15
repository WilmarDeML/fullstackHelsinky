import { configureStore } from '@reduxjs/toolkit'

import anecdoteReducer, { setAnecdotes } from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

import serviceAnecdotes from './services/anecdotes'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  }
});

const initialState = await serviceAnecdotes.getAll()
store.dispatch(setAnecdotes(initialState))

export default store
