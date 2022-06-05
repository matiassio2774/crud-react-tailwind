import React from 'react'
import Th from './Th'
import Navbar from './Navbar'
import { AiOutlineForm, AiOutlineCloseCircle, AiOutlineUserAdd } from 'react-icons/ai'

function UserTable({ users, addUser, editRow, deleteUser, handleChange, search }) {
  return (
    <>
      <Navbar handleChange={handleChange} search={search} />
      <div className='p-5 h-auto w-full max-w-3xl mx-auto'>
        <div className='overflow-auto rounded-lg shadow'>
          <table className='w-full'>
            <thead className='border-b-2 border-gray-200'>
              <tr className='h-10'>
                <Th>Nombre</Th>
                <Th>Apellido</Th>
                <Th>Telefono</Th>
                <Th>Email</Th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
              {
                users.length > 0 ?
                  users.map( (user,index) => (
                    <tr key={index} className='font-semibold'>
                      <td className='p-3 text-sm whitespace-nowrap'>{user.nombre}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{user.apellido}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{user.telefono}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{user.email}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>
                        <button 
                          className='bg-softwhite text-violet  text-sm font-bold px-5 py-2 rounded-2xl border border-violet hover:bg-violet  hover:text-white transition-colors flex items-center '
                          onClick={()=>editRow(user)}
                        >
                          <AiOutlineForm />Editar
                        </button>
                      </td>
                      <td className='p-3 text-sm whitespace-nowrap'>
                        <button 
                          className='bg-softwhite text-red-700 m-4 text-sm font-bold px-5 py-2 rounded-2xl border border-red-700 hover:bg-red-700  hover:text-white transition-colors flex items-center'
                          onClick={()=>deleteUser(user.id)}
                        >
                          <AiOutlineCloseCircle />
                        Borrar
                        </button>
                      </td>
                    </tr>
            
                  ))
                  :
                  <tr>
                    <td colSpan={3}>No hay usuarios</td>
                  </tr>
              }
            </tbody>
          </table>
        </div>
        <div className='w-40 mx-auto text-center my-4'>
          <button 
            className='bg-violet text-softwhite text-sm font-semibold px-10 py-2 rounded-2xl hover:bg-purple transition-colors flex items-center'
            onClick={addUser}
          >
            <AiOutlineUserAdd />Agregar
          </button>
        </div>
      </div>
    </>
  )
}

export default UserTable