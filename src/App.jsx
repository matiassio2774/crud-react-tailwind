import React, { useEffect, useState } from 'react'
import './App.css'
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import { v4 as uuidv4 } from 'uuid'
import EditUserForm from './components/EditUserForm'

function App() {

  const userData = [
    {
      id: 0,
      nombre: 'Ada',
      apellido: 'Lovelace',
      telefono: '12345678',
      email: 'ada@gmail.com'
    },
    {
      id: 1,
      nombre: 'Ariel',
      apellido: 'Gomez',
      telefono: '33215126',
      email: 'arielgomez@gmail.com'
    },
    {
      id: 2,
      nombre: 'Lucas',
      apellido: 'Ashelr',
      telefono: '12345678',
      email: 'lucas.a@gmail.com'
    }
  ]

  const [users, setUsers] = useState([])
  const [defaultUsers, setDefaultUsers] = useState([])
  const [addingUser, setAddingUser] = useState(false)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    id: null, nombre: '', apellido: '', telefono:'', email: ''
  })
  const [search, setSearch] = useState('')


  useEffect(() => {
    setUsers(userData)
    setDefaultUsers(userData)
  }, [])

  const handleChange = (e)=>{
    console.log(e.target.value)
    setSearch(e.target.value)
    filterSearch(e.target.value)
  }

  const filterSearch = (searchInput)=>{
    console.log(searchInput)
    var searchResult = defaultUsers.filter((user)=>{
      if(user.nombre.toString().toLowerCase().startsWith(searchInput.toLowerCase())){
        return user
      }
    }
    )
    setUsers(searchResult)
  }

  const handleAddUser = ()=>{
    setAddingUser(!addingUser)
  }
  const handleEditUser = ()=>{
    setEditing(!editing)
  }

  const addUser = (data)=>{
    data.id = uuidv4()
    setUsers([
      ...users,
      data
    ])
    setDefaultUsers([
      ...users,
      data
    ])
    handleAddUser()
  }

  function editRow(user) {
    console.log(user)
    setEditing(true)
    setCurrentUser({
      id: user.id, nombre: user.nombre, apellido: user.apellido, telefono: user.telefono, email: user.email
    })
  }

  function updateUser(id, updatedUser) {
    setEditing(false)
    setUsers(
      users.map(user => (user.id === id ? updatedUser : user))
    )
    setDefaultUsers(
      users.map(user => (user.id === id ? updatedUser : user))
    )
  }

  function deleteUser(id) {
    console.log(id)
    const arrayFiltrado = users.filter(user => user.id !== id)
    setUsers(arrayFiltrado)
  }

  return (
    <>
      {
        editing ? 
          <EditUserForm 
            currentUser={currentUser}
            updateUser={updateUser}
            setEditing={handleEditUser}
          /> 
          :
          addingUser ? 
            <AddUserForm 
              addUser={addUser}
              handleAddUser={handleAddUser}
            /> 
            :
            <UserTable 
              users={users} 
              addUser={handleAddUser}
              editRow={editRow}
              setEditing={handleEditUser}
              deleteUser={deleteUser}
              handleChange={handleChange}
              search={search}
            />
      }


    </>
  )
}

export default App
