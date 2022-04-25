
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//Components
import { Arrow, AppButton, FormTextInput } from '../../components/Components'
import React from 'react'


const LoginRegister = ({ navigation }) => {
    return (
        <LinearGradient colors={['rgb(28,50,82)', 'transparent']} style={styles.page}>
            <StatusBar backgroundColor="black"/>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Bienvenido a Tutorea!</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={require('../../../assets/img/png/welcome.png')}/>
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <AppButton buttonText="Ingresar" onPress={() => navigation.navigate('Login')}/>
              <AppButton buttonText="Registrar" onPress={() => navigation.navigate('Register')}/>
            </View>
            

            <View style={styles.bottomTextContainer}>
              <Text style={styles.bottomText}>Tutorea</Text>
            </View>

        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    page: {
      flex:1,
    },
    titleContainer: {
      flexDirection: 'row',
      marginTop: 50,
      justifyContent: 'center',
      paddingHorizontal:50
    },
    titleText: {
      fontSize: 35,
      color: '#ffff',
      textAlign:'center'
    },
    imageContainer: {
      flexDirection: 'row',
      justifyContent:'center',
      paddingVertical:65,
    },
    image: {
      width:'80%',
      height:150,
    },
    bottomTextContainer: {
      flex:1,
      flexDirection: 'column',
      alignItems:'center',
      justifyContent: 'flex-end',
      marginBottom:20
    },
    bottomText: {
      fontFamily: 'lato-bold',
      color: '#1c3252',
      fontSize: 35,
    }
});

export default LoginRegister;