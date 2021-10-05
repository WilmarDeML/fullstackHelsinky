import React, { useState } from 'react'
import Button from '../components/Counter/Button'
import Display from '../components/Counter/Display'
import anecdotes from './anecdotes'

const Anecdotes = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes ] = useState(0)
  const handleClick = () => {
    setVotes(0)
    // Retorna un número aleatorio entre 0 (incluido) y length de anecdotes (excluido)
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const handleOnClick = () => {
    setVotes(votes + 1)
    anecdotes[selected].votes += 1
  }

  return (
    <>
    <h1>Anecdote of the day</h1>
    <strong><Display text={anecdotes[selected].text} /></strong>
    <strong><Display text={`Has ${anecdotes[selected].votes} votes`} /></strong>
    <Button onClick={handleOnClick} text='Vote' />
    <Button onClick={handleClick} text='Next anecdote' />

    <h1>Anecdote with most Votes</h1>
    <strong><Display 
      text={anecdotes.reduce((acc, act) => acc.votes > act.votes ? acc : act).text} 
    /></strong>
    </>
  )
}

export default Anecdotes

