import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Overview from './components/Overview'
import Users from './components/Users'
import Recharts from './components/Recharts'

function App() {
  return (
    <div className='flex gap-x-8'>
      <Sidebar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/overview' Component={Overview} />
        <Route path='/users' Component={Users} />
        <Route path='/recharts' Component={Recharts} />
      </Routes>
    </div>
  )
}

export default App
