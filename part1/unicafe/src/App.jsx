import { useState } from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good+neutral+bad
  if (total > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text='Good' value={good} />
          <StatisticLine text='Neutral' value={neutral} />
          <StatisticLine text='Bad' value={bad} />
          <StatisticLine text='All' value={total} />
          <StatisticLine text='Average' value={(good-bad) / total} />
          <StatisticLine text='Positive' value={(good * 100) / total} />
        </tbody>
      </table>
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