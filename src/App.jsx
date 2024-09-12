import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <div className=" bg-cover bg-[url('https://i.pinimg.com/originals/43/5e/99/435e9984f5fa486f7bd8b103862b0160.jpg')]  h-screen w-screen">
      <h1 className="font-extrabold text-3xl">TODO LIST</h1>
      <AddTodo />
      <Todos />
      </div>
    </>
  )
}

export default App