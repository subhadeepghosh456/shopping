import { useEffect, useState } from "react";
import Item from "./Item";

const Products = () => {

    useEffect(() => {
        getProducts();
      });
    
      const [data, setData] = useState([]);
      async function getProducts() {
        const data = await fetch("https://dummyjson.com/products");
        const json = await data.json();
        console.log(json.products);
        setData(json.products);
      }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "80%",
        justifyContent: "space-evenly",
      }}
    >
        {
          data.map((obj)=>{
            return <Item {...obj} key={obj.id}/>
          })  
        }
     {/* <Item {...data[0]}/> */}
    </div>
  );
};

export default Products;
