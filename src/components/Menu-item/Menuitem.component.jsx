import React from "react";
import "./Menuitem.style.scss";

const MenuItem = ({ key, title, imgurl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imgurl})`,
        }}
      />
      <div className="content">
        <h1>{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
