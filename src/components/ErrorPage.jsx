import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/">Click here to go home.</Link>
    </div>
  );
}
