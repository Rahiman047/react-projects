import React from "react";

const Categories = (props) => {
  const { category, showSelectedItems } = props;

  const setSelectedItems = () => {
    showSelectedItems(props.category);
  };

  return (
    <div className="btn-container">
      <button type="button" className="filter-btn" onClick={setSelectedItems}>
        {category}
      </button>
    </div>
  );
};

export default Categories;
