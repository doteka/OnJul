import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import List_Of_Posts from "../List_Of_Posts";
import Post_View from "../Post_View";
import UserInfo from "../UserInfo";

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="List_Of_Posts">
      <Stack.Screen
        name="List_Of_Posts"
        component={List_Of_Posts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Post_View"
        component={Post_View}
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerBackTitleVisible: true,
          headerBackTitle: "Prev",
          headerTintColor: "#BBCCFF",
        }}
      />
      <Stack.Screen
        name="userInfo"
        component={UserInfo}
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerBackTitleVisible: true,
          headerBackTitle: "Prev",
          headerTintColor: "#BBCCFF",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
