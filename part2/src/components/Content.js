import Part from './Part'

const Content = ({parts}) => {
    const total = parts.reduce((acc, next) => acc + next.exercises, 0)
    return (
        <ul>
            {parts.map(part => (
                <Part 
                    key={part.id} 
                    name={part.name} 
                    exercises={part.exercises} 
                />
            ))}
            <strong><li>total of {total} exercises</li></strong>
        </ul>
    )
}

export default Content