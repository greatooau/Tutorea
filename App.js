//Screens
import LoginRegister from './src/screens/LoginRegister';
import Register from './src/screens/Register';
import Login from './src/screens/Login';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Else
import { useFonts, } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();

export default App = () => {

  let [fontsLoaded] = useFonts({
    "lato-black": require("./assets/fonts/Lato/Lato-Black.ttf"),
    "lato-black-It": require("./assets/fonts/Lato/Lato-BlackItalic.ttf"),
    "lato-bold": require("./assets/fonts/Lato/Lato-Bold.ttf"),
    "lato-bold-It": require("./assets/fonts/Lato/Lato-BoldItalic.ttf"),
    "lato-italic": require("./assets/fonts/Lato/Lato-Italic.ttf"),
    "lato-light": require("./assets/fonts/Lato/Lato-Light.ttf"),
    "lato-light-It": require("./assets/fonts/Lato/Lato-LightItalic.ttf"),
    "lato-regular": require("./assets/fonts/Lato/Lato-Regular.ttf"),
    "lato-thin": require("./assets/fonts/Lato/Lato-Thin.ttf"),
    "lato-thin-It": require("./assets/fonts/Lato/Lato-ThinItalic.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={LoginRegister} name="LoginRegister" options={{ headerShown: false }}/>
        <Stack.Screen component={Register} name="Register" />
        <Stack.Screen component={Login} name="Login"/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

