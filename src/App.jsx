import { useState } from "react"
import Banner from "./components/Banner/Banner"

import Cards from "./components/Card-container/Cards/Cards"
import Declaration from "./components/Declaration/Declaration"
import Navbar from "./components/Navbar/Navbar"



function App() {
 const [ wantToCook,setWantToCook ] = useState([]);

 const handleAddtoCook = card =>{
 const newWantToCook = [...wantToCook, card];
 setWantToCook(newWantToCook);
 }

  return (
    <>
      
      <h1 className="text-center bg-green-400 rounded-md text-white font-bold">Boooo!</h1>
      <Navbar />
      <Banner />
      <Declaration />
      <Cards handleAddtoCook={handleAddtoCook} wantToCook={wantToCook} />
      {/* <Bookmarks /> */}
      
      
    </>
  )
}

export default App
