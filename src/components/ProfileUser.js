import * as React from 'react';
import { 
    View, 
    Text,
    Image,
    StyleSheet
  } from 'react-native';

  export default function FeedScreen() {
      return (
        <View style={styles.Box}>
            <View><Image source={require('../assets/logo.png')} style={styles.ImageLogo}/></View>
            <View style={{justifyContent:"center"}}>
                <Text style={styles.logo}>ตอบคำถามต่อไปนี้</Text>
            </View>
        </View> 
      );
  }
  