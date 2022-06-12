import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 class="text-3xl font-bold underline bg-indigo-700">
        Hello world!
      </h1>

      <div>
      <button 
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">Editar</button>
      </div>
    </div>
  )
}

export default App
