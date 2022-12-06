import React from "react";

const Menu = (props) => {
  const { eachMenu } = props;

  const { img, desc, title, price } = eachMenu;
  return (
    <div className="section-center">
      <article key={title} className="menu-item">
        <img src={img} alt="avatar" className="photo" />
        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <h4 className="price">{price}</h4>
          </header>
          <p className="item-text">{desc}</p>
        </div>
      </article>
    </div>
  );
};

export default Menu;
