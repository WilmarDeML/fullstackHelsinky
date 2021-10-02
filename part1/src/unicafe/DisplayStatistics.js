import Display from '../components/Counter/Display'

const DisplayStatistics = ({ feedBacks }) => {

    const positive = feedBacks.all > 0 ? feedBacks.good * 100 / feedBacks.all : 0
    const negative = feedBacks.all > 0 ? feedBacks.bad * 100 / feedBacks.all : 0
    const neutral = feedBacks.all > 0 ? feedBacks.neutral * 100 / feedBacks.all : 0
    const average = ((positive/100 * feedBacks.good) - (negative/100 * feedBacks.bad)) / feedBacks.all
    return (
        <>
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
        </>
    )
}

export default DisplayStatistics