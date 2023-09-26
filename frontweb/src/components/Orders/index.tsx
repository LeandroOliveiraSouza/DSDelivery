import "./styles.css";
import { useEffect, useState } from "react";
import ProductListing from "./ProductListing";
import StepsHeader from "./StepsHeader";
import { Product } from "./types";
import fetchProducts from "../../api";

const Orders = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductListing products={products} />
    </div>
  );
};

export default Orders;
