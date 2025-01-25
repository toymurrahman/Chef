const Bookmark = () => {
  return (
    <div className=" border rounded-2xl mt-6 pb-36 shadow-lg">
        {/* want to cook section */}
      <div >
        <div className="mt-6 font-bold border-b-2 py-4  ">
            <h1 className="text-center text-2xl">Want to cook:</h1>
        </div>
        <div className="text-gray-500">
          <table className="table">
            {/* head */}
            <thead>
             
               <tr>
               <th></th>  
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
               </tr>
              
            </thead>
            <tbody>
              {/* row  */}
             
              <tr>
               <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control</td>
                <td>Blue</td>
               </tr>
             
             
            </tbody>
          </table>
        </div>
      </div>
      {/* Currently cooking section */}
      <div className="  ">
        <div className="mt-6 font-bold border-b-2 py-4  ">
            <h1 className="text-center text-2xl">Currently cooking:</h1>
        </div>
        <div className="text-gray-500">
          <table className="table">
            {/* head */}
            <thead>
              
            <tr>
               <th></th>  
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
               </tr>
              
            </thead>
            <tbody>
              {/* row  */}
              
               <tr>
               <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control</td>
                <td>Blue</td>
               </tr>
              
            </tbody>
          </table>
        </div>
        <div className="justify-end flex font-bold mr-4 gap-6">
            <h2>Total time = </h2>
            <h2>Total Calories =</h2>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
