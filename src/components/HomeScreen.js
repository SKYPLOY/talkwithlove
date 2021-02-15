import * as React from 'react';
import { 
    View, 
    Text,
    Image,
    StyleSheet
  } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, } from 'native-base';


export default function FeedScreen() {
    return (
      <Container style={styles.container}>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/m13.jpg')} />
                <Body>
                  <Text>Rowoon</Text>
                  <Text note>ชาย , 22 ปี</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../assets/m12.jpg')} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
            <CardItem style={{justifyContent:'center'}}>
                <Button transparent style={{padding:20}}>
                  <Icon active name="close" />
                </Button>
                <Button transparent style={{padding:20}}>
                  <Icon active name="chatbubble-ellipses-outline" /> 
                </Button>
                <Button transparent style={{padding:20}}>
                  <Icon active name="heart-outline" />
                </Button>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/m13.jpg')} />
                <Body>
                  <Text>Rowoon</Text>
                  <Text note>ชาย , 22 ปี</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../assets/m12.jpg')} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
            <CardItem style={{justifyContent:'center'}}>
                <Button transparent style={{padding:20}}>
                  <Icon active name="close" />
                </Button>
                <Button transparent style={{padding:20}}>
                  <Icon active name="chatbubble-ellipses-outline" /> 
                </Button>
                <Button transparent style={{padding:20}}>
                  <Icon active name="heart-outline" />
                </Button>
            </CardItem>
          </Card>
        </Content>
        
      </Container>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      padding:10
    },
    Icon:{
      color:'red'
    }
  })