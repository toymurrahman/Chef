const Cooklist = ({ cooking ,cookingItem }) => {
  if (!Array.isArray(cooking))
    return (
      <div>
        <h2 className="text-lg font-bold mb-4 text-center">
          Currently cooking:{" 0"}
        </h2>
        <table className="table">
          {/* Table header */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>

          {/* Table body (dynamically populated) */}
          <tbody></tbody>
        </table>
      </div>
    );
  return (
    <div>
      <div>
        <h2 className="text-lg font-bold mb-4 text-center">
          Currently cooking:{" "}
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
              </tr>
            </thead>

            {/* Table body (dynamically populated) */}
            <tbody>
              {cookingItem.map((cooking) => (
                <tr key={cooking.id}>
                  <td>{cooking.id}</td>
                  <td>{cooking.title}</td>
                  <td>{cooking.details.time}</td>
                  <td>{cooking.details.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cooklist;
