import { Routes, Route, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import AddContact from './pages/AddContact'

const rotas = createBrowserRouter([
  {
    path: '/',
    element:<Home />
  },
  {
    path:'/novo',
    element:<Cadastro />
  }
])

function App() {
  return (

  )
}

export default App
