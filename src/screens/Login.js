import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FormTextInput from '../components/FormTextInput';
import AppButton from '../components/AppButton';
import { LinearGradient } from 'expo-linear-gradient';
import Arrow from '../components/Arrow';
import { StatusBar } from 'expo-status-bar';

const Login = ({navigation}) => {
    return(
        <LinearGradient colors={['rgb(28,50,82)', 'transparent']} style={styles.page}>

            <View style={styles.arrow}>
                <TouchableOpacity onPress={() => navigation.navigate('LoginRegister')}>
                    <Arrow color="#fff"/>
                </TouchableOpacity>
                
                <Text style={[styles.text, styles.h1]}>Ingresar</Text>
                <Text style={[styles.text, {fontFamily: 'lato-regular'}]}>Ingresa tus credenciales</Text>
            </View>

            <View style={styles.form}>
                <FormTextInput placeholder="Escribe tu nombre de usuario" fieldName="Nombre de usuario"/>
                <FormTextInput placeholder="Escribe tu contraseña" fieldName="Contraseña" isPassword={true}/>
            </View>

            <TouchableOpacity style={{marginLeft:50, marginVertical:10}} onPress={() => navigation.navigate('ResetPassword')}>
                <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <View style={{flexDirection:'row', justifyContent:'center'}}><AppButton buttonText='Ingresar'/></View>
            
            <View style={styles.buttonTextDown}>
                <Text style={{color: '#1c3252'}}>¿No tienes una cuenta?</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.link}>Registrate aquí</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomTextContainer}>
              <Text style={styles.bottomText}>Tutorea</Text>
            </View>
            <StatusBar style="auto" />
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    page:{
        flex:1,
    },
    text: {
        color: '#fff'
    },
    link:{
        color: '#1c3252',
        textDecorationLine: 'underline',
        textDecorationColor: '#1c3252'
    },
    h1: {
        fontSize:30
    },
    arrow:{
        flexDirection:'column',
        marginLeft:50,
        marginTop:'30%'
    },
    form: {
        flexDirection:'column',
        alignItems:'center',
        marginTop:60
    },
    buttonTextDown: {
        flexDirection:'column',
        alignItems:'center',
        marginTop:20
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

export default Login;