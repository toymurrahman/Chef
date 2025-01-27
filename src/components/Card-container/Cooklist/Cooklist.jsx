const Cooklist = ({cookingItem }) => {

    const totalTime = cookingItem.reduce((acc, item) => acc + item.details.time, 0);
    const totalCalories = cookingItem.reduce((acc, item) => acc + item.details.calories, 0);
  
    if (!Array.isArray(cookingItem) || cookingItem.length === 0) {
      return (
        <div>
          <h2 className="text-lg font-bold mb-4 text-center">Currently cooking: 0</h2>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      );
    }
  
    return (
      <div>
        <h2 className="text-lg font-bold mb-4 text-center">Currently cooking: {cookingItem.length}</h2>
        <div className="text-gray-500">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                
              </tr>
            </thead>
            <tbody>
              {cookingItem.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.details.time} minutes</td>
                  <td>{item.details.calories} calories</td>
                </tr>
                
              ))}
            </tbody>
          </table>

        </div>
        <div className="mt-4 text-center text-gray-400  flex justify-end gap-5">
          <p><strong>Total Time:</strong> {totalTime} minutes</p>
          <p><strong>Total Calories:</strong> {totalCalories} kcal</p>
        </div>


        <div>
        {/* {cookingItem.map((item) => (
                <div key={item.id} className="text-gray-400  flex justify-end gap-5 ">
                    <h2>Total time: <br /> {item.details.time} </h2>
                    <h2>Total calories: <br />{item.details.calories} </h2>
                </div>
                
              ))} */}

        </div>
      </div>
    );
  };
  
  export default Cooklist;
  