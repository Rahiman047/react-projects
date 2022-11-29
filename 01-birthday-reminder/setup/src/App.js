import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [objVal, changeObj] = useState({
    count: `${data.length}`,
    objList: data,
  });

  const clearAllVal = () => {
    changeObj({ ...objVal, objList: [], count: 0 });
  };

  return (
    <main>
      <section className="container">
        <h3>{objVal.count} birthdays today</h3>
        {objVal.objList.map((eachItem) => (
          <List eachItem={eachItem} key={eachItem.id} />
        ))}
        <div>
          <button
            className="container button"
            type="button"
            onClick={clearAllVal}
          >
            Clear All
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
