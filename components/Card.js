import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Text from "./Text";

function Card({ name, id, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} tint="light" uri={imageUrl} />
        <View style={styles.detailsContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.id} numberOfLines={2}>
            {id}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  id: {
    color: "#4ecdc4",
    fontWeight: "bold",
  },
  name: {
    marginBottom: 7,
  },
});

export default Card;
