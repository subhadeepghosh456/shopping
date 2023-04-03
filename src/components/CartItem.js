import React from "react";
import { changeQuantity } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ price, thumbnail, title, id, qty }) => {
  const dispatch = useDispatch();
  const change_Quantity = (id, qty) => {
    dispatch(changeQuantity({ id, qty }));
  };
  // const [price,thumbnail,title] = item;
  return (
    <div
      style={{
        display: "flex",
        marginTop: 10,
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img src={thumbnail} alt={title} style={{ width: 70,height:70,objectFit:"cover" }} />
        <span>{price*qty} $</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={() => change_Quantity(id, qty - 1)}>-</button>
        {qty}
        <button onClick={() => change_Quantity(id, qty + 1)}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
