import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,Image,} from "react-native";
import { Container, Header, Content, ListItem, CheckBox, Body,Label } from 'native-base';
import { Input } from 'react-native-elements';
export default  Question = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={require('../assets/iconcheck.png')} style={{margin:10}}/>
            <Text style={styles.modalText}>ลงทะเบียนเสร็จเรียบร้อย</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =>  setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}
                onPress={() => navigation.navigate('Home ')}
              >เริ่มต้นใช้งาน</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={{flexDirection:'column'}}>
        <View style={styles.Box}>
          <View><Image source={require('../assets/logo.png')} style={styles.ImageLogo}/></View>
          <View style={{justifyContent:"center"}}>
            <Text style={styles.logo}>ตอบคำถามต่อไปนี้</Text>
          </View>
        </View>
        <Content>
          <View style={{padding:10}}>
            <View style={styles.textCheck}><Text>1.คุณเป็น?</Text></View>
            <ListItem>
              <CheckBox checked={true} />
              <Body style={styles.textCheck}><Text>ผู้หญิง</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} />
              <Body style={styles.textCheck}><Text>ผู้ชาย</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} color="green"/>
              <Body style={styles.textCheck}><Text>อื่นๆ</Text></Body>
            </ListItem>
          </View>
          <View style={{padding:10}}>
            <View style={styles.textCheck}><Text>2.คุณคิดว่าคุณมีนิสัยเป็นอย่างไร?</Text></View>
            <ListItem>
              <CheckBox checked={true} />
              <Body style={styles.textCheck}><Text>ใจดี</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} />
              <Body style={styles.textCheck}><Text>สุขุม</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} />
              <Body style={styles.textCheck}><Text>เจ้าชู้</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} color="green"/>
              <Body style={styles.textCheck}><Text>อื่นๆ</Text></Body>
            </ListItem>
            <Input placeholder='ระบุ' style={{paddingStart:5 }}/>
          </View>
          <View style={{padding:10}}>
            <View style={styles.textCheck}><Text>3.รสนิยมทางเพศของคุณ?</Text></View>
            <ListItem>
              <CheckBox checked={true} />
              <Body style={styles.textCheck}><Text>เกย์</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} />
              <Body style={styles.textCheck}><Text>เลสเบี้ยน</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} />
              <Body style={styles.textCheck}><Text>ไม่ฝักใฝ่ทางเพศ</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} color="green"/>
              <Body style={styles.textCheck}><Text>อื่นๆ</Text></Body>
            </ListItem>
            <Input placeholder='ระบุ' style={{paddingStart:5 }}/>
          </View>
          <View style={{padding:10}}>
            <View style={styles.textCheck}><Text>4.คุณชอบคนแบบไหน?</Text></View>
            <ListItem>
              <CheckBox checked={true} />
              <Body style={styles.textCheck}><Text>ร่าเริง</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} />
              <Body style={styles.textCheck}><Text>สุขุม</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} />
              <Body style={styles.textCheck}><Text>เจ้าชู้</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} color="green"/>
              <Body style={styles.textCheck}><Text>อื่นๆ</Text></Body>
            </ListItem>
            <Input placeholder='ระบุ' style={{paddingStart:5 }}/>
          </View>
          <View style={{padding:10}}>
            <View style={styles.textCheck}><Text>5.คุณต้องการเห็น?</Text></View>
            <ListItem>
              <CheckBox checked={true} />
              <Body style={styles.textCheck}><Text>ผู้หญิง</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} />
              <Body style={styles.textCheck}><Text>ผู้ชาย</Text></Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={false} color="green"/>
              <Body style={styles.textCheck}><Text>ทุกคน</Text></Body>
            </ListItem>
          </View>
          <View style={{padding:10}}>
            <View style={styles.textCheck}><Text>6.คุณต้องการหาคนอายุเท่าไร?</Text></View>
            <Input placeholder='ระบุ' style={{paddingStart:5 }}/>
          </View>
        </Content>
    
        <View style={styles.buttonstart}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
             >
            <Text style={styles.textStyle}>ตกลง</Text>
          </Pressable>
        </View>
        
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"#FDEEF9" ,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    width:200,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }, 
  Box:{
    margin:20,
    flexDirection: "row",
    alignItems: 'flex-end', 
    justifyContent: 'flex-start',
  },   
  ImageLogo:{
    margin:10,
    width:85,
    height:70
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
  buttonstart:{
    width:100,
    alignItems: 'flex-end', 
    justifyContent: 'flex-start',
    right:-240
  },
  textCheck:{
    paddingStart:5
  }

      
});