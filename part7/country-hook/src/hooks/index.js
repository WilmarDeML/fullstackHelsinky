import apisService from '../services/apis'
import { useEffect, useState } from 'react'

export const useCountry = () => {
  const [countryData, setCountryData] = useState(null)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    if (!filter) return
    
    apisService.getCountryByName(filter)
      .then((data) => setCountryData(data))
      .catch(() => setCountryData(null))
  }, [filter])

  const changeFilter = (filter) => {
    setFilter(filter)
  }

  return {
    countryData,
    changeFilter,
    filter
  }
}
