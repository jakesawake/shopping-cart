import { useEffect, useState } from "react";
import Card from "./Card";
export default function ShopPage() {
  const [flowers, setFlowers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageError, setPageError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/flowers.json");
        // TODO: fix error message to also include status
        if (!response.ok) {
          throw new Error("HTTP error! Status:", response.status);
        }
        const data = await response.json();
        setFlowers(data.flowers);
      } catch (error) {
        setPageError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (pageError) {
    return (
      <div>
        <p>Error: {pageError}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Flower List</h1>
      <ul className="grid grid-flow-col grid-rows-3 gap-4">
        {flowers.map((flower) => {
          return <Card key={flower.id} flower={flower} />;
        })}
      </ul>
    </div>
  );
}
