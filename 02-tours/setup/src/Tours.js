import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  const { data, deleteTour } = props;
  return (
    <ul>
      {data.map((eachData) => (
        <Tour key={data.id} eachTour={eachData} deleteTour={deleteTour} />
      ))}
    </ul>
  );
};

export default Tours;
