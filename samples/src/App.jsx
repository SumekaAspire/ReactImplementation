import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Forms from './Forms/Forms'
import Hoc from './HigherOrderComponents/Hoc'
import Axios from './Axios&Fetch/Axios/Axios'
import Fetch from './Axios&Fetch/Fetch/Fetch'
import PaginationSample from './Pagination/PaginationSample'
import PaginationProducts from './Pagination/PaginationProducts'

function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Forms/>}/>
      <Route path="/hoc" element={<Hoc/>}/>      
      <Route path="/axios" element={<Axios/>}/>      
      <Route path="/fetch" element={<Fetch/>}/>
      <Route path="/pagination" element={<PaginationSample/>}/>
      <Route path="/paginationProducts" element={<PaginationProducts/>}/>




    </Routes>
   </Router>
  )
}

export default App
