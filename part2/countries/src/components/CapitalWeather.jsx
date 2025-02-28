import { useState, useEffect } from 'react'
import apisService from '../services/apis'

const CapitalWeather = ({ city }) => {
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

export default CapitalWeather