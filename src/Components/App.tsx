import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigations/Stack";

import Fridge from "./Fridge";
import List_Of_Posts from "./List_Of_Posts";
import Post_View from "./Post_View";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const { width, height } = Dimensions.get("window");

const App = () => {
  return (
    // <SignIn></SignIn>
    // <SignUp></SignUp>
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    // <SafeAreaView style={styles.container}>
    //   {/* <ImageBackground
    //     style={{ flex: 1, opacity: 0.7 }}
    //     source={require("../Resources/main_bgimg.jpg")}
    //     resizeMode="cover"
    //   > */}
    // <Fridge width={width - 80} height={height - 340} />
    //  <Text>Open up App.tsx to start working on your app!</Text>
    //   {/* <List_Of_Posts /> */}
    //   {/* <Post_View item={item} /> */}
    //   {/* </ImageBackground> */}
    // </SafeAreaView>
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
