import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider, { ThemeContext } from './componenets/week3_s3/ThemeProvider.jsx'

const root = document.getElementById('root') //js 

createRoot(root).render(


  <BrowserRouter>
    <App />
  </BrowserRouter>

  // html 
)

