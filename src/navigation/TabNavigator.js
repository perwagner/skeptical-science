import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BrowseStackNavigator, TopTenStackNavigator, ReportsStackNavigator, AboutStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Browse" component={BrowseStackNavigator} />
      <Tab.Screen name="Top 10" component={TopTenStackNavigator} />
      <Tab.Screen name="Reports" component={ReportsStackNavigator} />
      <Tab.Screen name="About" component={AboutStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
