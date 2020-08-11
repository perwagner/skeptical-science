import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Text, Icon } from 'native-base';


const BrowseScreen = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Button 
          iconLeft
          block
          primarty
          style={styles.button}
          onPress={() => navigation.navigate('itsnothappening')}
        >
          <Icon type="FontAwesome" name="arrow-right" />
          <Text>It's not happening</Text>
        </Button>
        <Button 
          iconLeft
          block
          primarty
          style={styles.button}
          onPress={() => navigation.navigate('itsnotus')}
        >
          <Icon type="FontAwesome" name="arrow-right" />
          <Text>It's not us</Text>
        </Button>
        <Button 
          iconLeft
          block
          primarty
          style={styles.button}
          onPress={() => navigation.navigate('itsnotbad')}
        >
          <Icon type="FontAwesome" name="arrow-right" />
          <Text>It's not bad</Text>
        </Button>
      </Content>
    </Container>
  );
}


const styles = StyleSheet.create({
  button: {
    marginTop: 10
  }
})

export default BrowseScreen;