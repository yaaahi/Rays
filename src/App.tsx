
import { Header } from "./components/header/header"
import { About } from './pages/about/about'
import { Home } from './pages/home/home'
import { Service } from './pages/service/service'
import {FormPage} from "./pages/formPage/formPage"
import { useState } from "react"

type FormData = {
  name: string,
  address: string,
  field: string,
  phone: string,
  preference: string
}

const INITIAL_DATA = {
  name: "",
  address: "",
  field: "",
  phone: "",
  preference: ""
}


function App() {
  const [data,setData] = useState<FormData>(INITIAL_DATA)
  
  function updateData(parameters: Partial<FormData>){
    setData(prev => {
      return {...prev,...parameters}
    })
  }

  return (
    <>
    <Header />
      <Home />
      
      <About />

      <Service />

      <FormPage {...data} onUpdate={updateData}/>
    </>
  )
}

export default App
