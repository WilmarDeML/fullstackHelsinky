import { useState, useEffect } from 'react'
import personService from './services/persons'

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

const Person = ({ person: { name, number, id }, deletePerson }) => (
  <p>
    {name} {number} <button onClick={() => deletePerson(id)}>delete</button>
  </p>
)

const Persons = ({ persons, filter, deletePerson }) => {
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.trim()?.toLowerCase()))
  return (
    <>
      {filteredPersons.map(person => (
        <Person key={person.name} person={person} deletePerson={deletePerson} />
      ))}
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const deletePerson = id => {
    const personToDelete = persons.find(person => person.id === id)
    return window.confirm(`Delete ${personToDelete.name}?`)
      ? personService.deleteOne(id)
        .then(() => setPersons(persons.filter(person => person.id !== id)))
      : null
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = newName.trim()
    const number = newNumber.trim()

    if (!name || !number) {
      return alert(!name ? 'Please enter a name' : 'Please enter a number')
    }

    const personFound = persons.find(person => person.name === name)

    if (personFound) {
      if(window.confirm(`${name} is already added to phonebook, replace the old number with a new one?`)) {
        personService.update(personFound.id, { ...personFound, number })
          .then(() => {
            setPersons(persons.map(person => person.id === personFound.id ? { ...person, number } : person))
            setNewName('')
            setNewNumber('')
          })
      }
      return
    }

    personService.create({ name, number })
      .then(newPerson => setPersons([...persons, newPerson]))

    setNewName('')
    setNewNumber('')
  }

  const changeFilter = e => setFilter(e.target.value)
  const changeName = e => setNewName(e.target.value)
  const changeNumber = e => setNewNumber(e.target.value)

  useEffect(() => {
    personService.getAll().then(setPersons)
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
      <Persons persons={persons} filter={filter} deletePerson={deletePerson} />
    </>
  )
}

export default App