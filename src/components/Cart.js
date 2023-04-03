import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const [amount, setAmount] = useState(0);
  const [Item, setTotalItem] = useState(0);

  const totalItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  useEffect(() => {
    const subTotal = totalItem.reduce((acc, item) => {
      acc = acc + item.qty * Number(item.price);
      return acc;
    }, 0);
    setAmount(subTotal);
  }, [totalItem]);

  useEffect(() => {
    const total_Item = totalItem.reduce((acc, item) => {
      acc = acc + item.qty;
      return acc;
    }, 0);
    setTotalItem(total_Item);
  }, [totalItem]);

  const clear = () => {
    dispatch(clearCart());
  };

  return (
    <div
      style={{
        display: "flex",
        width: "20%",
        flexDirection: "column",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3 style={{ textAlign: "center", margin: 0 }}>Cart</h3>
      <h3 style={{ textAlign: "center", margin: 0 }}>Total:{amount} $</h3>
      <h5 style={{ textAlign: "center", margin: 0 }}>Total-Items:{Item}pcs</h5>
      {totalItem.map((prod) => (
        <CartItem {...prod} />
      ))}
      <button
        onClick={() => clear()}
        style={{ backgroundColor: "red", border: "none", color: "white" }}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
