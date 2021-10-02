import { useState } from 'react'
import Button from '../components/Counter/Button'
import Statistics from './Statistics'

const Unicafe = () => {
    
  const [ feedBacks, setFeedBacks ] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0
  })
  
  const countFeedBack = (e) => {
      
      setFeedBacks({
          ...feedBacks,
          all: feedBacks.all + 1,
          [e.target.name]: feedBacks[e.target.name] + 1
      })
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={countFeedBack} text='good' />
      <Button onClick={countFeedBack} text='neutral' />
      <Button onClick={countFeedBack} text='bad' />
      
      {feedBacks.all === 0 ? <h3>No feedback given</h3> :
        <Statistics feedBacks={feedBacks} />
      }
    </div>
  )
}

export default Unicafe