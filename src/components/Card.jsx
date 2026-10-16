import { useState } from "react";
export default function Card({ flower }) {
  const [quantity, setQuantity] = useState(1);

  function handleTypedInput(e) {
    const val = e.target.value;
    if (val === "") {
      setQuantity("");
      return;
    }
    setQuantity(Number(val));
  }

  return (
    <li className="flex flex-col items-center justify-center">
      <img className="size-24" src={flower.image} alt={flower.title} />
      <h2>{flower.title}</h2>
      <p>{flower.description}</p>
      <data value={flower.price}>${flower.price.toFixed(2)}</data>
      <div className="flex gap-1">
        <label className="flex items-center justify-center gap-2">
          Enter quantity here:
        </label>
        <button
          className="flex flex-col items-end justify-center"
          type="button"
          onClick={() =>
            setQuantity((prevQuantity) =>
              prevQuantity > 1 ? prevQuantity - 1 : prevQuantity,
            )
          }
        >
          -
        </button>
        <input
          className="w-10 rounded border px-2 py-1 text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          type="number"
          value={quantity}
          onChange={handleTypedInput}
        />
        <button
          className="flex flex-col items-end justify-center"
          type="button"
          onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
        >
          +
        </button>
      </div>
    </li>
  );
}
