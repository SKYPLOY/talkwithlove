import { Input } from 'native-base';
import React from 'react';
import {View, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  Button, 
  Card,
  Paragraph
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome'

const UserProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={require('../assets/m12.jpg')}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {marginTop:15, marginBottom: 5,}]}>RoWoon</Title>
            <Caption style={styles.caption}>@Ro_Lee</Caption>
          </View>
          <View style={{justifyContent:"flex-end", paddingBottom:39, marginLeft:100}}>
            <Icon name="heart" color="red" size={25} onPress={() => navigation.navigate("Question ")}/>
          </View>
        </View>  
      </View>

      <View style={styles.Box}>
      <View style={styles.userInfoSectionBox}>
        <View style={styles.row}>
          <Icon name="birthday-cake" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>03-02-1998</Text>
        </View>
        <View style={styles.row}>
          <Icon name="envelope" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Rowoon_Lee@email.com</Text>
        </View>
        <View style={styles.row}>
          <Text style={{color:"#777777",fontSize:18}}>ผู้ติดตาม</Text>
          <Text style={{marginLeft: 10,fontSize:18, fontWeight: 'bold'}}>228</Text>
          <Text style={{color:"#777777",marginLeft: 20,fontSize:18}}>กำลังติดตาม</Text>
          <Text style={{marginLeft: 10,fontSize:18, fontWeight: 'bold'}}>18</Text>
        </View>
      </View>
      </View>
      
      <View style={{padding:10}}>
        <Card  style={{marginBottom:10}}>
          <Card.Content style={{flexDirection: 'row'}} >
            <Avatar.Image 
              source={require('../assets/m12.jpg')}
              size={60}
            />
            <View style={{paddingLeft:10}}>
              <View style={{flexDirection:'row'}}>
                <Title style={{fontSize:16}}>RoWoon</Title>
                <Text style={{fontSize:14 , color:"#777777", marginLeft:10, paddingTop:8}}>5 ชม.</Text>
              </View>
              <Paragraph style={{fontSize:18}}>WTF</Paragraph>
            </View>
          </Card.Content>
        </Card>
        <Card  style={{marginBottom:10}}>
          <Card.Content style={{flexDirection: 'row'}} >
            <Avatar.Image 
              source={require('../assets/m12.jpg')}
              size={60}
            />
            <View style={{paddingLeft:10}}>
              <View style={{flexDirection:'row'}}>
                <Title style={{fontSize:16}}>RoWoon</Title>
                <Text style={{fontSize:14 , color:"#777777", marginLeft:10, paddingTop:8}}>5 ชม.</Text>
              </View>
              <Paragraph style={{fontSize:18}}>What the help</Paragraph>
            </View>
          </Card.Content>
        </Card>
      </View>
      
      
    </SafeAreaView>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffff'
    
  },
  Box:{
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    marginBottom:10
  },
  userInfoSection: {
    paddingHorizontal: 20,
    marginBottom: 15,
   
  },
  userInfoSectionBox: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  BoxPost:{
    height:60,
    marginLeft: 12,
    marginRight: 15,
    borderWidth: 1,
    borderRadius:10,
    borderColor:"#E2E0E0",
    flexDirection: 'row',
    justifyContent:"space-between"
  },
  input: {
    padding: 15,
    fontSize: 16,
    justifyContent:"flex-start"
  },

});