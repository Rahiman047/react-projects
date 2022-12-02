import React, { useState } from "react";

const Tour = (props) => {
  const { eachTour, deleteTour } = props;
  const { name, info, image, price, id } = eachTour;
  const [showFull, toggleInfo] = useState(true);

  const ShowLess = () => {
    return (
      <div className="cont">
        <p>
          {info}..
          <button href="none" onClick={() => toggleInfo(!showFull)}>
            ShowLess
          </button>
        </p>
      </div>
    );
  };

  const ShowMore = () => {
    return (
      <div>
        <p>
          {info.substring(0, 270)}...
          <button href="none" onClick={() => toggleInfo(!showFull)}>
            ShowMore
          </button>
        </p>
      </div>
    );
  };

  const removeElement = () => {
    deleteTour(id);
  };

  return (
    <article className="single-tour">
      <img src={image} alt="tour" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p className="tour-info">{showFull ? <ShowLess /> : <ShowMore />}</p>
        <button type="button" className="delete-btn" onClick={removeElement}>
          Not Intrested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
