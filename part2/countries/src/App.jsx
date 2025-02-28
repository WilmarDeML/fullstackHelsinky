import { useState, useEffect } from 'react'
import apisService from './services/apis'
import Countries from './components/Countries'

const Filter = ({ filter, changeFilter, text }) => (
  <>
    {text} <input type="text" value={filter} onChange={e => changeFilter(e.target.value)} />
  </>
)

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    apisService.getCountries().then((data) => setCountries(data))
  }, [])

  return (
    <>
      <Filter filter={filter} changeFilter={setFilter} text="find countries" />
      <Countries countries={countries} filter={filter} changeFilter={setFilter} />
    </>
  )
}

export default App
