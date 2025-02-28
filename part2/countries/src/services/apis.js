import axios from 'axios'
const apiKey = import.meta.env.VITE_WEATHER_API_KEY

const getCountries = () => {
  return axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(res => res.data)
}

const getWeather = (city) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(res => res.data)
}

export default { getCountries, getWeather }