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
        <Button
            handleClick={increaseByOne}
            text='plus'
        />
        <Button
            handleClick={setToZero}
            text='zero'
        />     
        <Button
            handleClick={decreaseByOne}
            text='minus'
        />           
        </>
    )
}

export default Counter