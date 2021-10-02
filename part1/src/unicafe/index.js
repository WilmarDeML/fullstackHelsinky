import { React, useState } from 'react'
import Button from '../components/Counter/Button'
import Display from '../components/Counter/Display'

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
    const positive = feedBacks.all > 0 ? feedBacks.good * 100 / feedBacks.all : 0
    const negative = feedBacks.all > 0 ? feedBacks.bad * 100 / feedBacks.all : 0
    const neutral = feedBacks.all > 0 ? feedBacks.neutral * 100 / feedBacks.all : 0

    const average = ((positive/100 * feedBacks.good) - (negative/100 * feedBacks.bad)) / feedBacks.all

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
        <Display 
          counter={feedBacks.all}
          text='All'
        />
        <Display 
          counter={average}
          text='Average'
        />
        <Display 
          counter={positive}
          text='Positive'
          text2='%'
        />     
        <Display 
          counter={negative}
          text='Negative'
          text2='%'
        />      
        <Display 
          counter={neutral}
          text='Neutral'
          text2='%'
        />   
      </div>
    )
  }

  export default Statistics