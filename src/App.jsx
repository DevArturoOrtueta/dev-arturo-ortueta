import { Route, Routes } from "react-router-dom"
import { NotPage } from "./components/NotFound/NotPage"
import { Home } from "./home/Home"



function App() {

  return (
    //<Navbar/>
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="*" element={<NotPage/>}/>
    </Routes>
    </>
   
  )
}

export default App
