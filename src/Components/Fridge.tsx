import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";

// const { width, height } = Dimensions.get("window");
const Fridge = ({ width, height }) => {
  console.log(width, "/", height);
  return (
    <SafeAreaView
      style={{
        width: width,
        height: height,
      }}
    >
      <View style={{ flex: 0.1 }} />
      <View style={{ flex: 0.4 }}>
        <ImageBackground
          style={{ flex: 1 }}
          source={require("../Resources/Fridge/main_Frame.png")}
          resizeMode="contain"
        >
          <View style={{ flex: 1, marginVertical: 8, marginHorizontal: 100 }}>
            <View style={[styles.VegetableOnLine]}>
              <View style={{ marginLeft: -3 }}>
                <Text style={[styles.TextIcon]}>🧅</Text>
                <Text style={[styles.TextCount]}>x5</Text>
              </View>
              <View style={[styles.VegetableOn]}>
                <Text style={[styles.TextIcon]}>🍌</Text>
                <Text style={[styles.TextCount]}>x8</Text>
              </View>
              <View style={[styles.VegetableOn]}>
                <Text style={[styles.TextIcon]}>🍇</Text>
                <Text style={[styles.TextCount]}>x3</Text>
              </View>
            </View>
            <View style={[styles.VegetableOnLine]}>
              <Pressable style={{ marginLeft: -3 }}>
                <Text style={[styles.TextIcon]}>🥒</Text>
                <Text style={[styles.TextCount]}>x3</Text>
              </Pressable>
              <Pressable style={[styles.VegetableOn]}>
                <Text style={[styles.TextIcon]}>🍈</Text>
                <Text style={[styles.TextCount]}>x1</Text>
              </Pressable>
              <Pressable style={[styles.VegetableOn]}>
                <Text style={[styles.TextIcon]}>🥓</Text>
                <Text style={[styles.TextCount]}>x8</Text>
              </Pressable>
            </View>
            <View style={[styles.VegetableOnLine]}>
              <Pressable style={{ marginLeft: -3 }}>
                <Text style={[styles.TextIcon]}>🍅</Text>
                <Text style={[styles.TextCount]}>x2</Text>
              </Pressable>
              <Pressable style={[styles.VegetableOn]}>
                <Text style={[styles.TextIcon]}>🥦</Text>
                <Text style={[styles.TextCount]}>x5</Text>
              </Pressable>
              <Pressable style={[styles.VegetableOn]}>
                <Text style={[styles.TextIcon]}>🌽</Text>
                <Text style={[styles.TextCount]}>x8</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
        {/* <Image
          style={{ flex: 1, resizeMode: "contain" }}
          source={require("../Resources/Fridge/main_Frame.png")}
        /> */}
      </View>
      <View style={{ flex: 0.3 }}>
        <Image
          style={{ flex: 1, resizeMode: "contain" }}
          source={require("../Resources/Fridge/bottom.png")}
        />
      </View>
      <View style={{ flex: 0.2 }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  VegetableOnLine: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 2,
    marginLeft: 8,
  },
  VegetableOn: {
    marginLeft: 15,
  },
  TextIcon: {
    flex: 1,
    fontSize: 30,
  },
  TextCount: {
    fontSize: 16,
    zIndex: 30,
    position: "absolute",
    marginLeft: 35,
    marginTop: 26,
  },
});

export default Fridge;
