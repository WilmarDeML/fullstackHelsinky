import { useMutation, gql } from '@apollo/client'

const ADD_BOOK = gql`
  mutation AddBook($title: String!, $published: Int!, $author: String!, $genres: [String!]!) {
    addBook(title: $title, published: $published, author: $author, genres: $genres) {
      title
      author
    }
  }
`

const NewBook = ({ show }) => {
  const [addBook, { data, loading, error }] = useMutation(ADD_BOOK,
    { refetchQueries: ['GetBooks', 'GetAuthors'] }
  )

  let title, author, published, genre, genres

  if (!show) return
  if (loading) return <p>Submitting...</p>
  if (error) return <p>Submission error! {error.message}</p>

  if (data) {
    console.log('add book success', data)
  }

  const submit = async (event) => {
    event.preventDefault()
    
    await addBook({
      variables: {
        title: title.value.trim(),
        author: author.value.trim(),
        published: Number(published.value.trim()),
        genres: genres.value.trim().split(' ')
      }
    })
  }

  const addGenre = () => {
    if (!genre.value.trim()) return
    genres.value += ' ' + genre.value
    genre.value = ''
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          title
          <input ref={node => { title = node }} />
        </div>
        <div>
          author
          <input ref={node => { author = node }} />
        </div>
        <div>
          published
          <input type="number" ref={node => { published = node }} />
        </div>
        <div>
          <input ref={node => { genre = node }} />
          <button onClick={addGenre} type="button">
            add genre
          </button>
        </div>
        <div>
          genres: 
          <input ref={node => { genres = node }} disabled />
        </div>
        <button type="submit">create book</button>
      </form>
    </div>
  )
}

export default NewBook