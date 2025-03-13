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

const App = ({store}) => {

  return (
    <>
      <h1>Give feedback</h1>
      <Button text='Good' onClick={() => store.dispatch({type: 'GOOD'})} />
      <Button text='Neutral' onClick={() => store.dispatch({type: 'OK'})} />
      <Button text='Bad' onClick={() => store.dispatch({type: 'BAD'})} />
      <Button text='Reset stats' onClick={() => store.dispatch({type: 'ZERO'})} />

      <h1>Statistics</h1>
      <Statistics 
        good={store.getState().good} 
        neutral={store.getState().ok} 
        bad={store.getState().bad}
      />
    </>
  )
}

export default App