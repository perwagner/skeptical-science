import React from 'react';
import * as firebase from 'firebase';
// import "firebase/firestore";
require("firebase/firestore");
import Constants from 'expo-constants';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigator from "./src/navigation/DrawerNavigator";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



// Initialize Firebase
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  databaseURL: Constants.manifest.extra.databaseURL,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: "app-id",
  measurementId: Constants.manifest.extra.measurementId
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log('App reloaded, so firebase did not re-initialize');
}



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

 
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    

    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  }
}
