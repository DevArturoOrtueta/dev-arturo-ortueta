import { Route, Routes } from "react-router-dom"
import { NotPage } from "./General/NotPage"
import { Home } from "./Home/Home"
import { Navbar } from "./Navbar/Navbar"
import { Projects } from "./Projects/Projects"


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="*" element={<NotPage/>}/>
    </Routes>
    </>
   
  )
}

export default App
