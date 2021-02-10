import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { 
  View, 
  Text
} from 'react-native';
import Home from './HomeScreen'; 
import ListChatScreen from './ListChatScreen';

const Tab = createMaterialTopTabNavigator();

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

export default function MyTabs() {
  return (
    <View style={{ flex: 1,marginTop:50}}>
    <View></View>
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#000000',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: '#FDEEF9' },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Notifications"
        component={ListChatScreen}
        options={{ tabBarLabel: 'ListChat' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
    </View>
  );
}