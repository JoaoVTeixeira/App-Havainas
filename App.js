import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/home';
import Login from './src/pages/login';
import Register from './src/pages/RegisterScreen'; 
import CartScreen from './src/pages/Cartscreen';
import ProductDetailScreen from './src/pages/ProductDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} /> 
        <Stack.Screen name="Cart" component={CartScreen} /> 
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
