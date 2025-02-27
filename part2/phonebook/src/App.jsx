import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ filter, changeFilter, text }) => (
  <>
    {text} <input type="text" value={filter} onChange={changeFilter} />
  </>
)

const PersonForm = ({ submit, name, changeName, number, changeNumber }) => (
  <>
    <form onSubmit={submit}>
      <div>
        name: <input type="text" value={name} onChange={changeName} />
      </div>
      <div>
        number: <input type='text' value={number} onChange={changeNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </>
)

const Person = ({ person: { name, number } }) => (
  <p>
    {name} {number}
  </p>
)

const Persons = ({ persons, filter }) => {
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.trim()?.toLowerCase()))
  return (
    <>
      {filteredPersons.map(person => (
        <Person key={person.name} person={person} />
      ))}
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = newName.trim()
    const number = newNumber.trim()

    if (!name) {
      return alert('Please enter a name')
    }

    if (!number) {
      return alert('Please enter a number')
    }

    if (persons.some((person) => person.name === name)) {
      return alert(`${name} is already added to phonebook`)
    }

    setPersons([...persons, { name, number, id: persons[persons.length - 1].id + 1 }])
    setNewName('')
    setNewNumber('')
  }

  const changeFilter = e => setFilter(e.target.value)
  const changeName = e => setNewName(e.target.value)
  const changeNumber = e => setNewNumber(e.target.value)

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(res => res.data)
      .then(setPersons)
  }, [])

  return (
    <>
      <h1>Phonebook</h1>
      <Filter filter={filter} changeFilter={changeFilter} text="filter shown with" />

      <h2>Add a new</h2>
      <PersonForm submit={handleSubmit} 
        name={newName} changeName={changeName} 
        number={newNumber} changeNumber={changeNumber} 
      />
      
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </>
  )
}

export default App