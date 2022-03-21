import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//Components
import AppButton from '../components/AppButton';

const LoginRegister = ({ navigation }) => {
    return (
        <LinearGradient colors={['rgb(28,50,82)', 'transparent']} style={styles.page}>

            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Bienvenido a Tutorea!</Text>
            </View>

            <View style={styles.imageContainer}>
              <Image style={styles.image} source={require('../../assets/img/welcome.png')}/>
            </View>
            <View style={styles.buttons}>
              <AppButton buttonText="Ingresar" onPress={() => navigation.navigate('Login')}/>
              <AppButton buttonText="Registrar" onPress={() => navigation.navigate('Register')}/>
            </View>

            <View style={styles.bottomTextContainer}>
              <Text style={styles.bottomText}>Tutorea</Text>
            </View>
            <StatusBar style="auto" />

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
      maxHeight:170,
      maxWidth: 350,
    },
    buttons: {
      paddingBottom: '40%'
    },
    bottomTextContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    bottomText: {
      fontFamily: 'lato-bold',
      color: '#1c3252',
      fontSize: 35,
    }
});

export default LoginRegister;