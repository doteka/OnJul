import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";
import userImage from "../Resources/userImage.png";
import Carbon_Footprint_ZERO from "../Resources/Carbon_Footprint/zero.png";
import locationIcon from "../Resources/icons/location.png";

const { width, height } = Dimensions.get("window");

const UserInfo = ({ navigation, route }) => {
  const user = route.params;
  console.log(user);
  return (
    <SafeAreaView>
      <SafeAreaView style={styles.userProfile}>
        {/* <Image style={styles.userProfile_Image} source={userImage} /> */}
        <Text style={styles.userProfile_Name}>{user.writer}</Text>
        <SafeAreaView style={{ flexDirection: "row", marginTop: width / 30 }}>
          <Image
            style={styles.userProfile_Location_Icon}
            source={locationIcon}
          />
          <Text style={styles.userProfile_Location_Title}>{user.location}</Text>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={styles.Carbon_Footprint}>
        <Text style={styles.Carbon_Foortprint_Title}>탄소 발자국 뱃지</Text>
        <Image
          style={styles.Carbon_Footprint_Icon}
          source={Carbon_Footprint_ZERO}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userProfile: {
    marginTop: width / 5,
    alignItems: "center",
  },
  userProfile_Image: {
    width: width / 2,
    height: width / 2,
  },
  userProfile_Name: {
    fontSize: 28,
    fontWeight: "600",
  },
  userProfile_Location_Icon: {
    width: width / 13,
    height: width / 13,
  },
  userProfile_Location_Title: {
    fontSize: width / 17,
    marginBottom: 5,
    color: "#999999",
  },
  Carbon_Footprint: {
    marginTop: width / 6,
    alignItems: "center",
  },
  Carbon_Foortprint_Title: {
    color: "#29D23A",
    fontSize: 25,
    fontWeight: "600",
  },
  Carbon_Footprint_Icon: {
    width: width / 2,
    height: width / 2,
  },
});

export default UserInfo;
