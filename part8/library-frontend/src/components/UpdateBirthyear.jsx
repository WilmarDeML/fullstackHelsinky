import { useMutation, gql } from '@apollo/client'

const UPDATE_AUTHOR = gql`
  mutation UpdateAuthor($name: String!, $setBornTo: Int) {
    editAuthor(name: $name, setBornTo: $setBornTo) {
      name
      born
    }
  }
`

const UpdateBirthyear = ({ show, authors }) => {
  
  const [updateAuthor, { data, loading, error }] = useMutation(UPDATE_AUTHOR,
    { refetchQueries: ['GetAuthors'] }
  )

  let birthyear, name

  if (!show) return
  if (loading) return <p>Submitting...</p>
  if (error) return <p>Submission error! {error.message}</p>

  if (data) {
    console.log('update author success', data)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateAuthor({
      variables: {
        name: name.value,
        setBornTo: Number(birthyear.value)
      }
    })
  }

  return (
    <>
      <label>
        <h2>Set birthyear</h2>
        <select ref={node => { name = node }}>
          {authors.map((a) => (
            <option key={a.id} value={a.name}>{a.name}</option>
          ))}
        </select>
      </label>
      <form onSubmit={handleSubmit}>
        born: <input type="number" ref={node => { birthyear = node }} /> <br />
        <button type="submit">update author</button>
      </form>
    </>
  )
}

export default UpdateBirthyear