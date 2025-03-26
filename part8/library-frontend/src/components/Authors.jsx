import { useQuery, gql } from "@apollo/client";

const GET_AUTHORS = gql`
  query GetAuthors {
    allAuthors {
      id
      name
      born
      bookCount
    }
  }
`

const Authors = ({ show }) => {
  
  const { data, loading, error } = useQuery(GET_AUTHORS)
  
  if (!show) return
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  const authors = data.allAuthors

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Authors
