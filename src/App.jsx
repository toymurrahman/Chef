
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from "./components/Banner/Banner";
import Cards from "./components/Card-container/Cards/Cards";
import Declaration from "./components/Declaration/Declaration";
import Navbar from "./components/Navbar/Navbar";
import Bookmarks from "./components/Card-container/Bookmarks/Bookmarks";

function App() {
  const [wantToCook, setWantToCook] = useState([]);
 

  const handleAddtoCook = (card) => {
    if (!wantToCook.find((item) => item.id === card.id)) {
      setWantToCook([...wantToCook, card]);
      toast.success(`${card.title} added to Want to Cook!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(`${card.title} is already in Want to Cook!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <h1 className="text-center bg-green-400 rounded-md text-white font-bold">
        Boooo!
      </h1>
      <ToastContainer />
      <Navbar />
      <Banner />
      <Declaration />

      {/* Cards section */}
      <Cards handleAddtoCook={handleAddtoCook} wantToCook={wantToCook} />

      
      <div className="my-6">
        
        <Bookmarks
          wantToCook={wantToCook}
          setWantToCook={setWantToCook}
          
        />
      </div>

     
    
    </>
  );
}

export default App;