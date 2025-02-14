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
import { Play } from './components/hotstar/Play'
import { FormDemo1 } from './components/forms/FormDemo1'
import { FormDemo2 } from './components/forms/FormDemo2'
import { FormDemo3 } from './components/forms/FormDemo3'
import { FormDemo4 } from './components/forms/FormDemo4'
import { FormDemo5 } from './components/forms/FormDemo5'
import { FormDemo6 } from './components/forms/FormDemo6'
import { FormDemo7 } from './components/forms/FormDemo7'
import { FormDemo8 } from './components/forms/FormDemo8'
import { FormDemo9 } from './components/forms/FormDemo9'
import { FormDemo10 } from './components/forms/FormDemo10'

function App() {
  const [count, setCount] = useState(0)



  return (
    <div>
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element = {<HotstarWelcome></HotstarWelcome>}></Route>
      <Route path='/home' element = {<HotstarHome></HotstarHome>}></Route>
      <Route path='/movies' element = {<HotstarMovies></HotstarMovies>}></Route>
      <Route path='/play/:id' element= {<Play></Play>}></Route>
      <Route path='/formdemo1' element ={<FormDemo1></FormDemo1>}></Route>
      <Route path='/formdemo2' element ={<FormDemo2></FormDemo2>}></Route>
      <Route path='/formdemo3' element ={<FormDemo3></FormDemo3>}></Route>
      <Route path='/formdemo4' element ={<FormDemo4 ></FormDemo4>}></Route>
      <Route path='/formdemo5' element ={<FormDemo5 ></FormDemo5>}></Route>
      <Route path='/formdemo6' element ={<FormDemo6 ></FormDemo6>}></Route>
      <Route path='/formdemo7' element ={<FormDemo7 ></FormDemo7>}></Route>
      <Route path='/formdemo8' element ={<FormDemo8 ></FormDemo8>}></Route>
      <Route path='/formdemo9' element ={<FormDemo9 ></FormDemo9>}></Route>
      <Route path='/formdemo10' element ={<FormDemo10 ></FormDemo10>}></Route>
      <Route path='/*' element={<Error404></Error404>}></Route>
     </Routes>
    </div>
  )
}

export default App
