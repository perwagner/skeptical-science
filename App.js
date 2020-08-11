import React from 'react';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MainStackNavigator } from "./src/navigation/StackNavigator";
import HomeScreen from './src/screens/HomeScreen';
import { Button } from 'react-native';
import BottomTabNavigator from "./src/navigation/TabNavigator";
import DrawerNavigator from "./src/navigation/DrawerNavigator";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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

        {/* <Drawer.Navigator
          initialRouteName="Home"
        >
          <Drawer.Screen name="Home" component={HomeScreen} />

          
        </Drawer.Navigator> */}



        {/* <Stack.Navigator
          headerMode="screen"
          screenOptions={{
            headerStyle: { backgroundColor: '#325C8E' },
          }}
        >
          <Stack.Screen 
            name="Home"
            component={HomeScreen} 
            options={{
              title: "Home",
              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#325C8E"
                />
              ),              
            }}
          />
        </Stack.Navigator> */}
        
      </NavigationContainer>
    );
  }
}





// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
