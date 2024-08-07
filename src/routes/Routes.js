import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import MeusTreinos from '../pages/Page1';
import Profile from '../pages/Page3';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MeusTreinos" component={MeusTreinos} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}