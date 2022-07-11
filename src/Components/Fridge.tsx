import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  Pressable,
  Modal,
} from "react-native";
import { DraxProvider, DraxList } from "react-native-drax";

// const { width, height } = Dimensions.get("window");

const Fridge = ({ width, height }) => {
  console.log(width, "/", height);
  const [vegetable, setVegetable] = useState([
    {
      vegetable: "🧅",
      count: 5,
    },
    {
      vegetable: "🍌",
      count: 8,
    },
    {
      vegetable: "🍇",
      count: 3,
    },
    {
      vegetable: "🥒",
      count: 3,
    },
    {
      vegetable: "🍈",
      count: 1,
    },
    {
      vegetable: "🥓",
      count: 8,
    },
    {
      vegetable: "🍅",
      count: 2,
    },
    {
      vegetable: "🥦",
      count: 5,
    },
    {
      vegetable: "🌽",
      count: 8,
    },
  ]);
  const [modalView, setModalView] = useState(false);
  const [listModalView, setListModalView] = useState(false);
  const [selectedVegetable, setSelectedVegetable] = useState(0);

  return (
    <SafeAreaView
      style={{
        width: width,
        height: height,
      }}
    >
      <Modal
        visible={modalView}
        onRequestClose={() => setModalView(!modalView)}
        style={[styles.Modal]}
      >
        <Text>{vegetable[selectedVegetable].vegetable}</Text>
        <Text>{vegetable[selectedVegetable].count}</Text>
        <Pressable onPress={() => setModalView(!modalView)}>
          <Text style={{ margin: 150 }}>close</Text>
        </Pressable>
      </Modal>
      <View style={{ flex: 0.1 }} />
      <View style={{ flex: 0.4 }}>
        <ImageBackground
          style={{ flex: 1 }}
          source={require("../Resources/Fridge/main_Frame.png")}
          resizeMode="contain"
        >
          <View style={{ flex: 1, marginVertical: 8, marginHorizontal: 100 }}>
            <View style={[styles.VegetableOnLine]}>
              <Pressable
                style={{ marginLeft: -3 }}
                onPress={() => {
                  setSelectedVegetable(0);
                  setModalView(true);
                }}
              >
                <Text style={[styles.TextIcon]}>{vegetable[0].vegetable}</Text>
                <Text style={[styles.TextCount]}>{vegetable[0].count}</Text>
              </Pressable>
              <Pressable
                style={[styles.VegetableOn]}
                onPress={() => {
                  setSelectedVegetable(1);
                  setModalView(true);
                }}
              >
                <Text style={[styles.TextIcon]}>{vegetable[1]?.vegetable}</Text>
                <Text style={[styles.TextCount]}>{vegetable[1]?.count}</Text>
              </Pressable>
              <Pressable
                style={[styles.VegetableOn]}
                onPress={() => {
                  setSelectedVegetable(2);
                  setModalView(true);
                }}
              >
                <Text style={[styles.TextIcon]}>{vegetable[2]?.vegetable}</Text>
                <Text style={[styles.TextCount]}>{vegetable[2]?.count}</Text>
              </Pressable>
            </View>
            <View style={[styles.VegetableOnLine]}>
              <Pressable
                style={{ marginLeft: -3 }}
                onPress={() => {
                  setSelectedVegetable(3);
                  setModalView(true);
                }}
              >
                <Text style={[styles.TextIcon]}>{vegetable[3]?.vegetable}</Text>
                <Text style={[styles.TextCount]}>{vegetable[3]?.count}</Text>
              </Pressable>
              <Pressable
                style={[styles.VegetableOn]}
                onPress={() => {
                  setSelectedVegetable(4);
                  setModalView(true);
                }}
              >
                <Text style={[styles.TextIcon]}>{vegetable[4]?.vegetable}</Text>
                <Text style={[styles.TextCount]}>{vegetable[4]?.count}</Text>
              </Pressable>
              <Pressable
                style={[styles.VegetableOn]}
                onPress={() => {
                  setSelectedVegetable(5);
                  setModalView(true);
                }}
              >
                <Text style={[styles.TextIcon]}>{vegetable[5]?.vegetable}</Text>
                <Text style={[styles.TextCount]}>{vegetable[5]?.count}</Text>
              </Pressable>
            </View>
            <View style={[styles.VegetableOnLine]}>
              <Pressable
                style={{ marginLeft: -3 }}
                onPress={() => {
                  setSelectedVegetable(6);
                  setModalView(true);
                }}
              >
                <Text style={[styles.TextIcon]}>{vegetable[6]?.vegetable}</Text>
                <Text style={[styles.TextCount]}>{vegetable[6]?.count}</Text>
              </Pressable>
              <Pressable
                style={[styles.VegetableOn]}
                onPress={() => {
                  setSelectedVegetable(7);
                  setModalView(true);
                }}
              >
                <Text style={[styles.TextIcon]}>{vegetable[7]?.vegetable}</Text>
                <Text style={[styles.TextCount]}>{vegetable[7]?.count}</Text>
              </Pressable>
              <Pressable
                style={[styles.VegetableOn]}
                onPress={() => {
                  setSelectedVegetable(8);
                  setModalView(true);
                }}
              >
                <Text style={[styles.TextIcon]}>{vegetable[8]?.vegetable}</Text>
                <Text style={[styles.TextCount]}>{vegetable[8]?.count}</Text>
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
      <SafeAreaView style={{ flex: 0.2 }}>
        <Modal
          visible={listModalView}
          onRequestClose={() => setModalView(!listModalView)}
          style={[styles.Modal]}
        >
          <DraxProvider>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <DraxList
                data={vegetable}
                renderItemContent={({ item }) => (
                  <View
                    style={{
                      flexDirection: "row",
                      margin: 15,
                      borderWidth: 1,
                      width: 100,
                    }}
                  >
                    <Text style={{ fontSize: 30 }}>{item.vegetable}</Text>
                    <Text style={{ fontSize: 30 }}>{item.count}</Text>
                  </View>
                )}
                onItemReorder={({ fromIndex, toIndex }) => {
                  const newData = vegetable.slice();
                  newData.splice(toIndex, 0, newData.splice(fromIndex, 1)[0]);
                  setVegetable(newData);
                }}
                keyExtractor={(item) => item.vegetable}
              />
            </View>
          </DraxProvider>
          <Pressable onPress={() => setListModalView(false)}>
            <Text style={{ marginTop: 10 }}>닫기</Text>
          </Pressable>
        </Modal>
        <Pressable onPress={() => setListModalView(true)}>
          <Text>List 보기</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
