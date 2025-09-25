
import { Route, Routes } from 'react-router-dom'
import Test from './pages/Test'
import Register from './pages/Register'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './contexts/AuthContext'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './pages/ProtectedRoute'
import ChatPage from './pages/ChatPage'

function App() {
  const { user } = useAuth();
  return (
    <div>
      {/* {user && <Navbar />}
      {user && <Sidebar />} */}
      <Routes>
        <Route path='/test' Component={Test} />
        <Route path='/' Component={Dashboard} />
        <Route path='/register' Component={Register} />
        <Route path='/login' Component={Login} />
        <Route
          path='/chat'
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
        />
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
