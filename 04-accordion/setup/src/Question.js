import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = (props) => {
  const { data } = props;
  console.log(data);
  const [showAns, setShowAns] = useState(false);

  const changeShowValTrue = () => {
    setShowAns(!showAns);
  };

  return (
    <li className="question">
      <header>
        <h4>{data.title}</h4>
        <button className="btn" onClick={changeShowValTrue}>
          {showAns ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showAns && <p>{data.info}</p>}
    </li>
  );
};

export default Question;
