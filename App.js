import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstAppStackScreen from './src/components/FirstApp';
import RegisterStackScreen from './src/components/Register';
import LoginStackScreen from './src/components/Login'
import { CenterFocusStrong } from '@material-ui/icons';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: null}} name=" " component={FirstAppStackScreen} />
        <Stack.Screen options={{title:null,headerBackTitle:"black"}} name="Register " component={RegisterStackScreen} />
        <Stack.Screen options={{title:null,headerBackTitle:"black" }} name="Login " component={LoginStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;