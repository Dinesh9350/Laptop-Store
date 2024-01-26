import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Laptoplist from './components/Laptoplist'

const App = () => {
  return (
    <div>
      <h1 className='my-3 text-center'>Bestseller Laptops</h1>
      <Laptoplist />
    </div>
  )
}

export default App
