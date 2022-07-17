import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Card from './Card'
import Hero from './Hero.jsx'
import Navbar from './Navbar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero />
    <Card />
  </React.StrictMode>
)
