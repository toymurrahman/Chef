const Cooklist = ({  cookingItem }) => {
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
        <h2 className="text-lg font-bold mb-4 text-center">Currently cooking:</h2>
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
                  <td>{item.details.time}</td>
                  <td>{item.details.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Cooklist;
  