import axios from 'axios'

const baseUrl = 'http://127.0.0.1:3001/anecdotes'

export const getAnecdotes = async () => {
  const resp = await axios.get(baseUrl)
  return resp.data
}

export const postAnecdote = async (newAnecdote) => {
  const resp = await axios.post(baseUrl, newAnecdote)
  return resp.data
}

export const putAnecdote = async ({ id, newAnecdote }) => {
  const resp = await axios.put(`${baseUrl}/${id}`, newAnecdote)
  return resp.data
}
