import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstAppStackScreen from './src/components/FirstAppScreen';
import RegisterStackScreen from './src/components/RegisterScreen';
import LoginStackScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/TopTabNavigator';
import QuestionnaireScreen from './src/components/QuestionnaireScreen';
import MyProfileScreen from './src/components/MyProfileScreen';
import UserProfileScreen from './src/components/UserProfileScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: null}} name=" " component={FirstAppStackScreen} />
          <Stack.Screen options={{title:"Sign up",headerBackTitle:"black"}} name="Register " component={RegisterStackScreen} />
          <Stack.Screen options={{title:"Login",headerBackTitle:"black" }} name="Login " component={LoginStackScreen} />
          <Stack.Screen options={{title:"Question",headerBackTitle:"black" }} name="Question " component={QuestionnaireScreen} />
        <Stack.Screen options={{headerShown: null}} name="Home " component={HomeScreen} />
        <Stack.Screen options={{title:"Profile",headerBackTitle:"black" }} name="Profile" component={MyProfileScreen} />
        <Stack.Screen options={{title:"User",headerBackTitle:"black" }} name="UserProfile" component={UserProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;