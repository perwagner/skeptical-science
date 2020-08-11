import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon } from 'native-base';


const TopTenScreen = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <List>
          <ListItem thumbnail>
            <Body>
              <Text>Sankhadeep</Text>
              <Text note numberOfLines={1}>Its time to build a difference . .</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>

          <ListItem thumbnail>
            <Body>
              <Text>Sankhadeep</Text>
              <Text note numberOfLines={1}>Its time to build a difference . .</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>

          <ListItem thumbnail>
            <Body>
              <Text>Sankhadeep</Text>
              <Text note numberOfLines={1}>Its time to build a difference . .</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>        

        </List>
      </Content>
    </Container>
  );
}


export default TopTenScreen;