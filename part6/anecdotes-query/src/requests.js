import axios from 'axios'

const baseUrl = 'http://127.0.0.1:3001/anecdotes'

export const getAnecdotes = async () => {
  const resp = await axios.get(baseUrl)
  return resp.data
}
