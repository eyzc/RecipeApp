import  React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeScreenContainer } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native'
import Register from './src/assets/screens/kayıt'
import LoginScreen from './src/assets/screens/login'
import MainScreen from './src/assets/screens/mainScreen'
import SideMenuScreen from './src/assets/screens/sideMenu'
import RecommendedSeeAllScreen from './src/assets/screens/recommendedSeeAllScreen'
import TodayFreshSeeAllScreen from './src/assets/screens/todayFreshSeeAllScreen'
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
<Stack.Screen
name='Side'
component={SideMenuScreen}
options={{
  headerShown:false
}}
>
</Stack.Screen>
<Stack.Screen
name='TodayFreshSeeAll'
component={TodayFreshSeeAllScreen}
options={{
  headerShown:false
}}
>
</Stack.Screen>
<Stack.Screen
name='Recommended'
component={RecommendedSeeAllScreen}
options={{
  headerShown:false
}}
></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default App
