import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getGroceryItems = () => {
  const getItems = JSON.parse(localStorage.getItem("groceryItems"));
  if (getItems) {
    return getItems;
  } else {
    return [];
  }
};

function App() {
  const [item, addItems] = useState("");
  const [groceryItems, updateGroceryItems] = useState(getGroceryItems);
  const [alert, showAlert] = useState(false);
  const [alertText, showAlertText] = useState("");
  const [editItem, updateEditItem] = useState("");
  const [isEditing, updateIsEditing] = useState(false);
  const [valChanged, updateValueToBeChanged] = useState("");

  const itemsAdded = (e) => {
    e.preventDefault();
    if (!isEditing) {
      const newItem = { id: new Date().getTime().toString(), title: item };
      updateGroceryItems((groceryItems) => {
        return [...groceryItems, newItem];
      });
      addItems("");
      showAlert(true);
      if (Alert) {
        showAlertText("Item Added to the List");
        setTimeout(() => {
          showAlertText("");
          showAlert(false);
        }, 2000);
      }
    }
    if (isEditing) {
      updateGroceryItems(
        groceryItems.map((eachGrocery) => {
          if (eachGrocery.id === valChanged) {
            return { ...eachGrocery, title: editItem };
          }
          return eachGrocery;
        })
      );
      updateIsEditing(false);
      addItems("");
      showAlert(true);
      if (Alert) {
        showAlertText("Item updated successfully");
        setTimeout(() => {
          showAlertText("");
          showAlert(false);
        }, 2000);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("groceryItems", JSON.stringify(groceryItems));
  }, [groceryItems]);

  const deleteAllItems = () => {
    updateGroceryItems([]);
    localStorage.removeItem("groceryItems");
    showAlert(true);

    if (Alert) {
      showAlertText("Empty List");
      setTimeout(() => {
        showAlertText("");
        showAlert(false);
      }, 2000);
    }
  };

  const deleteParticularItem = (id) => {
    const filterList = groceryItems.filter((eachItem) => eachItem.id !== id);
    const filteredVal = groceryItems.filter((eachVal) => eachVal.id === id);

    let val = filteredVal[0];
    let { title } = val;

    updateGroceryItems(filterList);
    localStorage.setItem("groceryItems", JSON.stringify(filterList));
    showAlert(true);

    if (Alert) {
      showAlertText(`Item ${title} removed`);
      setTimeout(() => {
        showAlertText("");
        showAlert(false);
      }, 2000);
    }
  };

  const editParticularItem = (id) => {
    updateIsEditing(true);
    updateValueToBeChanged(id);
  };

  const updateEditingValue = (e) => {
    updateEditItem(e.target.value);
  };

  return (
    <main>
      <div className="section-center">
        {alert && <Alert alertText={alertText} />}
        <form className="grocery-form" onSubmit={itemsAdded}>
          <h3>Grocery Bud</h3>
          {!isEditing && (
            <div className="form-control">
              <input
                type="text"
                className="grocery"
                placeholder="e.g eggs"
                onChange={(e) => addItems(e.target.value)}
                value={item}
              />
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          )}
          {isEditing && (
            <div className="form-control">
              <input
                type="text"
                className="grocery"
                placeholder="e.g eggs"
                onChange={updateEditingValue}
                value={editItem}
              />
              <button type="submit" className="submit-btn">
                Edit
              </button>
            </div>
          )}
        </form>
        <div className="grocery-container">
          {groceryItems.map((eachGrocery) => (
            <List
              eachGrocery={eachGrocery}
              key={eachGrocery.id}
              deleteParticularItem={deleteParticularItem}
              editParticularItem={editParticularItem}
            />
          ))}
        </div>
        <div>
          <button type="button" className="clear-btn" onClick={deleteAllItems}>
            Clear Items
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
