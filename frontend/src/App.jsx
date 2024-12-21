import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import { Navigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
           <Route path='/' element={<Navigate to='/register' />} />
          <Route path='/register' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
