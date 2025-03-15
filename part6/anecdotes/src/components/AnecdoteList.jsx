import { useSelector, useDispatch } from 'react-redux'

import { toggleVotesOf } from '/src/reducers/anecdoteReducer'

const AnecdoteList = () => {

  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === 'ALL') {
      return anecdotes
    }
    return anecdotes.filter(({content}) => content.toLowerCase().includes(filter.toLowerCase()))
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(toggleVotesOf(id))
  }

  return (
    <>
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
    </>
  )
}

export default AnecdoteList