export default function CartItem({ item }) {
  const { image, title, price, quantity } = item;

  const lineTotal = price * quantity;

  return (
    <li className="flex flex-col items-center justify-center">
      <img className="size-24" src={image} alt={title} />
      <h1>{title}</h1>
      <data value={price}>Price: ${price.toFixed(2)}</data>
      <p>Quantity: {quantity}</p>
      <output>Total: ${lineTotal.toFixed(2)}</output>
    </li>
  );
}
