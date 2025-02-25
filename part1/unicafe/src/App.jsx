import { useState } from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good+neutral+bad > 0) {
    return (
      <>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {good+neutral+bad}</p>
        <p>Average {(good-bad) / (good+neutral+bad)}</p>
        <p>Positive {(good * 100) / (good+neutral+bad)} %</p>
      </>
    )    
  }

  return (
    <>
      <p>No feedbacks given</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give feedback</h1>
      <Button text='Good' onClick={() => setGood(good+1)} />
      <Button text='Neutral' onClick={() => setNeutral(neutral+1)} />
      <Button text='Bad' onClick={() => setBad(bad+1)} />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App