const anecdotesAtStart = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const toggleVotesOf = (state, id) => {
  return state.map(anecdote => {
    if (anecdote.id === id) {
      return {...anecdote, votes: anecdote.votes + 1}
    }
    return anecdote
  })
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('action', action)
  switch(action.type) {
    case 'TOGGLE_VOTES_OF':
      return toggleVotesOf(state, action.payload)
    case 'CREATE_ANECDOTE':
      return [...state, asObject(action.payload)]
    default:
      return state
  }
}

export default reducer