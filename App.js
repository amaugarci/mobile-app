import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { MainNavigator } from './src/navigation/MainNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';
import { NavigationContainer } from '@react-navigation/native';
import { LoginNavigator } from './src/navigation/LoginNavigator'

export default function App() {
  useInitUser()

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <NavigatorSwitch />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const NavigatorSwitch = observer(() => {
  if (true) {   //auth funcc
    return <LoginNavigator />
  }else {
    return <MainNavigator />
  }
})
