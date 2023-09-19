import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Product = (props) => {
  const [product, setProduct] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const param = useParams();
  // const navigate =
  const getProductInf = async () => {
    try {
      const res = await fetch(`/api/products/${param.id}`);
      const data = await res.json();
      setProduct(data);
      setName(data[0].name);
      setPrice(data[0].price);
    } catch (e) {
      console.log(e);
    }
  };
  const update = async (e) => {
    try {
      const res = await fetch(`/api/products/${param.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price }),
      });
    } catch (e) {
      console.log(e);
    }
  };
  const del = async () => {
    try {
      const res = await fetch(`/api/products/${param.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h1>Product....{param.id}</h1>
      <div>
        <h2>Update product</h2>
        <form onSubmit={update}>
          Name:
          <input value={name} onChange={(e) => setName(e.target.value)} />
          Price:
          <input value={price} onChange={(e) => setPrice(e.target.value)} />
          <input type="submit" value="Update" />
        </form>
        <div>
          <h2>Delete Product</h2>
          <button onClick={del}>Delete</button>
        </div>
      </div>
      {product.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
          </div>
        );
      })}
      <Link to="/">Back to shop</Link>
    </div>
  );
};
export default Product;
