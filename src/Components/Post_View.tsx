import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  Text,
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import userImage from "../Resources/userImage.png";
import locationIcon from "../Resources/icons/location.png";
import Carbon_Footprint_ZERO from "../Resources/Carbon_Footprint/zero.png";

const { width, height } = Dimensions.get("window");
const Post_View = ({ item }) => {
  const myTag = item.myTag.split(",");
  const youTag = item.youTag.split(",");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 0.92 }}>
        <Image style={styles.Image} source={item.image} />
        <SafeAreaView style={styles.UserInfo}>
          <Image style={styles.UserImage} source={userImage} />
          <SafeAreaView style={{ flexDirection: "column", marginLeft: 15 }}>
            <Text style={styles.UserInfo_name}>{item.writer}</Text>
            <SafeAreaView style={{ flexDirection: "row" }}>
              <Image style={styles.locationIcon} source={locationIcon} />
              <Text style={styles.UserInfo_location}>{item.location}</Text>
            </SafeAreaView>
          </SafeAreaView>
          <Image
            style={[styles.UserImage, styles.Carbon_Footprint]}
            source={Carbon_Footprint_ZERO}
          />
        </SafeAreaView>
        <SafeAreaView style={tagStyles.tagBox}>
          <SafeAreaView style={{ flexDirection: "row" }}>
            <Text style={[tagStyles.TagFont, tagStyles.myTag]}>#나</Text>
            {myTag.map((item) => {
              return (
                <Text style={[tagStyles.TagFont, tagStyles.myTag]}>
                  #{item}
                </Text>
              );
            })}
          </SafeAreaView>
          <SafeAreaView style={{ flexDirection: "row" }}>
            <Text style={[tagStyles.TagFont, tagStyles.youTag]}>#너</Text>
            {youTag.map((item) => {
              return (
                <Text style={[tagStyles.TagFont, tagStyles.youTag]}>
                  #{item}
                </Text>
              );
            })}
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={postStyles.postInfo}>
          <Text style={postStyles.title}>{item.title}</Text>
          <Text style={postStyles.desc}>{item.desc}</Text>
        </SafeAreaView>
      </ScrollView>
      <SafeAreaView style={[naviStyles.navi_Info, { flex: 0.08 }]}>
        <Text>마이크테스트</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: width,
    height: height / 2,
    marginTop: 0,
    flex: 1,
  },
  UserImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  UserInfo: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 4,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  UserInfo_name: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 3,
  },
  UserInfo_location: {
    fontSize: 13,
  },
  locationIcon: {
    marginTop: 3,
    width: 11,
    height: 11,
    color: "gray",
  },
  Carbon_Footprint: {
    marginLeft: 180,
  },
});
const tagStyles = StyleSheet.create({
  tagBox: {
    marginHorizontal: 15,
    marginTop: 6,
  },
  TagFont: {
    fontSize: 14,
    marginLeft: 8,
    marginBottom: 3,
    fontWeight: "600",
  },
  myTag: {
    backgroundColor: "#DDFFFF",
  },
  youTag: {
    backgroundColor: "#ebffdd",
  },
});
const postStyles = StyleSheet.create({
  postInfo: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 21,
    fontWeight: "600",
  },
  desc: {
    fontSize: 14,
    marginTop: 10,
  },
});
const naviStyles = StyleSheet.create({
  navi_Info: {
    width: width,
    backgroundColor: "#faffd8",
  },
});
export default Post_View;
