import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItems,removeItem } from "../utils/cartSlice";

const Item = (obj) => {
  const { brand, price, thumbnail, title } = obj;
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleAdd = (obj)=>{dispatch(addItems(obj))}

  const handleDelete = (obj) => dispatch(removeItem(obj.id))

  const add_btn = (
    <button
      style={{
        padding: 5,
        border: 0,
        borderRadius: 5,
        backgroundColor: "green",
        color: "white",
      }}
      onClick={() => {
        handleAdd({ ...obj, qty: 1 });
      }}
    >
      ADD to Cart
    </button>
  );

  const delete_btn = (
    <button
      style={{
        padding: 5,
        border: 0,
        borderRadius: 5,
        backgroundColor: "red",
        color: "white",
      }}

      onClick={()=> handleDelete(obj)}
    >
      REMOVE
    </button>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 10,
        border: "1px solid green",
        width: "30%",
        gap: 10,
        marginTop: 10,
        height: 300,
      }}
    >
      <img
        alt={brand}
        src={thumbnail}
        style={{ height: 220, objectFit: "cover" }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{price}$</span>
        <span>{title}</span>
      </div>
      {cartItems.some((p) => p.id === obj.id) ? delete_btn : add_btn}
    </div>
  );
};

export default Item;
