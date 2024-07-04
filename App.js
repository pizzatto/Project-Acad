import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Feather, Entypo, FontAwesome5 } from '@expo/vector-icons';

// Importações dos componentes de tela
import Home from './src/pages/Home';
import Form from './src/pages/Form';
import Page1 from './src/pages/Page1';
import LoginScreen from './src/pages/Login';
import CriarSenha from './src/pages/CriarSenha';
import NomeUsuario from './src/pages/NomeUsuario';
import FotoPerfil from './src/pages/FotoPerfil';
import NewTraining from './src/pages/NewTraining';
import Page3 from './src/pages/Page3';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainStackNavigator({ setIsLoggedIn }) {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen">
        {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
      <Stack.Screen name="CriarSenha" component={CriarSenha} />
      <Stack.Screen name="NomeUsuario" component={NomeUsuario} />
      <Stack.Screen name="FotoPerfil" component={FotoPerfil} />
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="NewTraining" component={NewTraining} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <MaterialCommunityIcons
                name={focused ? 'home-variant' : 'home-variant-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Meus Treinos') {
            return focused ? (
              <Entypo name="drive" size={size} color={color} />
            ) : (
              <Feather name="hard-drive" size={size} color={color} />
            );
          } else if (route.name === 'Profile') {
            return focused ? (
              <FontAwesome5 name="user-alt" size={size} color={color} />
            ) : (
              <FontAwesome5 name="user" size={size} color={color} />
            );
          }
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Meus Treinos" component={Page1} />
      <Tab.Screen name="Profile" component={Page3} />
    </Tab.Navigator>
  );
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <TabNavigator />
      ) : (
        <MainStackNavigator setIsLoggedIn={setIsLoggedIn} />
      )}
    </NavigationContainer>
  );
};

export default App;
