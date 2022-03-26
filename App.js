//Screens
import { Register, LoginRegister, Login, ResetPassword, VerifyEmail } from './src/screens/Screens'
import { EditProfile, ChangePassword, PayInfo } from './src/screens/TabNavigation/TabScreens';
//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Else
import { useFonts, } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import BottomBar from './src/screens/TabNavigation/BottomBar';
import  { AccountProvider }  from './src/context/AccountContext';
const Stack = createNativeStackNavigator();

export default App = () => {

  let [fontsLoaded, error] = useFonts({
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
      <AccountProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          
          <Stack.Screen component={LoginRegister} name="LoginRegister" />
          <Stack.Screen component={Register} name="Register" />
          <Stack.Screen component={Login} name="Login"/>
          <Stack.Screen component={ResetPassword} name="ResetPassword" />
          <Stack.Screen component={VerifyEmail} name="VerifyEmail"/>
          <Stack.Screen component={BottomBar} name="Tab"/>
          <Stack.Screen component={EditProfile} name="EditProfile"/>
          <Stack.Screen component={ChangePassword} name='ChangePassword'/>
          <Stack.Screen component={PayInfo} name="PayInfo"/>
        </Stack.Navigator>
      </NavigationContainer>
      </AccountProvider>
  )
};

