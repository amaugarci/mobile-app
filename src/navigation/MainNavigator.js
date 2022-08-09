import {
    createNativeStackNavigator
  } from '@react-navigation/native-stack'
  import { MainScreen } from '../screen/MainScreen'


const Stack = createNativeStackNavigator()
  
export function LoginNavigator() {
return (
    <Stack.Navigator>
        <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
)
  }
  