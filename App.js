//Screens
import Login from './screens/Login';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default App = () => {
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen component={Login} name="Login"/>
    </Stack.Navigator>
  </NavigationContainer>
};

