import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const obtainRandom = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const [selected, setSelected] = useState(obtainRandom)
  const [votes, setVotes] = useState(anecdotes.map(() => 0))
  const [indexWithMostVotes, setIndexWithMostVotes] = useState(-1)

  const nextAnecdote = () => {
    setSelected(obtainRandom)
  }

  const voteAnecdote = () => {
    const copyVotes = [...votes]
    copyVotes[selected]++

    if (indexWithMostVotes < 0 || copyVotes[selected] >= copyVotes[indexWithMostVotes]) {
      setIndexWithMostVotes(selected)
    }

    setVotes(copyVotes)
  }

  const Anecdote = ({anecdotes, index, votes}) => {
    if (index < 0) {
      return (
        <p>No anecdotes have been voted</p>
      )
    }

    return (
      <div>
        <p>{anecdotes[index]}</p>
        <p>Has {votes[index]} {votes[index] > 1 ? 'votes' : 'vote'}</p>
      </div>
    )
  }
  
  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes={anecdotes} index={selected} votes={votes} />

      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={nextAnecdote}>Next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <Anecdote anecdotes={anecdotes} index={indexWithMostVotes} votes={votes} />
    </>
  )
}

export default App