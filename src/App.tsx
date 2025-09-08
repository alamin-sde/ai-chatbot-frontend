
import Navbar from './components/layout/Navbar'
import { Route, Routes } from 'react-router-dom'
import Test from './pages/Test'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {

  return (
    <div className='bg-grey-50'>
      <Navbar />
      <Routes>
        <Route path='/test' Component={Test} />
        <Route path='/register' Component={Register}/>
        <Route path='/login' Component={Login}/>
      </Routes>

    </div>
  )
}

export default App
