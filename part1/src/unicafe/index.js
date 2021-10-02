import { useState } from 'react'
import Button from '../components/Counter/Button'
import DisplayStatistics from './DisplayStatistics'

const Statistics = () => {
    
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
      
      <h1>Statistics</h1>
      {feedBacks.all === 0 ? <h3>No feedback given</h3> :
        <DisplayStatistics feedBacks={feedBacks} />
      }
    </div>
  )
}

export default Statistics