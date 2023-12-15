import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './myApp/src/screens/login';
import Otp from './myApp/src/screens/otp';
import SignupPage from './myApp/src/screens/signUpPage';
import Dashboard from './myApp/src/screens/dashboard';
import SettingsScreen from './myApp/src/screens/setting';
import CartScreen from './myApp/src/screens/cartScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Stack = createNativeStackNavigator();

function App() {
  return (
   

    
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />  */}
        {/* <Stack.Screen name="Sign Up" component={SignupPage} /> */}
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
    

      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

export default App;