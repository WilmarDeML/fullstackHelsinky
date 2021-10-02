import Statistic from './Statistic'

const Statistics = ({ feedBacks }) => {

    const positive = feedBacks.all > 0 ? feedBacks.good * 100 / feedBacks.all : 0
    const negative = feedBacks.all > 0 ? feedBacks.bad * 100 / feedBacks.all : 0
    const neutral = feedBacks.all > 0 ? feedBacks.neutral * 100 / feedBacks.all : 0
    const average = ((positive/100 * feedBacks.good) - (negative/100 * feedBacks.bad)) / feedBacks.all
    return (
        <table>
            <tr>
                <td colSpan='2'><h1>Statistics</h1></td>
            </tr>
            <Statistic 
                counter={feedBacks.good}
                text='Good'
            />
            <Statistic 
                counter={feedBacks.neutral}
                text='Neutral'
            />
            <Statistic 
                counter={feedBacks.bad}
                text='Bad'
            /> 
            <Statistic 
                counter={feedBacks.all}
                text='All'
            />
            <Statistic 
                counter={average}
                text='Average'
            />
            <Statistic 
                counter={positive}
                text='Positive'
                text2='%'
            />     
            <Statistic 
                counter={negative}
                text='Negative'
                text2='%'
            />      
            <Statistic 
                counter={neutral}
                text='Neutral'
                text2='%'
            />   
        </table>
    )
}

export default Statistics