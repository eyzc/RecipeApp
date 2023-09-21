import  React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeScreenContainer } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native'
import Register from './src/screens/kayıt'
import LoginScreen from './src/screens/login'
import MainScreen from './src/screens/mainScreen'
import SideMenuScreen from './src/screens/sideMenu'
import RecommendedSeeAllScreen from './src/screens/recommendedSeeAllScreen'
import FovouriteScreen from './src/screens/favouriteScreen'
import RecipeScreen from './src/screens/recipeScreen'
import TodayFreshSeeAllScreen from './src/screens/todayFreshSeeAllScreen'
import ProfileScreen from './src/screens/profileScreen'
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
<Stack.Screen
name='Favourite'
component={FovouriteScreen}
options={{
  headerShown:false
}}
></Stack.Screen>
<Stack.Screen
name='Recipe'
component={RecipeScreen}
options={{
  headerShown:false
}}
></Stack.Screen>
<Stack.Screen
name='Profile'
component={ProfileScreen}
options={{
  headerShown:false
}}
></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default App
