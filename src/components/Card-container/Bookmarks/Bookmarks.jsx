import { useState } from "react";
import Cooklist from "../Cooklist/Cooklist";

const Bookmarks = ({ wantToCook,cooking }) => {
  const [cookingItem, setCookingItem] = useState([]);

  const handleCookingItem =(cooking) => {
    const newCookItem = [...cookingItem, cooking]
    setCookingItem(newCookItem)
  }

console.log(cooking);

  if (!Array.isArray(wantToCook)) return null;



  return (
    <div className="p-4 border rounded-md shadow-md  ">
      <div className="mb-16">
       
          
       
          <div>
            <h2 className="text-lg font-bold mb-4 text-center">
              Want to Cook:{" "}
            </h2>
            <div className="text-gray-500">
              <table className="table">
                {/* Table header */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                </thead>

                {/* Table body (dynamically populated) */}
                <tbody>
                  {wantToCook.map((bookmark) => (
                    <tr key={bookmark.id}>
                      <td>{bookmark.id}</td>
                      <td>{bookmark.title}</td>
                      <td>{bookmark.details.time}</td>
                      <td>{bookmark.details.calories}</td>

                      <td>
                        <button onClick={() => handleCookingItem(cooking)} className="btn btn-active btn-accent bg-green-400 text-black font-bold hover:bg-green-700 transition rounded-full">
                          Preparing
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
  
      </div>
      {/* {cooking.map((cooking) => (
          < key={cooking.id} handleCookingItem={handleCookingItem} cooking={cooking} />
        ))} */}
      
      
      {/* <Cooklist handleCookingItem={handleCookingItem} cookingItem={cookingItem} cooking={cooking} ></Cooklist> */}
    </div>
  );
};

export default Bookmarks;
