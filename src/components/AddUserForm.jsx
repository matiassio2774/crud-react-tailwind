import React from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function AddUserForm({ addUser, handleAddUser }) {

  const { register, handleSubmit, formState: { errors } } = useForm()

  function onSubmit(data, e) {
    addUser(data)
    e.target.reset()
  }

  return (
    <div className='flex justify-center mt-20 '>
      <div className=' flex-column w-5/6 max-w-lg shadow-md shadow-grey'>
        <div className='text-center p-4 font-bold'>
          <button 
            className='bg-violet text-softwhite text-sm font-semibold px-4 py-2 rounded-2xl hover:bg-purple transition-colors flex items-center'
            onClick={handleAddUser}
          >
            <AiOutlineCloseCircle />
          </button>
          <h1>Agregar Usuario</h1>
        </div>
        <div className='w-50'>
          <form className='w-auto flex-column px-10 pt-10' 
            onSubmit={handleSubmit(onSubmit)}>
            <span className='text-red-700'>
              {errors?.name?.message}
            </span>
            <input className='border-grey border-2 rounded-sm outline-none w-full py-2 px-4 mb-4' type="text" name="nombre" placeholder='Nombre'
              {...register('nombre', 
                { required: {value:true, message:'Campo Requerido'} }
              )}
            />

            <span className='text-red-700'>
              {errors?.surname?.message}
            </span>
            <input className='border-grey border-2 rounded-sm outline-none w-full py-2 px-4 mb-4' type="text" name="apellido" placeholder='Apellido'
              {...register('apellido', 
                { required: {value:true, message:'Campo Requerido'} }
              )} 
            />

            <span className='text-red-700'>
              {errors?.number?.message}
            </span>
            <input className='border-grey border-2 rounded-sm outline-none w-full py-2 px-4 mb-4' type="number" name="telefono" placeholder='Telefono'
              {...register('telefono', 
                { required: {value:true, message:'Campo Requerido'} }
              )} 
            />

            <span className='text-red-700'>
              {errors?.email?.message}
            </span>
            <input className='border-grey border-2 rounded-sm outline-none w-full py-2 px-4 mb-4' type="email" name="email" placeholder='Email'
              {...register('email', 
                { required: {value:true, message:'Campo Requerido'} }
              )} 
            />
            <button 
              className='bg-violet text-softwhite text-sm font-semibold px-10 py-2 rounded-2xl hover:bg-purple transition-colors flex items-center mx-auto mb-6 my-2'
            >
            Guardar Cambios
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddUserForm