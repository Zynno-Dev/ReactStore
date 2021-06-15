import './style.css'
import React from "react";
import ItemCount from '../ItemCount/ItemCount';
import Items from '../Items/Items';

const ItemlistContainer = ({ greating }) => {

  const onAdd = (amount) => {
    console.log("Comprado " + amount + " productos")
  }

  return(
    <div>
      <ul className="Greatings">
        <li className="GreatingsLi">Producto: {greating}</li>
        <ItemCount initial={0} stock={5} onAdd={onAdd}/>
        <Items/>
      </ul>
    </div>
)};

export default ItemlistContainer;
