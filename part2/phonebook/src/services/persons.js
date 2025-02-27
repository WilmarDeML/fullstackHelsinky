import axios from 'axios'

const getAll = () => {
  return axios.get('http://localhost:3001/persons')
    .then(res => res.data)
}

const create = (person) => {
  return axios.post('http://localhost:3001/persons', person)
    .then(res => res.data)
}

const deleteOne = (id) => {
  return axios.delete(`http://localhost:3001/persons/${id}`)
    .then(res => res.data) // Retornará el objeto que se ha borrado
}

const update = (id, person) => {
  return axios.put(`http://localhost:3001/persons/${id}`, person)
    .then(res => res.data)
}

export default { getAll, create, deleteOne, update }