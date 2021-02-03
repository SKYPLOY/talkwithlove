import React from 'react';
import { 
  View, 
  Image,
  StyleSheet,
  Text,
  Alert
} from 'react-native';
import { Button,Input} from 'react-native-elements';






function LoginStackScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.Box}>
            <View><Image source={require('../assets/logo.png')} style={styles.ImageLogo}/></View>
            <View style={{justifyContent:"center"}}>
              <Text style={styles.logo}>เข้าสู่ระบบ</Text>
            </View>
        </View> 
        <View style={styles.BoxInput}>
            <View style={{marginBottom:-20}}>
                <Input placeholder='ชื่อผู้ใช้งาน' leftIcon={{ type: 'font-awesome', name: 'user',size:30}} inputStyle={styles.InputText}/>
            </View>
            <View style={{marginBottom:-20}}>
                <Input placeholder='รหัสผ่าน' leftIcon={{ type: 'font-awesome', name: 'lock' ,size:30}} inputStyle={styles.InputText}/>
            </View>
        </View>
        <View style={styles.ButtonPermission}>
              <Button  onPress={() => Alert.alert('ยินดีต้อนรับ')}
                  buttonStyle={{backgroundColor: "#ffffff" ,width:300}}
                  title="เข้าใช้งาน" titleStyle={{ color: '#515151', fontSize:18,fontFamily:"Roboto" }}
                  
              ></Button>
          </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
    container:{ 
            flex: 1,
            backgroundColor:"#FDEEF9"  
          },
    Box:{
            
            flexDirection: "row",
            alignItems: 'flex-end', 
            justifyContent: 'flex-start',
          },    
    ImageLogo:{
            margin:10,
            width:85,
            height:70
          },
    BoxInput:{
            flex:1,
            width:290,
            justifyContent: 'center',
            margin:40,
            top:-50
          },
    logo:{
        backgroundColor:"#FFFFFF",
        borderRadius:20,
        fontSize:18,
        width:210,
        height:50,
        color:"#232323",
        padding:10,
        top:-15
        
      },
    ButtonPermission:{
      flex:0.5,
      alignItems: 'center', 
      justifyContent: 'center',
      top:-50,
      
      
    },
    InputText:{
        marginLeft:10,
        fontSize:16,
      },        
})
export default LoginStackScreen;