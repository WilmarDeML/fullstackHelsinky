import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ filter, changeFilter, text }) => (
  <>
    {text} <input type="text" value={filter} onChange={e => changeFilter(e.target.value)} />
  </>
)

const Country = ({ country }) => (
  <>
    <h1>{country.name.common}</h1>
    <p>Capital {country.capital[0]}</p>
    <p>Area {country.area}</p>

    <h2>Languages</h2>
    <ul>
      {Object.values(country.languages).map(language => (
        <li key={language}>{language}</li>
      ))}
    </ul>
    <figure>
      <img src={country.flags.svg} alt={country.name.common} width={200} />
    </figure>
  </>
)

const Countries = ({ countries, filter, changeFilter }) => {

  if (!filter) {
    return
  }

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.trim()?.toLowerCase()))
  
  if (filteredCountries.length === 0) {
    return <p>No countries found</p>
  }

  if (filteredCountries.length === 1) {
    return <Country country={filteredCountries[0]} />
  }

  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify an other filter</p>
  }

  return (
    <>
      {filteredCountries.map(country => (
        <h3 key={country.cca2}>
          {country.name.common} 
          <button onClick={() => changeFilter(country.name.common)} style={{ marginLeft: 5 }}>
            Show
          </button>
        </h3>
      ))}
    </>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(res => {
      setCountries(res.data)
    })
  }, [])

  return (
    <>
      <Filter filter={filter} changeFilter={setFilter} text="find countries" />
      <Countries countries={countries} filter={filter} changeFilter={setFilter} />
    </>
  )
}

export default App
