import { useState } from "react"
import Button from "./components/Counter/Button"

const SetValues = () => {
    const [ value, setValue ] = useState(10)
  
    const setToValue = (newValue) => {
      setValue(newValue)
    }
    
    const setToValue2 = newValue => () => setValue(newValue)
    return (
      <div>
        {value}
        <Button onClick={setToValue2(5000)} text='Five thousand' />
        <Button onClick={() => setToValue(1000)} text='Thousand' />
        <Button onClick={() => setToValue(0)} text='Reset' />
        <Button onClick={() => setToValue(value + 1)} text='Increment' />
        <Button onClick={setToValue2(value - 1)} text='Decrement' />
      </div>
    )
}

export default SetValues