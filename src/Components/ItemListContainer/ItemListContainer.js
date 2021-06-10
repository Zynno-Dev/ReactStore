import './style.css'
import React from "react";

const ItemlistContainer = ({ greating }) => (
  <div>
    <ul className="Greatings">
      <li className="GreatingsLi">Producto: {greating}</li>
    </ul>
  </div>
);

export default ItemlistContainer;
