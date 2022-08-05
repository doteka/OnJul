import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  Image,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import locationIcon from "../Resources/icons/location.png";
// import Post_View from "./Post_View";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const DESC_VIEW_MAX_LENGTH = 34;
const List_Of_Posts = ({ navigation }) => {
  const list_DATA = require("../../Post_List.json");
  console.log(list_DATA);
  const [list, setList] = useState(list_DATA);
  return (
    <SafeAreaView style={{ marginTop: width / 15 }}>
      <View></View>
      <View>
        <FlatList
          data={list}
          renderItem={(item) => {
            return (
              <Pressable
                style={styles.ListBox}
                key={item.item.postID}
                onPress={() => {
                  console.log(item.item);
                  navigation.navigate("Post_View", item.item);
                }}
              >
                <Image
                  style={styles.ListImage}
                  source={{ uri: item.item.image[0] }}
                />
                <SafeAreaView style={{ flexDirection: "column" }}>
                  <Text style={styles.ListTitle}>{item.item.title}</Text>
                  <Text style={styles.ListDesc}>
                    {item.item.desc.length < DESC_VIEW_MAX_LENGTH
                      ? item.item.desc
                      : item.item.desc.substring(0, DESC_VIEW_MAX_LENGTH) +
                        "..."}
                  </Text>
                  <SafeAreaView style={{ flexDirection: "row" }}>
                    {item.item.myTag.map((item) => {
                      return (
                        <Text key={"myTags" + item} style={styles.myTag}>
                          #{item}
                        </Text>
                      );
                    })}
                    {item.item.youTag.map((item) => {
                      return (
                        <Text key={"youTags" + item} style={styles.youTag}>
                          #{item}
                        </Text>
                      );
                    })}
                  </SafeAreaView>
                  <SafeAreaView
                    style={{ flexDirection: "row", margin: 3, marginLeft: -1 }}
                  >
                    <Image style={styles.locationIcon} source={locationIcon} />
                    <Text style={styles.locationText}>
                      {item.item.location}
                    </Text>
                  </SafeAreaView>
                </SafeAreaView>
              </Pressable>
            );
          }}
        ></FlatList>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ListBox: {
    borderBottomWidth: 1,
    borderColor: "gray",
    width: width - 50,
    flexDirection: "row",
    marginVertical: 10,
    marginLeft: 25,
  },
  ListImage: {
    width: 100,
    height: 100,
    margin: 10,
  },
  ListTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  ListDesc: {
    flexShrink: 1,
  },
  myTag: {
    backgroundColor: "#DDFFFF",
    fontWeight: "400",
    margin: 5,
    marginLeft: 0,
  },
  youTag: {
    backgroundColor: "#ebffdd",
    fontWeight: "400",
    margin: 5,
    marginLeft: 0,
  },
  locationIcon: {
    marginTop: 3,
    width: 11,
    height: 11,
    color: "gray",
  },
  locationText: {
    fontSize: 13,
    color: "#818181",
  },
});

export default List_Of_Posts;
