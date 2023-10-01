import { Image, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} />
      <Text style={styles.text}>DS Delivery</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DA5C5C",
    height: 90,
    paddingTop: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 25,
    letterSpacing: -0.24,
    marginLeft: 15,
    fontFamily: "OpenSans_700Bold",
  },
});

export default Header;
