import { Link, Outlet } from "react-router";
import flowerGirlImg from "../assets/Sad-Girl-Holding-A-Flower.svg";
export default function Layout() {
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
          <Link to="cart">Cart</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
