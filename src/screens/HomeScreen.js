import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


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
