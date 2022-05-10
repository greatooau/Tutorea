import { StyleSheet, View, Text, TouchableOpacity, StatusBar, Alert, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Arrow, AppButton, FormTextInput } from '../../components/Components';
import { useState, useEffect, useContext } from 'react';
import { dataFetcher } from '../../constants/dataFetcher';
import axios from 'axios';
import { AccountContext } from '../../context/AccountContext';

const Login = ({navigation}) => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const [ user, setUser ] = useContext(AccountContext)

    const onSubmitHandler = async (e) => {
        
        if (password === '' || username === '') {
            Alert.alert("Error", "Introduzca los campos")
        }else{
            setIsLoading(true);
            try{
                const response = await dataFetcher.post("api/users/login", {
                    username,
                    password
                });
                if (response.status === 200) {
                    const response2 = await dataFetcher.get("api/users/me", {
                        headers:{
                            'Authorization': `Bearer ${response.data.token}`
                        }
                    });
                    setUser({...response2.data, token:response.data.token })
                    setIsLoading(false);
                    navigation.navigate('Tab')
                }
                else {
                    console.log(response.status)
                }
            }catch(error){
                console.log(error)
                Alert.alert("Credeciales inválidas", "Las credenciales ingresadas son inválidas.", [{}])
                setIsLoading(false)
            }
        }
        
    };

    return(
        <LinearGradient colors={['rgb(28,50,82)', 'transparent']} style={styles.page}>
            <StatusBar backgroundColor="black"/>
            <View style={styles.arrow}>
                <TouchableOpacity  onPress={() => navigation.popToTop()}>
                    <Arrow color="#fff"/>
                </TouchableOpacity>
                
                <Text style={[styles.text, styles.h1]}>Ingresar</Text>
                <Text style={[styles.text, {fontFamily: 'lato-regular'}]}>Ingresa tus credenciales</Text>
            </View>
                <View style={styles.form}>
                    <FormTextInput value={username} setProp={setUsername} placeholder="Escribe tu nombre de usuario" fieldName="Nombre de usuario"/>
                    <FormTextInput value={password} setProp={setPassword} placeholder="Escribe tu contraseña" fieldName="Contraseña" isPassword={true}/>
                </View>

            <TouchableOpacity style={{marginLeft:50, marginVertical:10}} onPress={() => navigation.navigate('ResetPassword')}>
                <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <AppButton buttonText='Ingresar' onPress={onSubmitHandler}/>
            </View>
            
            <View style={styles.buttonTextDown}>
                <Text style={{color: '#1c3252'}}>¿No tienes una cuenta?</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.link}>Registrate aquí</Text>
                </TouchableOpacity>
            </View>
            {isLoading && (<ActivityIndicator style={{}} size={70} color="#fff"/>)}
            <View style={styles.bottomTextContainer}>
              <Text style={styles.bottomText}>Tutorea</Text>
            </View>
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
        marginTop:'20%'
    },
    form: {
        flexDirection:'column',
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

export default Login;