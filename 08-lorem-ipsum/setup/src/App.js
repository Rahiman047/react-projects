import React, { useState } from "react";
import data from "./data";
function App() {
  const [number, setNumber] = useState();
  const [para, setParagraphs] = useState([]);

  const handleChange = (e) => {
    const num = e.target.value;
    setNumber(num);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(number) < 0) {
      const val = data.slice(0, 1);
      setParagraphs(val);
    } else if (Number(number) > 8) {
      const val = data.slice(0, 7);
      setParagraphs(val);
    } else {
      const val = data.slice(0, number);
      setParagraphs(val);
    }
  };

  const renderSection = () => {
    return (
      <div>
        {para.map((eachParagraph, index) => (
          <p className="result" key={index}>
            {eachParagraph}
          </p>
        ))}
      </div>
    );
  };

  return (
    <main>
      <h2>Tired of Boring Lorem Ipsum</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="para">Paragraphs :</label>
        <input id="para" type="number" value={number} onChange={handleChange} />
        <button className="btn">Generate</button>
      </form>
      <section className="lorem-form">{renderSection()}</section>
    </main>
  );
}

export default App;
