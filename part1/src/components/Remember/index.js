// import React from 'react'
import { useState } from 'react'
import History from './History'
import Button from '../Counter/Button'

const Remember = () => {

    const [ left, setLeft ] = useState(0)
    const [ right, setRight ] = useState(0)
    const [ allClicks, setAll ] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll([...allClicks, 'R'])
        setRight(right + 1)
    }

    return (
        <div>
            {left}
            <Button onClick={handleLeftClick} text='left' />
            <Button onClick={handleRightClick} text='right' />
            {right}
            <History allClicks={allClicks} />
        </div>
    )
}

export default Remember