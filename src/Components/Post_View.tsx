import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  FlatList,
  Pressable,
  View,
  Modal

} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import ImageViewer from "react-native-image-zoom-viewer";

import userImage from "../Resources/userImage.png";
import locationIcon from "../Resources/icons/location.png";
import Carbon_Footprint_ZERO from "../Resources/Carbon_Footprint/zero.png";

const { width, height } = Dimensions.get("window");
const images = [
  "https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80",
];
const Post_View = ({ navigation, route }) => {
  const need_My_Tag = require("../../needs_My_Tag.json");
  const item = route.params;
  const postImage = item.image;
  const [active, setActive] = useState(0);

  const _imageChange = ({nativeEvent}) => {
    const slider = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
    if (slider != active) {
      setActive(slider)
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {/* <Image source={item.image[0]} style={styles.Image} /> */}
        <View style={styles.Post_Image}>
          <ScrollView
            horizontal
            pagingEnabled
            onScroll={_imageChange}
            showsHorizontalScrollIndicator={false}>
            {
              postImage.map((item, index) => {
                return (
                <Image key={"POST_IMAGE_" + index} source={{uri:item}} style={styles.Image} />)
              })
            }
          </ScrollView>
          <View style={{flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center'}}>
            {
            postImage.map((item, index) => {
              return (<Text key={"navi"+index} style={[ styles.Image_Navi_Font, index==active?styles.Image_Navi_On:styles.Image_Navi_Off]}>⬤</Text>)

            })
            }
          </View>
        </View>
        <SafeAreaView style={styles.UserInfo}>
          <Pressable onPress={() => navigation.navigate("userInfo", item)}>
            <Image style={styles.UserImage} source={userImage} />
          </Pressable>
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
            <Text key={"myTag"} style={[tagStyles.TagFont, tagStyles.myTag]}>
              #나
            </Text>
            {item.myTag.map((item) => {
              return (
                <Text
                  key={"myTag_" + item}
                  style={[tagStyles.TagFont, tagStyles.myTag]}
                >
                  #{item}
                </Text>
              );
            })}
            {item.conditions && (
              <Text style={[tagStyles.TagFont, tagStyles.myTag]}>#상태</Text>
            )}
            {item.conditions && (
              <Text style={[tagStyles.TagFont, tagStyles.myTag]}>
                #{item.conditions}
              </Text>
            )}
          </SafeAreaView>
          <SafeAreaView style={{ flexDirection: "row" }}>
            <Text key={"youTag"} style={[tagStyles.TagFont, tagStyles.youTag]}>
              #너
            </Text>
            {item.youTag.map((item) => {
              return (
                <Text
                  key={"youTag_" + item}
                  style={[tagStyles.TagFont, tagStyles.youTag]}
                >
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
        <SafeAreaView style={proposalStyle.needs_My_Tag_Box}>
          <Text style={proposalStyle.needs_My_Tag_Title}>
            내가 줄 수 있는 채소가 필요한 사람
          </Text>
          <FlatList
            data={need_My_Tag}
            renderItem={(item) => {
              return (
                <Pressable
                  style={proposalStyle.needs_My_Tag_Post}
                  onPress={() => {
                    navigation.navigate("List_Of_Posts");
                    navigation.navigate("Post_View", item.item);
                  }}
                >
                  <Image
                    source={{ uri: item.item.image }}
                    style={proposalStyle.needs_My_Tag_Post_Image}
                  />
                  <SafeAreaView style={{ flexDirection: "row" }}>
                    <Text
                      key={"needTag"}
                      style={[
                        proposalStyle.need_My_Tag_Post_tagFont,
                        proposalStyle.needs_My_Tag_Post_myTag,
                      ]}
                    >
                      #나
                    </Text>
                    {item.item.myTag.map((item) => {
                      return (
                        <Text
                          key={"needTag" + item}
                          style={[
                            proposalStyle.need_My_Tag_Post_tagFont,
                            proposalStyle.needs_My_Tag_Post_myTag,
                          ]}
                        >
                          #{item}
                        </Text>
                      );
                    })}
                  </SafeAreaView>
                  <SafeAreaView style={{ flexDirection: "row" }}>
                    <Text
                      key={"youTag"}
                      style={[
                        proposalStyle.need_My_Tag_Post_tagFont,
                        proposalStyle.needs_My_Tag_Post_youTag,
                      ]}
                    >
                      #너
                    </Text>
                    {item.item.youTag.map((item) => {
                      return (
                        <Text
                          key={"youTag" + item}
                          style={[
                            proposalStyle.need_My_Tag_Post_tagFont,
                            proposalStyle.needs_My_Tag_Post_youTag,
                          ]}
                        >
                          #{item}
                        </Text>
                      );
                    })}
                  </SafeAreaView>
                </Pressable>
              );
            }}
            numColumns={2}
          />
        </SafeAreaView>
      </ScrollView>
      {/* <SafeAreaView style={[naviStyles.navi_Info, { flex: 0.08 }]}>
        <Text>마이크테스트</Text>
      </SafeAreaView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  Post_Image: {
    width: width,
    height: height / 2
  },
  Image: {
    width: width,
    height: height / 2,
    marginTop: 0,
    flex: 1,
  },
  Image_Navi_Font: {
    fontSize: 18,
    margin: 2,
    marginBottom: 5,
  },
  Image_Navi_On: {
    color: '#ffffff'
  },
  Image_Navi_Off: {
    color: '#888'
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
const proposalStyle = StyleSheet.create({
  needs_My_Tag_Box: {
    marginHorizontal: 15,
    marginTop: 30,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  needs_My_Tag_Title: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "600",
  },
  needs_My_Tag_Post: {
    marginRight: 30,
    width: width / 2.4,
  },
  needs_My_Tag_Post_Image: {
    width: width / 2.4,
    height: height / 7,
  },
  need_My_Tag_Post_tagFont: {
    fontSize: 12,
    marginLeft: 8,
    marginBottom: 3,
    fontWeight: "600",
    // flexShrink: 1,
  },
  needs_My_Tag_Post_myTag: {
    backgroundColor: "#DDFFFF",
  },
  needs_My_Tag_Post_youTag: {
    backgroundColor: "#ebffdd",
  },
});
const naviStyles = StyleSheet.create({
  navi_Info: {
    width: width,
    backgroundColor: "#faffd8",
  },
});
export default Post_View;
