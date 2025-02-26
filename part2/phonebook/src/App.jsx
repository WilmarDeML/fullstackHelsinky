import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
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

    setPersons([...persons, { name, number }])
    setNewName('')
    setNewNumber('')
  }

  return (
    <>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input type='text' value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {!filter ? persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      )) : persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase())).map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </>
  )
}

export default App