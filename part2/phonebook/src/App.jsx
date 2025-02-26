import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>number: <input type='text' value={newNumber} onChange={(e) => setNewNumber(e.target.value)} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </>
  )
}

export default App