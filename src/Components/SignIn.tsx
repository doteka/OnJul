import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  ImageBackground,
  Pressable,
  Alert,
} from "react-native";
import BG_Image from "../Resources/main_bgimg.jpg";

const { width, height } = Dimensions.get("window");

const SignIn = () => {
  const [ID, setID] = useState();
  const [PWD, setPWD] = useState();

  const _LogIn = () => {
    const str = "ID : " + ID + "\nPWD : " + PWD;
    console.log(str);
    Alert.alert(str);
  };
  return (
    <ImageBackground style={styles.BG_image} source={BG_Image}>
      <SafeAreaView style={styles.View}>
        <Text style={styles.mainTitle}>* ON_JUL *</Text>
        <Text style={styles.subTitle}>
          온 세상 사람들이 함께 줄여나가는 쓰레기
        </Text>
        <SafeAreaView style={styles.SignIn_BOX_ID}>
          <Text style={styles.SignIn_TITLE}>ID</Text>
          <TextInput
            style={styles.SignIn_INPUT}
            onChangeText={(text: string) => setID(text)}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.SignIn_BOX_PW}>
          <Text style={styles.SignIn_TITLE}>PW</Text>
          <TextInput
            style={styles.SignIn_INPUT}
            onChangeText={(text: string) => setPWD(text)}
            secureTextEntry={true}
          />
        </SafeAreaView>
        <Pressable style={styles.SignIn_Btn} onPress={_LogIn}>
          <Text style={styles.SignIn_Btn_Title}>LOGIN!!</Text>
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  BG_image: {
    resizeMode: "cover",
    width: width,
    height: height,
    justifyContent: "center",
  },
  View: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    opacity: 0.8,
    marginLeft: 20,
    width: width - 40,
    height: height / 2,
    borderRadius: 20,
  },
  mainTitle: {
    fontSize: 25,
    fontWeight: "600",
    color: "#DD5843",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#A6BF6F",
  },
  SignIn_BOX: {
    marginTop: height / 10,
  },
  SignIn_BOX_ID: {
    flexDirection: "row",
    marginTop: height / 20,
    marginLeft: 14,
  },
  SignIn_BOX_PW: {
    flexDirection: "row",
    marginTop: height / 30,
  },
  SignIn_TITLE: {
    fontSize: 35,
    fontWeight: "600",
  },
  SignIn_INPUT: {
    width: width / 1.5,
    height: height / 15,
    backgroundColor: "#ffffff",
    marginLeft: width / 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 23,
  },
  SignIn_Btn: {
    width: width / 3,
    height: height / 15,
    backgroundColor: "#277A64",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: height / 25,
  },
  SignIn_Btn_Title: {
    fontSize: 17,
    fontWeight: "600",
    color: "white",
  },
});

export default SignIn;
