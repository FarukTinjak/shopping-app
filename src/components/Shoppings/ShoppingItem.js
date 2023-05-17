import React from "react";
import "./ShoppingItem.css";
import ShoppingDate from "./ShoppingDate";
import Card from "../UI/Card";

const ShoppingItem = (props) => {
  return (
    <Card className="shopping-item">
      <ShoppingDate date={props.date} />
      <div className="shopping-item__name">
        <h2>{props.name}</h2>
        <div className="shopping-item__price">{props.amount}KM</div>
      </div>
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Change name
      </button>
    </Card>
  );
};
export default ShoppingItem;
