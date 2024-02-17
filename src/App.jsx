import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeToggle from './ThemeToggle'
import SearchForm from './SearchForm'
import Gallery from './Gallery'

function App() {

  return (
    <main>
     <ThemeToggle/>
     <SearchForm/>
     <Gallery/>
    </main>
  )
}

export default App
