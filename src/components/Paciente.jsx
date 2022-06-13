import React from 'react'

function Paciente() {
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold text-gray-600 uppercase'>Nombre:{' '}
            <span className='font-normal normal-case'>Canela</span>
        </p>
        <p className='font-bold text-gray-600 uppercase'>Propietario:{' '}
            <span className='font-normal normal-case'>Juan Antonio Del Angel</span>
        </p>
        <p className='font-bold text-gray-600 uppercase'>Email:{' '}
            <span className='font-normal normal-case'>jmdelan2012@gmail.com</span>
        </p>
        <p className='font-bold text-gray-600 uppercase'>Fecha Alta:{' '}
            <span className='font-normal normal-case'>01-02-2020</span>
        </p>
        <p className='font-bold text-gray-600 uppercase'>Sintomas:{' '}
            <span className='font-normal normal-case'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quo explicabo asperiores possimus ab cumque, sapiente, nihil earum excepturi ipsum commodi</span>
        </p>

        <div className='flex justify-between mt-10'>
            <button
                type='button'
                className='py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white  uppercase rounded-xl'
            >Editar</button>
            <button
                type='button'
                className='py-2 px-10 bg-red-600 hover:bg-red-800 text-white  uppercase rounded-xl'
            >Eliminar</button>
        </div>
    </div>

    
  )
}

export default Paciente