import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import AppButton from '../components/AppButton';
import Icon from 'react-native-vector-icons/Ionicons'
const VerifyEmail = ({navigation}) => {
  return (
    <LinearGradient colors={['rgb(28,50,82)', 'transparent']} style={styles.page}>
        <StatusBar backgroundColor="black"/>
        <View style={styles.title}>
            <Text style={styles.titleText}>Tutorea</Text>
        </View>
        
        <View style={styles.rectangle}>
            <View style={styles.rectangleTitleContainer}>
                <Icon name="mail" size={64} color="#1c3252"/>
                <Text style={[styles.rectangleText, styles.titleRectangleText]}>Verifica tu e-mail</Text>
                <Text style={[styles.rectangleText, styles.description]}>Te hemos enviado las instrucciones para reestablecer tu contraseña.</Text>
                <AppButton buttonText="He verificado mi e-mail" onPress={() => navigation.navigate('Login')}/>
                <AppButton buttonText="Cancelar" onPress={() => navigation.goBack()}/>
            </View>
            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>¿No recibiste el e-mail? Corrobora tu carpeta de spam o <Text onPress={() => navigation.navigate('ResetPassword')} style={{fontFamily: 'lato-bold', textDecorationLine:'underline'}}>intenta enviarlo nuevamente</Text> </Text>
                
            </View>
            
        </View>
        
    </LinearGradient>
  );
}

export default VerifyEmail;

const styles = StyleSheet.create({
    page:{
        flex:1,
    },
    title:{
        marginLeft:20,
        marginTop:20,
        marginBottom:10
    },
    titleText:{
        color:'#fff',
        fontFamily: 'lato-bold',
        fontSize:35
    },
    rectangle:{
        flex:1,
        backgroundColor:'#ececec'
    },
    rectangleText: {
        color:'#1c3252'
    },
    titleRectangleText: {
        fontSize:30,
        marginTop:35
    },
    rectangleTitleContainer: {
        flexDirection:'column',
        alignItems:'center',
        marginTop:120
    },
    description: {
        width:322,
        textAlign:'center',
        marginTop:20,
        fontFamily: 'lato-regular'
    },
    bottomTextContainer: {
        flex:1, 
        flexDirection:'column', 
        justifyContent:'flex-end', 
        alignItems:'center'
    },
    bottomText:{
        paddingBottom:55,
        textAlign:'center',
        width:280,
        color:'#1c3252',
        fontFamily: 'lato-regular'
    }
    
});