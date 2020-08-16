import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';


export default class AboutScreen extends Component {
  render() {
    return (
        <Container style={styles.container}>
          <Content>
            <Text style={styles.title}>ABOUT</Text>
            <Text style={styles.mainText}>
              This app is created using content from https://skepticalscience.com
            </Text>
            <Text style={styles.mainText}>
              Made 100% by voluntary work and will be further developed as we
              have time to add more features.
            </Text>
          </Content>
        </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    fontSize: 22,
    fontWeight: "bold"
  },
  mainText: {
    marginTop: 5,
    fontSize: 18
  }
});
