import React from 'react';
import { Container, Content, Button, Text, Header, Tab, Tabs } from 'native-base';
import Markdown from 'react-native-markdown-package';
import * as Linking from 'expo-linking';


const IndividualArticleScreen = ({ route }) => {
  const { basicText, intermediateText, advancedText, url } = route.params;

  let formattedMyth = "No myth loaded yet";
  let formattedBasicText = "Sorry, no basic text";
  let formattedIntermediateText = "Sorry, no intermediate text";
  let formattedAdvancedText = "Sorry, no advanced text";

  if (typeof basicText === 'string') {
    formattedBasicText = basicText.split("<BR>").join("\u000A\u000A");  
  }
  if (typeof intermediateText === 'string') {
    formattedIntermediateText = intermediateText.split("<BR>").join("\u000A\u000A");  
  }
  if (typeof advancedText === 'string') {
    formattedAdvancedText = advancedText.split("<BR>").join("\u000A\u000A");  
  }

  return (
    <Container>
      <Content>
        <Tabs>
          <Tab heading="Basic">
            <Markdown>
              {formattedBasicText}
            </Markdown>
          </Tab>
          <Tab heading="Intermediate">
            <Markdown>
              {formattedIntermediateText}
            </Markdown>
          </Tab>      
          <Tab heading="Advanced">
            <Markdown>
              {formattedAdvancedText}
            </Markdown>
          </Tab>                  
        </Tabs>

        
        <Button full info>
            <Text
              onPress={() => {Linking.openURL(url);}}
            >Original Article</Text>
        </Button>

      </Content>
    </Container>
  );
}


export default IndividualArticleScreen;