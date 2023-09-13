import { useEffect, useState } from "react";

const BASE_URL = process.env.RECT_APP_BASE_URL;
const Products = (props) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    allProducts();
  }, []);
  const allProducts = async () => {
    try {
      const res = await fetch(`${BASE_URL}api/products`);
      const data = await res.json();
      setProducts(data);
    } catch {}
  };
  return (
    <>
      <h1>Shop</h1>{
      products && products.map(item =>{
return (
    <div key={item.id} style={{}}}></div>

)
      } )}
    </>
  );
};

export default Products;
