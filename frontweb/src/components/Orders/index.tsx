import ProductListing from "./ProductListing";
import StepsHeader from "./StepsHeader";
import "./styles.css";

const Orders = () => {
  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductListing />
    </div>
  );
};

export default Orders;
