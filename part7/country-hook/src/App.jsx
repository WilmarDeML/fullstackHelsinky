import Country from './components/Country'
import { useCountry } from './hooks'

const Filter = ({ filter, changeFilter, text }) => (
  <>
    {text} <input type="text" value={filter} onChange={e => changeFilter(e.target.value)} />
  </>
)

const App = () => {
  const country = useCountry()

  return (
    <>
      <Filter filter={country.filter} changeFilter={country.changeFilter} text="find countries" />
      <Country country={country.countryData} />
    </>
  )
}

export default App
