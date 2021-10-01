import { React, useState } from 'react'
import Button from '../components/Counter/Button'
import Display from '../components/Counter/Display'

const UnicafeFeedBacks = () => {
    
    const [ feedBacks, setFeedBacks ] = useState({
      good: 0,
      neutral: 0,
      bad: 0
    })
    
    const countFeedBack = (e) => {
        console.log(e.target.name)
        setFeedBacks({
            ...feedBacks,
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
        <Display 
          counter={feedBacks.good}
          text='Good'
        />
        <Display 
          counter={feedBacks.neutral}
          text='Neutral'
        />
        <Display 
          counter={feedBacks.bad}
          text='Bad'
        />        
      </div>
    )
  }
  export default UnicafeFeedBacks