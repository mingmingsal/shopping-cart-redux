import { useEffect,useState } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import loader from "../components/loader";
const CollectionsPage = () => {
    const [store, setStore] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function startFetching() {
      const json = await loader(`https://fakestoreapi.com/products/categories`);
      if (!ignore) {
        setStore(json);
      }
    }
  
    startFetching();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <div>
        {store === null ? <p>Loading...</p> : store.map((item, index)=>{
          return (
            <div key={`collections${item}`}>
              <h2>{item}</h2>
            </div>
          )
        })}
    </div>
  )
}

export default CollectionsPage