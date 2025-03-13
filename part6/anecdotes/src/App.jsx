import { useSelector, useDispatch } from 'react-redux'

const toggleVotesOf = (id) => ({
  type: 'TOGGLE_VOTES_OF',
  payload: id
})

const createAnecdote = (anecdote) => ({
  type: 'CREATE_ANECDOTE',
  payload: anecdote
})

const App = () => {
  const anecdotes = useSelector(state => state.anecdotes.sort((a, b) => b.votes - a.votes))
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(toggleVotesOf(id))
  }

  const addAnecdote = (e) => {
    e.preventDefault()
    const anecdote = e.target.anecdote.value
    dispatch(createAnecdote(anecdote))
    e.target.anecdote.value = ''
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" required /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App