import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const menuItems = ["All", "Breakfast", "Lunch", "Shakes"];

function App() {
  const [menuVals, setMenuItems] = useState(items);

  const showSelectedItems = (category) => {
    console.log(category);
    if (category === "All") {
      setMenuItems(items);
    }
    if (category === "Breakfast") {
      const newVal = items.filter(
        (eachVal) => eachVal.category === category.toLowerCase()
      );
      setMenuItems(newVal);
    }
    if (category === "Lunch") {
      const newVal = items.filter(
        (eachVal) => eachVal.category === category.toLowerCase()
      );
      setMenuItems(newVal);
    }
    if (category === "Shakes") {
      const newVal = items.filter(
        (eachVal) => eachVal.category === category.toLowerCase()
      );
      setMenuItems(newVal);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {menuItems.map((eachItem) => (
            <Categories
              category={eachItem}
              key={eachItem}
              showSelectedItems={showSelectedItems}
            />
          ))}
        </div>
        {menuVals.map((eachItem) => (
          <Menu eachMenu={eachItem} key={eachItem.id} />
        ))}
      </section>
    </main>
  );
}

export default App;
