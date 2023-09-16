import  React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeScreenContainer } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native'
import Register from './src/assets/screens/kayıt'
import LoginScreen from './src/assets/screens/login'
import MainScreen from './src/assets/screens/mainScreen'
import { StyleSheet } from 'react-native'
const Stack = createNativeStackNavigator()

const App = () =>{
  return(
  <NavigationContainer>
    <Stack.Navigator>
<Stack.Screen
name='Register'
component={Register}
options={{
  headerShown:false
}}
>
</Stack.Screen>
<Stack.Screen
name='Login'
component={LoginScreen}
options={{
  headerShown:false
}}
>
</Stack.Screen>
<Stack.Screen
name='Main'
component={MainScreen}
options={{
  headerShown:false
}}
>
</Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default App
