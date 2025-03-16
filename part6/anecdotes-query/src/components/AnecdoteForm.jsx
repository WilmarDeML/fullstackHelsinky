import { useMutation, useQueryClient } from '@tanstack/react-query'

import { postAnecdote } from '../requests'
import { useNotificationWithTime } from '../NotificationContext'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const notificationWithTime = useNotificationWithTime()

  const newNoteMutation = useMutation({ 
    mutationFn: postAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
      notificationWithTime(`You created '${newAnecdote.content}'`, 5000)
    },
    onError: (e) => {
      console.error(e.response.data.error ?? e.message)
      notificationWithTime(e.response.data.error ?? e.message, 5000)
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newNoteMutation.mutate({ content, votes: 0 })
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
