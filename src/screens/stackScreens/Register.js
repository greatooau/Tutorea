import { StyleSheet, View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Arrow, AppButton, FormTextInput } from '../../components/Components'

const Register = ({navigation}) => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [sex, setSex] = useState('');
    const [bornDate, setBornDate] = useState('');
    const [phone, setPhone] = useState('');
    return(
        <ScrollView>
            <StatusBar backgroundColor="black"/>
            <LinearGradient colors={['rgb(28,50,82)', 'transparent']} style={styles.page}>
          
                <View style={styles.arrow}>
                    <TouchableOpacity onPress={() => navigation.popToTop()}>
                        <Arrow color="#fff"/>
                    </TouchableOpacity>
                    
                    <Text style={[styles.text, styles.h1]}>Registrar</Text>
                    <Text style={styles.text}>Ingresa tus datos para el registro</Text>
                </View>

                <View style={styles.form}>
                    <FormTextInput placeholder="Escribe tu nombre de usuario" fieldName="Nombre de usuario" setProp={setUserName} value={userName}/>
                    <FormTextInput placeholder="Escribe tu correo electrónico" fieldName="Correo Electrónico" setProp={setEmail} value={email}/>
                    <FormTextInput placeholder="Escribe tu contraseña" fieldName="Contraseña" isPassword={true} setProp={setPassword} value={password}/>
                    <FormTextInput placeholder="Confirmar contraseña" fieldName="Confirmar contraseña" isPassword={true} setProp={setConfirmPassword} value={confirmPassword}/>
                    <FormTextInput placeholder="Escribe tu nombre" fieldName="Nombre" setProp={setName} value={name}/>
                    <FormTextInput placeholder="Escribe tu apellido" fieldName="Apellido" setProp={setLastname} value={lastname}/>
                    <FormTextInput placeholder="Selecciona tu sexo" fieldName="Sexo" setProp={setSex} value={sex}/>
                    <FormTextInput placeholder="Selecciona tu fecha de nacimiento" fieldName="Fecha de nacimiento" setProp={setBornDate} value={bornDate}/>
                    <FormTextInput placeholder="Escribe tu número de teléfono" fieldName="Número de teléfono" setProp={setPhone} value={phone}/>
                </View>

                <View style={{flexDirection:'row', justifyContent:'center'}}><AppButton buttonText='Registrar'/></View>
                
                <View style={styles.buttonTextDown}>
                    <Text style={{color: '#1c3252'}}>¿Ya tienes una cuenta?</Text>
                    <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.link}>Ingresa aquí</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>Tutorea</Text>
                </View>
            
            </LinearGradient>
        </ScrollView>
       
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
        marginTop:20,
        paddingBottom:50
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

export default Register;