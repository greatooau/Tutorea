//Screens
import {
    Register,
    LoginRegister,
    Login,
    Advertisement,
    PendingTutor,
    RejectedTutor
} from "./src/screens/Screens";
import {
    EditProfile,
    ChangePassword,
    PayInfo,
    DetailTutorNoPay,
    DetailTutorPay,
    Hiring,
    Categories,
    ReportTutor,
    EditTutorProfile,
    AddInsights,
    AddContacts,
    AddStudies,
} from "./src/screens/TabNavigation/TabScreens";
//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Else
import { useFonts } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import BottomBar from "./src/screens/TabNavigation/BottomBar";
import { BottomBarTutors } from "./src/screens/TabNavigation/BottomBarTutors";
import { AccountProvider } from "./src/context/AccountContext";
import { TutorsProvider } from "./src/context/TutorsContext";
import { HoursProvider } from "./src/context/HoursContext";
const Stack = createNativeStackNavigator();

const App = () => {
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
        "lato-thin-It": require("./assets/fonts/Lato/Lato-ThinItalic.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <HoursProvider>
            <AccountProvider>
                <TutorsProvider>
                    <NavigationContainer>
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                            
                            <Stack.Screen
                                component={LoginRegister}
                                name="LoginRegister"
                            />
                            {/* <Stack.Screen component={MyProfile} name="MiPerfilTutor"/> */}

                            <Stack.Screen component={Register} name="Register" />
                            <Stack.Screen component={Login} name="Login" />
                            <Stack.Screen
                                component={PendingTutor}
                                name="PendingTutor"
                            />

                            <Stack.Screen
                                component={RejectedTutor}
                                name="RejectedTutor"
                            />
                            <Stack.Screen
                                component={BottomBarTutors}
                                name="TabTutor"
                            />
                            <Stack.Screen
                                component={Advertisement}
                                name="Advertisement"
                            />
                            {/* <Stack.Screen component={ResetPassword} name="ResetPassword" /> */
                            /* <Stack.Screen component={VerifyEmail} name="VerifyEmail" /> */}
                            <Stack.Screen component={BottomBar} name="Tab" />

                            <Stack.Screen
                                component={Categories}
                                name="Categories"
                            />
                            <Stack.Screen
                                component={EditProfile}
                                name="EditProfile"
                            />
                            <Stack.Screen
                                component={EditTutorProfile}
                                name="EditTutorProfile"
                            />
                            <Stack.Screen component={AddStudies} name="AddStudies"/>
                            <Stack.Screen component={AddContacts} name="AddContacts"/>
                            <Stack.Screen component={AddInsights} name="AddInsights"/>
                            <Stack.Screen
                                component={ChangePassword}
                                name="ChangePassword"
                            />
                            <Stack.Screen component={PayInfo} name="PayInfo" />
                            <Stack.Screen
                                component={DetailTutorNoPay}
                                name="DetailTutorNoPay"
                            />
                            <Stack.Screen
                                component={DetailTutorPay}
                                name="DetailTutorPay"
                                getId={({ params }) => params.id}
                            />
                            <Stack.Screen
                                component={Hiring}
                                name="Hiring"
                                getId={({ params }) => params.id}
                            />
                            <Stack.Screen
                                component={ReportTutor}
                                name="ReportTutor"
                                /* getId={({ params }) => params.id} */
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </TutorsProvider>
            </AccountProvider>
        </HoursProvider>
    );
};

export default App;
