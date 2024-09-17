import { Routes,Route } from 'react-router-dom'
import './App.css'
import Nav from './Header/nav'
import Home from './HomePage/Home'
import Poter from './poter/poter'
import Courses from './Courses/Courses'
import Contact from './Contact/Contact'

function App() {
  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Courses' Component={Courses}/>
        <Route path='/Contact' Component={Contact}/>
      </Routes>
      <Poter/>
    </>
  )
}

export default App
