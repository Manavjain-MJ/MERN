import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Header } from './components/Header'
import Footer from './components/Footer'
import { Content } from './components/Content'
import { Navbar } from './components/Navbar'
import { Arraydemo2 } from './components/Arraydemo2'
import { Arraydemo1 } from './components/Arraydemo1'
import { Arraydemo3 } from './components/Arraydemo3'
import { Arraydemo4 } from './components/Arraydemo4'
import { Arraydemo5 } from './components/Arraydemo5'
import { Arraydemo6 } from './components/Arraydemo6'
import { Arraydemo7 } from './components/Arraydemo7'
import { UseStateDemo1 } from './components/UseStateDemo1'
import { UseStateDemo2 } from './components/UseStateDemo2'
import { InputDemo1 } from './components/InputDemo1'
import { InputDem2 } from './components/InputDem2'
import { InputDemo2 } from './components/InputDemo2'
import { Route, Routes } from 'react-router-dom'
import { HotstarHome } from './components/hotstar/HotstarHome'
import { HotstarMovies } from './components/hotstar/HotstarMovies'
import { HotstarWelcome } from './components/hotstar/HotstarWelcome'
import { Error404 } from './components/hotstar/Error404'

function App() {
  const [count, setCount] = useState(0)



  return (
    <div>
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element = {<HotstarWelcome></HotstarWelcome>}></Route>
      <Route path='/home' element = {<HotstarHome></HotstarHome>}></Route>
      <Route path='/movies' element = {<HotstarMovies></HotstarMovies>}></Route>
      <Route path='/*' element={<Error404></Error404>}></Route>
     </Routes>
    </div>
  )
}

export default App
