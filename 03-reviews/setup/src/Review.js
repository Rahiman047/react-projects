import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [person, setPerson] = useState(0);
  const personSec = people[person];
  console.log(personSec);

  const prevReview = () => {
    if (person <= 0) {
      setPerson(0);
    } else {
      setPerson(person - 1);
    }
  };

  const nextReview = () => {
    if (person >= 3) {
      setPerson(3);
    } else {
      setPerson(person + 1);
    }
  };

  const getRandomNum = () => {
    return (Math.random() * 100) / 10;
  };

  const randomReview = () => {
    const val = getRandomNum();
    if (Math.ceil(val) >= 4) {
      getRandomNum();
    } else {
      setPerson(Math.ceil(val));
    }
    console.log(Math.ceil(val));
  };

  return (
    <section className="container">
      <div className="review">
        <div className="img-container">
          <img src={personSec.image} alt="img" className="person-img" />
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
        </div>
        <h3 className="author">{personSec.name}</h3>
        <h4 className="job">{personSec.job}</h4>
        <p className="info">{personSec.text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevReview}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextReview}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomReview}>
          Suprise Me
        </button>
      </div>
    </section>
  );
};

export default Review;
