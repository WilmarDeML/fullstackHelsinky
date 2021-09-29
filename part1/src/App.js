import { React } from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
    const course = 'Half Stack application development'
    // const part1 = 'Fundamentals of React'
    // const exercises1 = 10
    // const part2 = 'Using props to pass data'
    // const exercises2 = 7
    // const part3 = 'State of a component'
    // const exercises3 = 14
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
    const total = part1.exercises + part2.exercises + part3.exercises
    return (
      <div>
        <Header course={course} />
        <Content 
          part1={part1.name}
          part2={part2.name}
          part3={part3.name}
          exercises1={part1.exercises}
          exercises2={part2.exercises}
          exercises3={part3.exercises}
        />
        <Total total={total} />
      </div>
    )
}
export default App