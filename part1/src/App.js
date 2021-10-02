import { React } from 'react'
import Header from './components/Course/Header'
import Content from './components/Course/Content'
import Total from './components/Course/Total'
import Hello from './components/Hello'
import Counter from './components/Counter/Counter'
import Remember from './components/Remember/index'
import SetValues from './components/SetValues/SetValues'
import Unicafe from './unicafe'
import Anecdotes from './anecdotes'
const App = () => {
  
  const course = {

    name: 'Half Stack application development',

    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },

      {
        name: 'Using props to pass data',
        exercises: 7
      },

      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const age = 38
  const name= 'Wilmar'

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />

      <Anecdotes />

      <Unicafe />

      <h1>Set Values</h1>
      <SetValues />
      
      <h1>Counter</h1>
      <Counter />
      <Remember />

      <h1>Greetings</h1>
      <Hello name="Sandra" age={26 - 3} />
      <Hello name={name} age={age} />
    </div>
  )
}
export default App