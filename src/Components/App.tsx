import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from "react-native";
import Fridge from "./Fridge";

const { width, height } = Dimensions.get("window");

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Fridge width={width - 80} height={height - 340} />
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
