import React from 'react'

const Context = React.createContext({
  folders: [],
  notes: [],
  deleteNote: () => {},
})

export default Context
