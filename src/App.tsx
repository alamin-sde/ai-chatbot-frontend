
import Navbar from './components/layout/Navbar'
import { Route, Routes } from 'react-router-dom'
import Test from './pages/Test'
import Register from './pages/Register'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast'
import { useLoading } from './contexts/LoadingContext'
import LoadingSpinner from './components/ui/LoadingSpinner'
import Chat from './pages/Chat'

function App() {
  const { loading } = useLoading();
  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <LoadingSpinner size='sm' className='' />
      </div>
    )
  }
  return (
    <div className='bg-grey-50'>
      <Navbar />
      <Routes>
        <Route path='/test' Component={Test} />
        <Route path='/register' Component={Register} />
        <Route path='/login' Component={Login} />
        <Route path='/chat' Component={Chat} />
      </Routes>
      <Toaster
        position='top-right'
        toastOptions={{
          duration: 4000,
          style: {
            background: '#ffffff',
            color: '#111827',
            border: '1px solid #e5e7eb'
          },
        }}
      />

    </div>
  )
}

export default App
