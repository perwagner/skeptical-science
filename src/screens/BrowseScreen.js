import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Text, Icon } from 'native-base';
import * as firebase from 'firebase';


function writeTestData() {
  const db = firebase.firestore();
  const docRef = db.collection('users').doc('alovelace');
  docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });
}

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

        <Button 
          iconLeft
          block
          primarty
          style={styles.button}
          onPress={() => writeTestData()}
        >
          <Icon type="FontAwesome" name="arrow-right" />
          <Text>Write test data</Text>
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