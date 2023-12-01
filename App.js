import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons, Entypo, Feather } from '@expo/vector-icons';

import Home from './src/pages/Home';
import Form from './src/pages/Form';
import Page1 from './src/pages/Page1';

const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();
const FormStack = createStackNavigator();

const FormStackScreen = () => (
  <FormStack.Navigator>
    <FormStack.Screen
      name="Form"
      component={Form}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#f5f5f5',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </FormStack.Navigator>
);

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          focused ? (
            <Ionicons name="md-home" size={size} color={color} />
          ) : (
            <Ionicons name="md-home-outline" size={size} color={color} />
          )
        ),
      }}
    />
    <MainStack.Screen
      name="Form"
      component={FormStackScreen}
      options={{
        headerShown: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      }}
    />
  </MainStack.Navigator>
);

const Page1Stack = createStackNavigator();

const Page1StackScreen = ({ route }) => (
  <Page1Stack.Navigator>
    <Page1Stack.Screen
      name="Meus Treinos"
      component={Page1}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          return focused ? (
            <Entypo name="drive" size={size} color={color} />
          ) : (
            <Feather name="hard-drive" size={size} color={color} />
          );
        },
      }}
    />
  </Page1Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'black', // Cor do texto e ícones quando a aba está ativa
        }}
      >
        <Tab.Screen
          name="Home"
          component={MainStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              focused ? (
                <Ionicons name="md-home" size={size} color={color} />
              ) : (
                <Ionicons name="md-home-outline" size={size} color={color} />
              )
            ),
          }}
        />
        <Tab.Screen
          name="Meus Treinos"
          component={Page1StackScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
                                                     