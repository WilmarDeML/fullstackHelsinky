import { createSlice, current } from '@reduxjs/toolkit'

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
    createAnecdote (state, action) {
      console.log('action', action)
      return [...state, asObject(action.payload)].sort((a, b) => b.votes - a.votes)
    },
    toggleVotesOf (state, action) {
      console.log('state', current(state))
      return toggleVotes(state, action.payload)
    },
    appendAnecdote (state, action) {
      state.push(action.payload)
    },
    setAnecdotes(_state, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, toggleVotesOf, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export default anecdoteSlice.reducer