import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../../components/Header";
import OrderCard from "../../components/OrderCard";

const Orders = () => {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <OrderCard />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: "5%",
    paddingLeft: "5%",
  },
});

export default Orders;
