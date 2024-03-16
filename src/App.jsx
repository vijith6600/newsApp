import { useState } from "react"
import NavBar from "./components/NavBar"
import NewsBord from "./components/NewsBord"

const App = () => {
  const [category,setCategory]=useState("general")
  return (
    <div>
      <NavBar setCategory={setCategory}/>
      <NewsBord category={category}/>
    </div>
  )
}

export default App