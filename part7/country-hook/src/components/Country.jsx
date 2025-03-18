import CapitalWeather from './CapitalWeather'

const Country = ({ country }) => {

  if (!country) {
    return <p>No found...</p>
  }

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>Capital {country.capital[0]}</p>
      <p>Area {country.area}</p>
      <p>Population {country.population}</p>

      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <figure>
        <img src={country.flags.svg} alt={country.name.common} width={200} />
      </figure>
      <CapitalWeather city={country.capital[0]} />
    </>
  )
}

export default Country
