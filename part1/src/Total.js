import { React } from 'react'

const Total = ({ parts }) => {
    const initialReduce = 0;
    const total = parts.reduce(((suma, part) => suma + part.exercises), initialReduce)

    return(
        <p>
            Number of exercises {total}
        </p>
    )
}

export default Total