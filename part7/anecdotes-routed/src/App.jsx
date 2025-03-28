import { useState } from 'react'
import { Link, Route, Routes, useMatch, useNavigate } from 'react-router-dom'
import { useField } from './hooks'
import { Table } from 'react-bootstrap'

const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    <div>
      <Link to='/' style={padding}>anecdotes</Link>
      <Link to='/create' style={padding}>create new</Link>
      <Link to='/about' style={padding}>about</Link>
    </div>
  )
}

const AnecdoteDetail = ({ anecdote }) => (
  <>
    <h2>{anecdote.content}</h2>
    <p>has {anecdote.votes} votes</p>
    <p>for more info see <a href={anecdote.url}>{anecdote.url}</a></p>
  </>
)

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <Table striped>
      <tbody>
        {anecdotes.map(anecdote =>
          <tr key={anecdote.id} >
            <td>
              <Link to={`/anecdotes/${anecdote.id}`}>
                {anecdote.content}
              </Link>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  </div>
)

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://fullstackopen.com/'>Full Stack Open</a>.

    See <a href='https://github.com/WilmarDeML/fullstackHelsinky/tree/main/part7/anecdotes-routed'>https://github.com/WilmarDeML/fullstackHelsinky/tree/main/part7/anecdotes-routed</a> for the source code.
  </div>
)

const CreateNew = (props) => {
  const {reset:resetCont, ...content} = useField('text', 'content')
  const {reset:resetAuth, ...author} = useField('text', 'author')
  const {reset:resetUrl, ...url} = useField('text', 'url')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      url: url.value,
      votes: 0
    })
    navigate('/')
    props.setNotification(`a new anecdote '${content.value}' created`)
    setTimeout(() => props.setNotification(''), 5000)
  }

  const handleReset = (e) => {
    resetCont()
    resetAuth()
    resetUrl()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>content <input {...content} /></div>
        <div>author <input {...author} /></div>
        <div>url for more info <input {...url} /></div>
        <button>create</button>
        <button type='button' onClick={handleReset}>reset</button>
      </form>
    </div>
  )
}

const Notification = ({ notification }) => {
  
  if (!notification) {
    return
  }

  const style = {
    border: 'solid red',
    padding: 10,
    borderWidth: 2
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      url: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      url: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  const match = useMatch('/anecdotes/:id')
  const anecdote = anecdoteById(Number(match?.params?.id))

  return (
    <div className='container'>
      <h1>Software anecdotes</h1>
      <Menu />

      <Notification notification={notification} />

      <Routes>
        <Route path='/anecdotes/:id' element={<AnecdoteDetail anecdote={anecdote} />} />
        <Route path='/' element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path='/create' element={<CreateNew addNew={addNew} setNotification={setNotification} />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App