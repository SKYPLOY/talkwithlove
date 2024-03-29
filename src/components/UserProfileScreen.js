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
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'

const UserProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
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
      </View>
      </View>
      
      <View style={{alignItems:'center'}}>
      <Card style={{width:null, height:300,justifyContent:'center',marginBottom:20}}>
          <Card.Cover 
            source={require('../assets/m12.jpg')}
            resizeMode= "cover"
            style={{width:300, height:300,}}
            />
      </Card>
      <Card style={{width:null, height:300,justifyContent:'center'}}>
          <Card.Cover 
            source={require('../assets/m13.jpg')}
            resizeMode= "cover"
            style={{width:300, height:300,}}
            />
      </Card>
      </View>
      </ScrollView>
      
      <View>
        <Button icon="comment"  mode="contained" color="#FBD1F0" onPress={() => navigation.navigate("Question ")}> เริ่มพูดคุยกันเลย </Button>
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
    marginBottom: 10,
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