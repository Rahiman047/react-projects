import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tourData, setData] = useState("");

  const deleteTour = (id) => {
    const newTours = tourData.filter((eachTour) => eachTour.id !== id);
    setData(newTours);
  };

  const generateData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    generateData();
  }, []);

  const NoTour = () => {
    return (
      <div className="title">
        <h2>No Tours left</h2>
        <button type="button" className="btn" onClick={generateData}>
          Refresh
        </button>
      </div>
    );
  };

  return (
    <>
      <main>
        {tourData.length > 1 ? (
          <h1 className="title">Our Tours</h1>
        ) : (
          <NoTour />
        )}
        <div className="underline"></div>
        {loading && <Loading />}
        {tourData && <Tours data={tourData} deleteTour={deleteTour} />}
      </main>
    </>
  );
}

export default App;
