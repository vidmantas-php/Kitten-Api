import React from "react";
import FeedNavigator from "./navigation/FeedNavigator";
import { NavigationContainer } from "@react-navigation/native";
import OfflineNotice from "./components/OfflineNotice";

export default function App() {
  return (
    <NavigationContainer>
      <OfflineNotice />
      <FeedNavigator />
    </NavigationContainer>
  );
}
