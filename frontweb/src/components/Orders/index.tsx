import "./styles.css";
import { useEffect, useState } from "react";
import ProductListing from "./ProductListing";
import StepsHeader from "./StepsHeader";
import { OrderLocationdata, Product } from "./types";
import { fetchProducts } from "../../api";
import OrderLocation from "./OrderLocation";

const Orders = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

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
      <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
    </div>
  );
};

export default Orders;
