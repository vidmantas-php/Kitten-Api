import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Image } from "react-native-expo-image-cache";
import Text from "../components/Text";
import Screen from "../components/Screen";
import { ScrollView } from "react-native-gesture-handler";

import description from "../data/description";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <ScrollView>
          <Image style={styles.image} tint="light" uri={listing.picture} />
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{listing.name}</Text>
            <Text style={styles.id}>{listing.keyName}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  id: {
    color: "#4ecdc4",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "500",
  },
  description: {
    fontSize: 18,
    fontWeight: "400",
  },
});

export default ListingDetailsScreen;
