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

function App() {
  const [count, setCount] = useState(0)



  return (
    <div>
      <InputDemo1></InputDemo1>
      {/* <UseStateDemo2></UseStateDemo2> */}
      {/* <UseStateDemo1></UseStateDemo1> */}
      {/* <Arraydemo5></Arraydemo5>
      <Arraydemo6></Arraydemo6>
      <Arraydemo7></Arraydemo7> */}
      {/* <Arraydemo4></Arraydemo4> */}
      {/* <Arraydemo3></Arraydemo3> */}
      {/* <Arraydemo1></Arraydemo1>
      <Arraydemo2></Arraydemo2> */}
      {/* <Navbar></Navbar> 
       <Footer></Footer> */}

        {/* <Header></Header><br></br><br></br>
      <Content></Content>
       */}
    </div>
  )
}

export default App
