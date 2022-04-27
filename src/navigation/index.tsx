/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { Users, UserGear } from 'phosphor-react-native';


import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import GroupsPage from '../screens/groups';
import ProfilePage from '../screens/profile';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Groups"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: { 
          height: 55,
          paddingBottom: 10, 
          paddingTop: 10,
        }
      }}
      sceneContainerStyle={{paddingBottom:0}}>
      <BottomTab.Screen
        name="Groups"
        component={GroupsPage}
        options={({ navigation }: RootTabScreenProps<'Groups'>) => ({
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: colorScheme === 'light' ? Colors.yellow : Colors.darkGrey },
          title: 'Groups',
          tabBarIcon: ({ color }) => <Users size={32} color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: colorScheme === 'light' ? Colors.yellow : Colors.darkGrey },
          title: 'Profile & Settings',
          tabBarIcon: ({ color }) => <UserGear size={32} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
