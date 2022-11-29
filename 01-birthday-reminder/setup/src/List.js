import React from "react";

const List = (listVal) => {
  const { eachItem } = listVal;
  console.log(eachItem);
  return (
    <article className="person">
      <img src={eachItem.image} alt="person" />
      <h4>{eachItem.name}</h4>
      <p>{eachItem.age} years</p>
    </article>
  );
};

export default List;
