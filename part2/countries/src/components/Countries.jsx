import { useState, useEffect } from 'react'
import apisService from '../services/apis'

const Capital = ({ city }) => {
  const [weather, setWeather] = useState({})
  const [imgUrl, setImgUrl] = useState(null)

  useEffect(() => {
    apisService.getWeather(city).then(data => {
      setWeather(data)
      setImgUrl(`https://openweathermap.org/img/wn/${data.weather[0]?.icon}@2x.png`)
    })    
  }, [])

  return (
    <>
      <h2>Weather in {city}</h2>
      <p>Temperature {weather.main?.temp} Celsius</p>
      <figure>
        <img src={imgUrl} alt={weather[0]?.description} width={150} />
      </figure>
      <p>Wind {weather.wind?.speed} m/s</p>
    </>
  )
}

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
    <Capital city={country.capital[0]} />
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

export default Countries