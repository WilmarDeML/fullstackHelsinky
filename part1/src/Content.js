import { React } from 'react'
import Part from './Part'

const Content = ({ course }) => (
    
    <>
        { course.parts.map(part => <Part part={part} />)}
    </>
)

export default Content;