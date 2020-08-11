import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import BrowseScreen from "../screens/BrowseScreen";
import BrowseListScreen from "../screens/BrowseListScreen";
import TopTenScreen from "../screens/TopTenScreen";
import ReportsScreen from "../screens/ReportsScreen";


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}


const BrowseStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Browse" component={BrowseScreen} />
        <Stack.Screen name="itsnothappening" component={BrowseListScreen} />
        <Stack.Screen name="itsnotus" component={BrowseListScreen} />
        <Stack.Screen name="itsnotbad" component={BrowseListScreen} />        
      </Stack.Navigator>
    );
  }

const TopTenStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="TopTen" component={TopTenScreen} />
        </Stack.Navigator>
    );
}

const ReportsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Reports" component={ReportsScreen} />
        </Stack.Navigator>
    );
}

const AboutStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    );
}


export { BrowseStackNavigator, TopTenStackNavigator, ReportsStackNavigator, AboutStackNavigator };
