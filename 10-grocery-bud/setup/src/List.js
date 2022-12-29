import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = (props) => {
  const { eachGrocery, deleteParticularItem, editParticularItem } = props;
  const { title } = eachGrocery;

  const editGroceryItem = () => {
    editParticularItem(eachGrocery.id);
  };

  const deleteGroceryItem = () => {
    deleteParticularItem(eachGrocery.id);
  };

  return (
    <div className="grocery-item">
      <h4 className="title">{title}</h4>
      <div>
        <button type="button" className="edit-btn" onClick={editGroceryItem}>
          <FaEdit />
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={deleteGroceryItem}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default List;
