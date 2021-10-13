import React from 'react'
import Course from './components/Course'

const App = ({ courses }) => (
    <ul>
      {courses.map(
        course =>
         <Course key={course.id} course={course} />
      )}
    </ul>
) 


export default App;
