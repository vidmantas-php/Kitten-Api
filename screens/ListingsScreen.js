import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import ActivityIndicator from "../components/ActivityIndicator.js";
import Button from "../components/Button";

import catNames from "../data/catNames";

export default function ListingsScreen({ navigation }) {
  const [catList, setCatList] = useState([]);
  const [count] = useState(30);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    makeNewKittenList(count);
  }, []);

  return (
    <Screen>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          title={30}
          onPress={() => {
            makeNewKittenList(30);
          }}
        />
        <Button
          title={50}
          onPress={() => {
            makeNewKittenList(50);
          }}
        />
        <Button
          title={100}
          onPress={() => {
            makeNewKittenList(100);
          }}
        />
      </View>
      <ActivityIndicator visible={loading} />
      <FlatList
        style={{ marginTop: 10 }}
        data={catList}
        keyExtractor={(catList) => catList.keyName.toString()}
        renderItem={({ item }) => (
          <Card
            name={item.name}
            id={item.keyName}
            imageUrl={item.picture}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );

  function makeNewKittenList(filterNumber) {
    setLoading(true);
    const maxNumber = 16;
    const maxNameNumber = 95;
    let picture = [];
    let list = [];
    for (let i = 0; i < filterNumber; i++) {
      const randomNumber = Math.floor(Math.random() * maxNumber + 1);
      const randomNameNumber = Math.floor(Math.random() * maxNameNumber + 1);
      picture.push(`http://placekitten.com/300/300?image=${randomNumber}`);
      list.push({
        picture: picture[i],
        name: catNames[randomNameNumber],
        keyPic: randomNumber,
        keyName: i + 1,
      });
    }
    setCatList(list);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
}
