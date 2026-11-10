import { Link, useOutletContext } from "react-router";
import CartItem from "./CartItem";

export default function CartPage() {
  const { cart } = useOutletContext();

  const overallCost = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  if (cart.length === 0) {
    return (
      <div>
        <p>Cart is empty, put something in it :)</p>
        <Link to="/shop">Shop</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <output>Cart Total: {overallCost.toFixed(2)}</output>
    </div>
  );
}
