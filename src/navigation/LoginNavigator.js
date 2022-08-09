import {
    createNativeStackNavigator
  } from '@react-navigation/native-stack'
  import { LoginScreen } from '../screen/LoginScreen'


const Stack = createNativeStackNavigator()
  
export function LoginNavigator() {
return (
    <Stack.Navigator>
    <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
    />
    </Stack.Navigator>
)
  }
  