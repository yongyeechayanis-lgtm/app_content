import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import MediaScreen from './screens/MediaScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ title: 'หน้าแรก' }} 
      />
      <Stack.Screen 
        name="DetailScreen" 
        component={DetailScreen} 
        options={{ title: 'รายละเอียดบทเรียน' }} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = route.name === 'HomeTab' ? 'home' : 'play-circle';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3498db',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen 
          name="HomeTab" 
          component={HomeStack} 
          options={{ title: 'บทเรียน' }} 
        />
        <Tab.Screen 
          name="MediaTab" 
          component={MediaScreen} 
          options={{ title: 'สื่อมัลติมีเดีย', headerShown: true }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}