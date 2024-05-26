import { useEffect, useState } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import loader from "../components/loader";
let init = false;
const StorePage = () => {
  const [store, setStore] = useState(null);
  let  {name}  = useParams();
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    let ignore = false;
    async function startFetching() {
      const storeLoad = await loader(`https://fakestoreapi.com/${name}`);
      const catLoad = await loader(`https://fakestoreapi.com/products/categories`);
      if (!ignore) {
        console.log('load data', storeLoad);
        setStore(storeLoad);
        setCategories(catLoad);
      }
    }
  
    startFetching();
    return () => {
      ignore = true;
    };
  }, [name]);
  return (
    <section>
      <div className="storeCategories">
        {store === null || categories === null ? (
          <></>
        ) : (
          categories.map((item, index) => {
            return (
              <div key={`store${item}`}>
                <button>{item}</button>
              </div>
            );
          })
        )}
      </div>
      <div>
        {store === null || categories === null ? (
          <p>Loading...</p>
        ) : (
          store.map((item, index) => {
            return (
              <div key={item.id}>
                <h2>{item.title}</h2>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default StorePage;
