/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Inicio from './views/inicio';
import Login from './views/login';
import OTP from './views/opt';
import Solicitud from './views/solicitud';
import Navegacion from './views/navegacion';
import Menu from './views/menu';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name ="Inicio" component={Inicio} />
      <Stack.Screen name ="Login" component={Login} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="Solicitud" component={Solicitud} />
      <Stack.Screen name="Navegacion" component={Navegacion} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
