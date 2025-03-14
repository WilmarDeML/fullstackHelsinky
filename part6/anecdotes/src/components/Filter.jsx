import { useDispatch } from 'react-redux'
import { filterChange } from '/src/reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    if (!event.target.value.trim()) {
      return dispatch(filterChange('ALL'))
    }
    dispatch(filterChange(event.target.value.trim()))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter