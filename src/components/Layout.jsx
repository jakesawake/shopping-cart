import { useState } from "react";
import { Link, Outlet } from "react-router";
import flowerGirlImg from "../assets/Sad-Girl-Holding-A-Flower.svg";

export default function Layout() {
  const [cart, setCart] = useState([]);

  function addToCart(flower, quantity) {
    if (!Number.isInteger(quantity) || quantity < 1) {
      return;
    }
    setCart((prev) => {
      const alreadyInCart = prev.some((el) => el.id === flower.id);
      if (alreadyInCart) {
        return prev.map((item) => {
          if (item.id === flower.id) {
            return { ...item, quantity: item.quantity + quantity };
          } else {
            return item;
          }
        });
      }
      return [...prev, { ...flower, quantity }]; // shorthand way of assigning quantity: quantity to new object
    });
  }

  const cartCounter = cart.reduce((acc, curr) => {
    console.log(acc, curr.quantity);
    return acc + curr.quantity;
  }, 0);

  console.log(cartCounter);

  return (
    <div className="flex flex-col gap-10">
      <header className="flex gap-4">
        <img
          className="size-20"
          src={flowerGirlImg}
          alt="Girl holding a flower"
        />
        <nav className="flex gap-10">
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">Cart {cartCounter}</Link>
        </nav>
      </header>
      <main>
        <Outlet context={{ cart, setCart, addToCart }} />
      </main>
    </div>
  );
}
