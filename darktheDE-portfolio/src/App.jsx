import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="flex space-x-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="hover:opacity-80 transition-opacity">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:opacity-80 transition-opacity">
          <img src={reactLogo} className="h-24 w-24 animate-spin" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">DarktheDE Portfolio</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Portfolio is ready! Tailwind CSS is working 🎉
        </p>
      </div>
      <p className="mt-8 text-gray-500 text-center max-w-md">
        Your portfolio foundation is set up with React, Vite, and Tailwind CSS. 
        Ready to build something amazing!
      </p>
    </div>
  )
}

export default App
