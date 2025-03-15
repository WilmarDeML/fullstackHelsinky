import { useDispatch } from 'react-redux'

import anecdoteService from '/src/services/anecdotes'
import  { createAnecdote } from '/src/reducers/anecdoteReducer'
import { notificationChange } from '/src/reducers/notificationReducer'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const addAnecdote = async (e) => {
    e.preventDefault()
    const anecdote = e.target.anecdote.value
    const newAnecdote = await anecdoteService.createNew(anecdote)
    e.target.anecdote.value = ''
    dispatch(createAnecdote(newAnecdote))
    dispatch(notificationChange(`You created '${anecdote}'`))
    setTimeout(() => {
      dispatch(notificationChange(''))
    }, 5000)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" required /></div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm