import { useState, useEffect } from 'react'
import personService from './services/persons'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')
  const [error, setError] = useState(false)

  const addNotification = (message, err) => {
    setNotificationMessage(message)
    setError(err)
    setTimeout(() => setNotificationMessage(''), 5000)
  }

  const deletePerson = id => {
    const personToDelete = persons.find(person => person.id === id)
    return window.confirm(`Delete ${personToDelete.name}?`)
      ? personService.deleteOne(id)
        .then(() => setPersons(persons.filter(person => person.id !== id)))
        .catch((err) => {
          addNotification(`Information of ${personToDelete.name} has already been removed from server`, err)
          console.error(err.message)
        })
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
            addNotification(`Updated ${personFound.name}`)
            setPersons(persons.map(person => person.id === personFound.id ? { ...person, number } : person))
            setNewName('')
            setNewNumber('')
          })
          .catch((err) => {
            const errorMessage = err.response?.data?.error ?? err.message
            addNotification(errorMessage, err)
            console.error(errorMessage)
          })
      }
      return
    }

    personService.create({ name, number })
      .then(newPerson => {
        addNotification(`Added ${newPerson.name}`)
        setPersons([...persons, newPerson])
        setNewName('')
        setNewNumber('')
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.error ?? err.message
        addNotification(errorMessage, err)
        console.error(errorMessage)
      })
  }

  const changeFilter = e => setFilter(e.target.value)
  const changeName = e => setNewName(e.target.value)
  const changeNumber = e => setNewNumber(e.target.value)

  useEffect(() => {
    personService.getAll().then(setPersons)
  }, [])

  return (
    <div className="app" >
      <h1>Phonebook</h1>
      <Notification message={notificationMessage} err={error} />
      <Filter filter={filter} changeFilter={changeFilter} text="filter shown with" />

      <h2>Add a new</h2>
      <PersonForm submit={handleSubmit} 
        name={newName} changeName={changeName} 
        number={newNumber} changeNumber={changeNumber} 
      />
      
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} deletePerson={deletePerson} />
    </div>
  )
}

export default App