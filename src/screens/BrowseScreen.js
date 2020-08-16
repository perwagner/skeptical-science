import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Text, List, ListItem, Body } from 'native-base';
import * as firebase from 'firebase';
import 'firebase/firestore';
import * as Linking from 'expo-linking';


const BrowseScreen = ({ navigation }) => {
  const [ articles, setArticles ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const articlesRef = firebase.firestore().collection('articles');

  
  const getArticles = async () => {
    const articlesRef = firebase.firestore().collection('articles');
    const snapshop = await articlesRef.get();

    if (snapshop.empty) {
      console.log("No mathing documents");
      return;
    }

    let articleList = [];
    snapshop.forEach(doc => {
      let data = doc.data();
      data['id'] = doc.id;
      articleList.push(data);
    })
    setArticles(articleList);
  }


  const renderItem = ({ item }) => {
    const articleLink = (item) => {
      if (typeof item.basic_text == "undefined") {
        Linking.openURL(`${item.url}`);
      } else {
        console.log(item);
        navigation.navigate('Article', {
          title: item.title,
          basicText: item.basic_text,
          intermediateText: item.intermediate_text,
          advancedText: item.advanced_text,
          url: item.url
        })
      }
    }

    return (
      <ListItem>
        <TouchableOpacity 
          onPress={() => {articleLink(item);}}>
          <Body>
            <Text>{item.title}</Text>
            <Text note>{item.url_text}</Text>
          </Body>
        </TouchableOpacity>
      </ListItem>
    );
  }

  useEffect(() => {
    getArticles();
  }, []);

  if (!articles) {
      return null;
  }

  return (
    <Container>
      <List
        dataArray={articles}
        renderItem={renderItem}
        keyExtractor={(item) => String(item['id'])}
      />
    </Container>
  );
}


const styles = StyleSheet.create({
  buttonText: {
    color: 'black'
  }
})

export default BrowseScreen;