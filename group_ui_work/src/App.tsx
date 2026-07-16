import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/hero/hero'
import { Content } from './components/Content/Content'

function App() {
 

  return (
    <>
    
    <Navbar/>
    <Hero/>
    <Content />

   
</>
  )
}
export default App
