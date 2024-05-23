import { useEffect,useState } from "react";
const Store = () => {
    const [store, setStore] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((res) => res.json())
      .then((json) => {
        setStore(json);
        console.table(json);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);
  return (
    <div>
        {store === null ? <p>Loading...</p> : <p>hi</p>}
    </div>
  )
}

export default Store