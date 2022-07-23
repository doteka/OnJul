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

const { width, height } = Dimensions.get("window");
const item = {
  post_ID: 4,
  writer_ID: 1823,
  writer: "말하는 감자",
  title: "양구 멜론 사여",
  desc: "양구 멜론 내나",
  image:
    "https://img0.yna.co.kr/etc/inner/KR/2015/07/13/AKR20150713054200030_01_i_P4.jpg",
  myTag: "만원",
  youTag: "양구 멜론",
  conditions: "최상",
  location: "흥업사거리",
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    // <SafeAreaView style={styles.container}>
    //   {/* <ImageBackground
    //     style={{ flex: 1, opacity: 0.7 }}
    //     source={require("../Resources/main_bgimg.jpg")}
    //     resizeMode="cover"
    //   > */}
    //   {/* <Fridge width={width - 80} height={height - 340} /> */}
    //   {/* <Text>Open up App.tsx to start working on your app!</Text> */}
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
