import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Home, MyProfile, MyTutors} from './TabScreens';
import primaryColor from '../../constants/Colors';

const Tab = createBottomTabNavigator();
const BottomBar = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        switch(route.name) {
          case 'Home':
            iconName = focused ? 'ios-home' : 'ios-home-outline';
            break;
          case 'Mis Tutores':
            iconName = focused ? 'book' : 'book-outline';
            break;
          case 'Mi Perfil':
            iconName = focused ? 'person-circle' : 'person-circle-outline';
            break;
        }
        
        return <Icon name={iconName} color={color} size={size}/>;
      },
      tabBarActiveTintColor: primaryColor,
      tabBarInactiveTintColor: '#000',
      tabBarLabelStyle: {paddingBottom:10, marginTop:5, fontFamily:'lato-regular', fontSize:14},
      tabBarStyle:{height:70, paddingTop:10},
      headerShown:false
    })}>
      <Tab.Screen name='Home' component={Home}></Tab.Screen>
      <Tab.Screen name='Mis Tutores' component={MyTutors}></Tab.Screen>
      <Tab.Screen name='Mi Perfil' component={MyProfile}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default BottomBar

const styles = StyleSheet.create({})