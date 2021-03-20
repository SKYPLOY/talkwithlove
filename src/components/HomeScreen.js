import * as React from 'react';
import { 
    View, 
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
  } from 'react-native';
import { Container,Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, } from 'native-base';
import { Navigation } from '@material-ui/icons';


export default function FeedScreen({navigation}) {
    return (
      <Container style={styles.container}>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/m13.jpg')}  />
                <Body>
                <TouchableOpacity onPress={() =>  navigation.navigate("UserProfile")}>
                  <Text>Rowoon</Text>
                </TouchableOpacity>
                  
                  <Text note>ชาย , 22 ปี</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../assets/m12.jpg')} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
            <CardItem style={{justifyContent:'space-between'}}>
                <Button transparent>
                  <Icon active name="chatbubble-ellipses-outline" /> 
                </Button>
                <Button transparent>
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
            <CardItem style={{justifyContent:'space-between'}}>
                <Button transparent>
                <Icon active name="chatbubble-ellipses-outline" /> 
                </Button>
                <Button transparent>
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