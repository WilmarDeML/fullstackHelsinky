import React from 'react'

const Note = ({ name, exercises }) => {
  return <li>{name}: {exercises}</li>
}

export default Note