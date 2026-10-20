import { useState } from "react";
export default function Card({ flower }) {
  const [quantity, setQuantity] = useState(1);

  function handleTypedInput(e) {
    const inputVal = e.target.value;
    const cleanInput = inputVal.replace(/\D/g, "");

    if (cleanInput === "") {
      setQuantity("");
      return;
    } else if (Number(cleanInput) === 0) {
      return;
    }
    setQuantity(Number(cleanInput));
  }

  return (
    <li className="flex flex-col items-center justify-center">
      <img className="size-24" src={flower.image} alt={flower.title} />
      <h2>{flower.title}</h2>
      <p>{flower.description}</p>
      <data value={flower.price}>${flower.price.toFixed(2)}</data>
      <div className="flex gap-1">
        <label
          htmlFor={`quantity-input-${flower.id}`}
          className="flex items-center justify-center gap-2"
        >
          Enter quantity here:
        </label>
        <button
          className="flex flex-col items-end justify-center"
          aria-label="decrement button"
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
          id={`quantity-input-${flower.id}`}
          className="w-10 rounded border px-2 py-1 text-center"
          type="text"
          inputMode="numeric"
          value={quantity}
          onChange={handleTypedInput}
          onBlur={() =>
            setQuantity((prevQuantity) =>
              prevQuantity === "" ? 1 : prevQuantity,
            )
          }
        />
        <button
          className="flex flex-col items-end justify-center"
          aria-label="increment button"
          type="button"
          onClick={() =>
            setQuantity((prevQuantity) =>
              prevQuantity === "" ? 1 : prevQuantity + 1,
            )
          }
        >
          +
        </button>
      </div>
    </li>
  );
}
