import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import { getAnecdotes, putAnecdote } from './requests'
import { useNotificationWithTime } from './NotificationContext'

import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = () => {
  const notificationWithTime = useNotificationWithTime()
  const queryClient = useQueryClient()

  const updateAnecdoteMutation = useMutation({ 
    mutationFn: putAnecdote,
    onSuccess: ({ id, content }) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(
        ['anecdotes'], 
        anecdotes
          .map(a => a.id === id ? { ...a, votes: a.votes + 1 } : a)
          .sort((a, b) => b.votes - a.votes)
      )
      notificationWithTime(`You voted '${content}'`, 5000)
    },
    onError: (e) => {
      console.error(e.response.data.error ?? e.message)
      notificationWithTime(e.response.data.error ?? e.message, 5000)
    }
  })

  const handleVote = (anecdote) => {
    const newAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    updateAnecdoteMutation.mutate({ id: anecdote.id, newAnecdote })
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 2
  })

  console.log('result', JSON.parse(JSON.stringify(result)))
  if ( result.isLoading ) {
    return <div>loading data...</div>
  }

  if ( result.isError ) {
    return <strong>anecdote service not available due to problems in server</strong>
  }

  const anecdotes = result.data.sort((a, b) => b.votes - a.votes)

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
