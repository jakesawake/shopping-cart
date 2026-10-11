import { useEffect, useState } from "react";
export default function ShopPage() {
  const [flowers, setFlowers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageError, setPageError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/flowers.json");
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
      <ul>
        {flowers.map((flower) => {
          return <li key={flower.id}>{flower.title}</li>;
        })}
      </ul>
    </div>
  );
}
