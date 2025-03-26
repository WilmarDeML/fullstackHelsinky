import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  query GetBooks {
    allBooks {
      id
      title
      author
      published
    }
  }
`

const Books = ({ show }) => {
  
  const { data, loading, error } = useQuery(GET_BOOKS)
  
  if (!show) return
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  const books = data.allBooks

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map((b) => (
            <tr key={b.id}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Books
