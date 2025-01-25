import Banner from "./components/Banner/Banner"
import Cards from "./components/Card-container/Cards/Cards"
import Declaration from "./components/Declaration/Declaration"
import Navbar from "./components/Navbar/Navbar"



function App() {
 

  return (
    <>
      
      <h1 className="text-center bg-green-400 rounded-md text-white font-bold">Boooo!</h1>
      <Navbar />
      <Banner />
      <Declaration />
      <Cards />
      
      
    </>
  )
}

export default App
