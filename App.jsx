import  React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeScreenContainer } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native'
import Kayit from './src/assets/screens/kayıt'
import LoginScreen from './src/assets/screens/login'
const Stack = createNativeStackNavigator()

const App = () =>{
  return(
  <NavigationContainer>
    <Stack.Navigator>
<Stack.Screen
name='Kayıt'
component={Kayit}
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
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default App