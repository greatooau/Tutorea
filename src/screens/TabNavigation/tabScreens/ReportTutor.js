import { useContext, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import { AccountContext } from '../../../context/AccountContext'
import { primaryColor, secondaryColor } from '../../../constants/Colors'
import { dataFetcher } from '../../../constants/dataFetcher'
import {AppButton, Arrow} from '../../../components/Components'


const ReportTutor = ({ navigation, route }) => {



    const [ user ] = useContext(AccountContext)

    const [report, setReport] = useState('')

    const onChange = (text) => { 
      setReport(text.target.value)
    }
    
    const onSubmit = async() => {
      //si no funciona aquí está la razón posiblemente
      if(report !== '' || report.length > 10) {
        const config = {
          headers:{
            'Authorization':`Bearer ${user.token}`
          }
        }
        const body = {
          report,
          tutorId:route.params.tutor._id
        }
        try {
          const response = await dataFetcher.post('api/reports/',body, config)
          if(response.status == 200) {
            navigation.goBack()
          }

        } catch (error) {
          console.log(error)
        }
      } else {
        //si no funciona aquí está la razón posiblemente
        Alert.alert('Error al enviar', 'El reporte debe contener más de 10 caracteres.')
      }
    }
    return (
        <>
            
            <View style={styles.title}>
                <Text style={styles.titleText}>Tutorea</Text>
                <View style={{flexDirection:'row',flex:1, justifyContent:'flex-end', alignItems:'center'}}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Notifications')} activeOpacity={0.7}><IonIcon style={{marginRight:10}} size={30} name="notifications-outline" color="#fff"/></TouchableOpacity> */}
                    {/* <TouchableOpacity activeOpacity={0.7}><Image source={{uri: user.profile_picture}} style={styles.userImage}/></TouchableOpacity> */}
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft:'10%', marginTop:'10%'}}>
                  <Arrow color={secondaryColor}/>
                </TouchableOpacity>
                
                <Text style={rectangle.title}>Reportar</Text>
                <Text style={rectangle.formDesc}>Escribe la razón de tu reporte</Text>
                <TextInput
                  multiline={true}
                  style={rectangle.textinput}
                  onChange={ text => onChange(text)}
                  />
            </View>
            <View>
              <AppButton onPress={onSubmit} buttonText="Enviar reporte" secondary={true}></AppButton>
            </View>
        </>
    )
}

export default ReportTutor

const rectangle = StyleSheet.create({
    title:{
        color:secondaryColor,
        fontFamily:'lato-regular',
        fontSize:30,
        marginHorizontal:'10%',
        marginVertical:'5%'
    },
    textinput:{
        backgroundColor:'white',
        marginHorizontal:'10%',
        borderRadius:12,
        fontSize:15,
        height:150,
        padding:10
    },
    formDesc:{
        marginHorizontal:'10%',
        marginVertical:'5%',
        fontSize:15
    }
})

const styles = StyleSheet.create({
    title:{
        paddingLeft:20,
        paddingTop:20,
        paddingBottom:10,
        backgroundColor:secondaryColor,
        flexDirection:'row'
      },
      titleText:{
        color:'#fff',
        fontFamily: 'lato-bold',
        fontSize:35
      },
      profileText:{
        color: primaryColor
      },
      rectangle:{
        flex:1,
        backgroundColor:'#ececec',
      },
      userImage:{
        width:80,
        height:80,
        borderRadius:40,
        marginLeft:20,
        marginRight:20
      },
      profile:{
        flexDirection:'row',
        borderBottomWidth:1,
        paddingTop:40,
        paddingBottom:20
      },
})