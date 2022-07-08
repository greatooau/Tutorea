import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyProfile, MyStudents } from "./TabScreens";
import { primaryColor } from "../../constants/Colors";
import { useFocusEffect } from "@react-navigation/native";
const Tab = createBottomTabNavigator();

const BottomBarTutors = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case "Mis Alumnos":
                            iconName = focused
                                ? "ios-book"
                                : "ios-book-outline";
                            break;
                        case "Mi Perfil":
                            iconName = focused
                                ? "person-circle"
                                : "person-circle-outline";
                            break;
                    }

                    return <Icon name={iconName} color={color} size={size} />;
                },
                tabBarActiveTintColor: primaryColor,
                tabBarInactiveTintColor: "#000",
                tabBarLabelStyle: {
                    paddingBottom: 10,
                    marginTop: 5,
                    fontFamily: "lato-regular",
                    fontSize: 14,
                },
                tabBarStyle: { height: 70, paddingTop: 10 },
                headerShown: false,
            })}
        >
            <Tab.Screen name="Mis Alumnos" component={MyStudents}></Tab.Screen>
            <Tab.Screen name="Mi Perfil" component={MyProfile}></Tab.Screen>
        </Tab.Navigator>
    );
};

export { BottomBarTutors };

const styles = StyleSheet.create({});
