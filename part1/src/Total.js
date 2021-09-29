import { React } from 'react'

const Total = ({ course }) => (
    
    <p>
        Number of exercises {
            course.parts.reduce(((suma, part) => suma + part.exercises), 0)
        }
    </p>
)

export default Total