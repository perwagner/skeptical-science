import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { BrowseStackNavigator, TopTenStackNavigator, ReportsStackNavigator, AboutStackNavigator } from "./StackNavigator";
import { BaseRouter } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Browse') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Top 10') {
            iconName = focused ? 'ios-arrow-dropup-circle' : 'ios-arrow-dropup';
          } else if (route.name === 'Reports') {
            iconName = focused ? 'ios-paper' : 'md-paper';
          } else if (route.name === 'About') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}    
    >
      <Tab.Screen name="Browse" component={BrowseStackNavigator} />
      <Tab.Screen name="Top 10" component={TopTenStackNavigator} />
      <Tab.Screen name="Reports" component={ReportsStackNavigator} />
      <Tab.Screen name="About" component={AboutStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
