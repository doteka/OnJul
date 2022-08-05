import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import Profile_Default_Image from "../Resources/profile_Default.png";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";

const { width, height } = Dimensions.get("window");

const SignUp = () => {
  const [profile_Image, setProfile_Image] = useState(Profile_Default_Image);
  const [ID, setID] = useState();
  const [pwd, setPwd] = useState();
  const [confirm_pwd, setConfirm_pwd] = useState();
  const [name, setName] = useState();
  const [nickName, setNickName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    setProfile_Image(Image.resolveAssetSource(Profile_Default_Image).uri);
  }, []);
  const _PickProfileImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });

    // cancelled가 아닐 때 가져온 사진의 주소로 onChangePhoto
    if (!result.cancelled) {
      setProfile_Image(result.uri);
      console.log(result.uri);  
    }
  };

  const _SignUpSubmit = () => {
    console.log("ID : " + ID);
    console.log("PWD : " + pwd);
    console.log("Confirm PWD : " + confirm_pwd);
    console.log("name : " + name);
    console.log("NickName : " + nickName);
    console.log("PhoneNumber : " + phoneNumber);
    console.log("Email : " + email);
    const str =
      "ID : " +
      ID +
      "\nPWD : " +
      pwd +
      "\nConfirm PWD : " +
      confirm_pwd +
      "\nname : " +
      name +
      "\nNickName : " +
      nickName +
      "\nPhoneNumber : " +
      phoneNumber +
      "\nEmail : " +
      email;

    Alert.alert(str);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#af2fe1", alignItems: "center" }}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.header_Title}>회원가입</Text>
      </SafeAreaView>
      <KeyboardAwareScrollView
        style={styles.body}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Pressable onPress={_PickProfileImage}>
          <Image
            style={styles.body_ProfileImage}
            source={{ uri: profile_Image }}
          />
        </Pressable>
        <SafeAreaView style={styles.body_InfoInput}>
          {/* ID */}
          <>
            <Text style={styles.body_Info_Guide_Text}>ID</Text>
            <TextInput
              style={styles.body_Info_Input}
              onChangeText={(text: string) => setID(text)}
            />
          </>
          {/* PWD */}
          <>
            <Text style={styles.body_Info_Guide_Text}>Password</Text>
            <TextInput
              style={styles.body_Info_Input}
              onChangeText={(text: string) => setPwd(text)}
              secureTextEntry={true}
            />
          </>
          {/* Confirm PWD */}
          <>
            <Text style={styles.body_Info_Guide_Text}>Confirm Password</Text>
            <TextInput
              style={styles.body_Info_Input}
              onChangeText={(text: string) => setConfirm_pwd(text)}
              secureTextEntry={true}
            />
          </>
          {/* Name */}
          <>
            <Text style={styles.body_Info_Guide_Text}>이름</Text>
            <TextInput
              style={styles.body_Info_Input}
              onChangeText={(text: string) => setName(text)}
            />
          </>
          {/* NickName */}
          <>
            <Text style={styles.body_Info_Guide_Text}>닉네임</Text>
            <TextInput
              style={styles.body_Info_Input}
              onChangeText={(text: string) => setNickName(text)}
            />
          </>
          {/* Phone Number */}
          <>
            <Text style={styles.body_Info_Guide_Text}>핸드폰 번호</Text>
            <TextInput
              style={styles.body_Info_Input}
              onChangeText={(text: string) => setPhoneNumber(text)}
              keyboardType={"phone-pad"}
            />
          </>
          {/* Email */}
          <>
            <Text style={styles.body_Info_Guide_Text}>이메일</Text>
            <TextInput
              style={styles.body_Info_Input}
              onChangeText={(text: string) => setEmail(text)}
              keyboardType={"email-address"}
            />
          </>
        </SafeAreaView>
        <Pressable style={styles.SignUpButton_AREA} onPress={_SignUpSubmit}>
          <Text style={styles.SignUpButton}>회원가입</Text>
        </Pressable>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: width / 8,
  },
  header_Title: {
    fontSize: 25,
    fontWeight: "700",
  },
  body: {
    marginTop: width / 18,
  },
  body_ProfileImage: {
    width: width / 2,
    height: width / 2,
    borderRadius: 100,
  },
  body_InfoInput: {
    marginTop: height / 60,
  },
  body_Info_Guide_Text: {
    fontSize: 23,
    marginTop: 4,
  },
  body_Info_Input: {
    backgroundColor: "white",
    width: width / 2,
    height: height / 26,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  SignUpButton_AREA: {
    alignItems: "center",
    marginBottom: height / 15,
  },
  SignUpButton: {
    textAlign: "center",
    marginTop: width / 20,
    fontSize: 20,
    width: width / 3,
    backgroundColor: "#D5EFFC",
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 20,
  },
});

export default SignUp;
