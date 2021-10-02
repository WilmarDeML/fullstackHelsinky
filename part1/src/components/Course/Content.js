import { React } from 'react'
import Part from './Part'

const Content = ({ course }) => (    
    <>
        { course.parts.map((part, i) => <Part part={part} key={i}/>)}
    </>
)

export default Content;