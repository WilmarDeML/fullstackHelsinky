import React, { useState } from 'react'
import Button from '../components/Counter/Button'
import Display from '../components/Counter/Display'
import anecdotes from './anecdotes'

const Anecdotes = () => {
  const [selected, setSelected] = useState(0)

  const handleClick = () => {
    // Retorna un número aleatorio entre 0 (incluido) y length de anecdotes (excluido)
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  return (
    <>
    <Display text={anecdotes[selected]} />
    <Button onClick={handleClick} text='Next anecdote' />
    </>
  )
}

export default Anecdotes

