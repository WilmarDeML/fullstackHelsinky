import { createSlice, current } from '@reduxjs/toolkit'

import anecdoteService from '/src/services/anecdotes'

import { notificationChange } from '/src/reducers/notificationReducer'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const toggleVotes = (state, id) => {
  return state
    .map(anecdote => {
      if (anecdote.id === id) {
        return {...anecdote, votes: anecdote.votes + 1}
      }
      return anecdote
    })
    .sort((a, b) => b.votes - a.votes)
}

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    appendAnecdote (state, action) {
      console.log('action', action)
      state.push(action.payload)
    },
    toggleVotesOf (state, action) {
      console.log('state', current(state))
      return toggleVotes(state, action.payload)
    },
    setAnecdotes(_state, action) {
      return action.payload.sort((a, b) => b.votes - a.votes)
    }
  }
})

export const { toggleVotesOf, setAnecdotes, appendAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
    dispatch(notificationChange(`You created '${newAnecdote.content}'`))
    setTimeout(() => {
      dispatch(notificationChange(''))
    }, 5000)
  }
}

export const toggleVotesOfAnecdote = id => {
  return async (dispatch, getState) => {
    const anecdoteFound = getState().anecdotes.find(anecdote => anecdote.id === id)
    const newAnecdote = { ...anecdoteFound, votes: anecdoteFound.votes + 1 }
    const updatedAnecdote = await anecdoteService.updateVotes(id, newAnecdote)
    dispatch(toggleVotesOf(id))
    dispatch(notificationChange(`You voted '${updatedAnecdote.content}'`))
    setTimeout(() => {
      dispatch(notificationChange(''))
    }, 5000)
  }
}

export default anecdoteSlice.reducer