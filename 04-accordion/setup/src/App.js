import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <section className="container">
        <h3>Questions and answers about login</h3>
        <ul>
          {data.map((eachData) => (
            <SingleQuestion data={eachData} key={eachData.id} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
