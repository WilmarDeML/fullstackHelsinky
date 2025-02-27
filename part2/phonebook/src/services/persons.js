import axios from 'axios'

const getAll = () => {
  return axios.get('http://localhost:3001/persons')
    .then(res => res.data)
}

const create = (person) => {
  return axios.post('http://localhost:3001/persons', person)
    .then(res => res.data)
}

export default { getAll, create }