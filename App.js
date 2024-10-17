import React from 'react';
import Signup from './components/SignupService.js/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/LoginService/Login';
import HomeScreen from './components/Home/HomeScreen';
import AppStore from './components/Redux/AppStore';
import { Provider } from 'react-redux';
import Checkout from './components/OrderPage/Checkout';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={AppStore}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
