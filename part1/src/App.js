import { React } from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'
import Hello from './Hello'
import Counter from './components/Counter/Counter'

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

      <h1>Greetings</h1>
      <Hello name="Sandra" age={26 - 4} />
      <Hello name={name} age={age} />

      <h1>Counter</h1>
      <Counter />
    </div>
  )
}
export default App