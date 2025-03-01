import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
  return axios.get(baseUrl)
    .then(res => res.data)
}

const create = (person) => {
  return axios.post(baseUrl, person)
    .then(res => res.data)
}

const deleteOne = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
    .then(res => res.data) // Retornará el objeto que se ha borrado
}

const update = (id, person) => {
  return axios.put(`${baseUrl}/${id}`, person)
    .then(res => res.data)
}

export default { getAll, create, deleteOne, update }