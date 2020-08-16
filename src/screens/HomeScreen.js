import React from 'react';
import { Container, Button, Text } from 'native-base';


const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>Open up App.js to start working on your app!</Text>
        <Button
          onPress={() => {
            navigation.navigate("About");
          }}
        >
        <Text>Click Me!</Text>
      </Button>
    </Container>
  );
}

export default HomeScreen;
