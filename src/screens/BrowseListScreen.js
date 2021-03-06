import React from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon } from 'native-base';


const BrowseListScreen = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Icon type="FontAwesome" name="arrow-right" />

              {/* <Thumbnail square source={{ uri: 'Image URL' }} /> */}
            </Left>
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
            <Left>
              <Icon type="FontAwesome" name="arrow-right" />

              {/* <Thumbnail square source={{ uri: 'Image URL' }} /> */}
            </Left>
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
            <Left>
              <Icon type="FontAwesome" name="arrow-right" />

              {/* <Thumbnail square source={{ uri: 'Image URL' }} /> */}
            </Left>
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


export default BrowseListScreen;