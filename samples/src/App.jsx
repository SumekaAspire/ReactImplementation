import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Forms from './Forms/Forms'
import Hoc from './HigherOrderComponents/Hoc'
import Axios from './Axios&Fetch/Axios/Axios'
import Fetch from './Axios&Fetch/Fetch/Fetch'

function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Forms/>}/>
      <Route path="/hoc" element={<Hoc/>}/>      
      <Route path="/axios" element={<Axios/>}/>      
      <Route path="/fetch" element={<Fetch/>}/>



    </Routes>
   </Router>
  )
}

export default App
