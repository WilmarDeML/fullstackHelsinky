import { useState } from 'react'
import Display from './Display'
import Button from './Button'

const Counter = () => {
    const [ counter, setCounter ] = useState(0)

    const increaseByOne = () => setCounter(counter + 1)
    const setToZero = () => setCounter(0)
    const decreaseByOne = () => setCounter(counter - 1)

    return (
        <>
        <Display counter={counter} />
        <Button onClick={decreaseByOne} text='minus' />           
        <Button onClick={setToZero} text='zero' />     
        <Button onClick={increaseByOne} text='plus' />
        </>
    )
}

export default Counter