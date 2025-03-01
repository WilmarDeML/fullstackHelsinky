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
        <Person key={person.id} person={person} deletePerson={deletePerson} />
      ))}
    </>
  )
}

export default Persons