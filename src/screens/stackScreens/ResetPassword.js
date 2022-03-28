import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Arrow, AppButton, FormTextInput } from '../../components/Components'
const ResetPassword = ({navigation}) => {

    const [email, setEmail] = useState('');
  return (
    <LinearGradient colors={['rgb(28,50,82)', 'transparent']} style={styles.page}>
        <StatusBar backgroundColor="black"/>
        <View style={styles.title}>
            <Text style={styles.titleText}>Tutorea</Text>
        </View>
        <View style={styles.rectangle}>
            <View style={styles.rectangleTitleContainer}>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                    <Text style={[styles.rectangleText, styles.titleRectangleText]}>Reestablecer contraseña</Text>
                    <Text style={[styles.rectangleText, styles.description]}>Ingresa el correo que está asociado a esta cuenta para enviar un correo con las instrucciones para reestablecer tu contraseña.</Text>
                </View>
                <FormTextInput fieldName="Correo electronico" fieldNameColor="#000" placeholder="Escribe un correo electrónico" setProp={setEmail} value={email}/>
                <AppButton buttonText="Enviar" onPress={() => navigation.navigate('VerifyEmail')}/>
                <AppButton buttonText="Regresar" onPress={() => navigation.goBack()}/>
            </View>
        </View>
        

    </LinearGradient>
  );
}

export default ResetPassword;

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
        color:'#1c3252',
    },
    titleRectangleText: {
        fontSize:30,
        marginTop:35,
        fontFamily: 'lato-regular'
    },
    rectangleTitleContainer: {
        flexDirection:'column',
    },
    description: {
        width:322,
        textAlign:'justify',
        marginTop:20
    }
    
});