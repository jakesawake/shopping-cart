import { useState } from "react";
export default function Card({ flower }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <li className="flex flex-col items-center justify-center">
      <img className="size-24" src={flower.image} alt={flower.title} />
      <h2>{flower.title}</h2>
      <p>{flower.description}</p>
      <data value={flower.price}>{flower.price}</data>
      <div className="flex gap-1">
        <button
          type="button"
          onClick={() =>
            setQuantity((prevQuantity) =>
              prevQuantity > 1 ? prevQuantity - 1 : prevQuantity,
            )
          }
        >
          -
        </button>
        <data value={quantity}>{quantity}</data>
        <button
          type="button"
          onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
        >
          +
        </button>
      </div>
    </li>
  );
}
