import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const BTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BTab.Navigator>
        <BTab.Screen name="Home" component={HomeScreen} />
        <BTab.Screen name="Settings" component={SettingsScreen} />
      </BTab.Navigator>
    </NavigationContainer>
  );
}