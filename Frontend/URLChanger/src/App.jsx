import { useState } from 'react'
import Input from './Input/InputBox'
import './App.css'
import Footer from './Footer/Footer'

function App() {

  return (
    <>
    <h1 className='text-6xl Main-Head font-extrabold top-5'>URL Shortner</h1>
    <Input></Input>
    <Footer></Footer>
    </>
  )
}

export default App
