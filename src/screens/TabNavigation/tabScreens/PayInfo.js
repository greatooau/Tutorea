import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import{ primaryColor, secondaryColor }from '../../../constants/Colors'
import {FormTextInput} from '../../../components/Components'
import { AppButton } from '../../../components/Components'
import { AccountContext } from '../../../context/AccountContext';
import { useContext, useState } from 'react';
const PayInfo = ({navigation}) => {

  const [user, setUser] = useContext(AccountContext);

  const [cardNumber, setcardNumber] = useState('');
  const [CVV, setCVV] = useState('');
  const [expDate, setexpDate] = useState('');
  const [titularName, settitularName] = useState('');
  const [cardType, setcardType] = useState('');
  const [cardAdress, setcardAdress] = useState('');
  const [cardPostalCode, setcardPostalCode] = useState('');

  return (
    <ScrollView>
      <StatusBar/>
      <View style={styles.title}>
          <Text style={styles.titleText}>Tutorea</Text>
          <View style={{flexDirection:'row',flex:1, justifyContent:'flex-end', alignItems:'center'}}>
            <TouchableOpacity><IonIcon style={{marginRight:20}} size={30} name="notifications-outline" color="#fff"/></TouchableOpacity>
            
          </View>
      </View>

      <View style={styles.profile}>
        <TouchableOpacity activeOpacity={0.7}><Image source={{uri:user.profilePic}} style={styles.userImage}/></TouchableOpacity>
          <View style={{paddingTop:20}}>
            <Text style={[styles.name, styles.profileText]}>{user.name} {user.lastname}</Text>
            <Text style={styles.profileText}>Información de pago</Text>
          </View>
      </View>

      <View style={styles.form}>
        <FormTextInput placeholder="Escribe tu número de tarjeta" fieldName="Número de tarjeta" fieldNameColor={primaryColor} value={cardNumber} setProp={setcardNumber}/>
        <FormTextInput placeholder="Escribe el CVV" fieldName="CVV" fieldNameColor={primaryColor} value={CVV} setProp={setCVV}/>
        <FormTextInput placeholder="Escribe la fecha de expiración" fieldName="Fecha de expiración" fieldNameColor={primaryColor} value={expDate} setProp={setexpDate}/>
        <FormTextInput placeholder="Escribe el nombre del titular" fieldName="Nombre del titular" fieldNameColor={primaryColor} value={titularName} setProp={settitularName}/>
        <FormTextInput placeholder="Selecciona el tipo de tarjeta" fieldName="cardTypeo" fieldNameColor={primaryColor} value={cardType} setProp={setcardType}/>
        <FormTextInput placeholder="Escribe la dirección de la tarjeta" fieldName="Fecha de nacimiento" fieldNameColor={primaryColor} value={cardAdress} setProp={setcardAdress}/>
        <FormTextInput placeholder="Escribe el código postal de la tarjeta" fieldName="Número de teléfono" fieldNameColor={primaryColor} value={cardPostalCode} setProp={setcardPostalCode}/>
        
        </View>
        <View style={{flexDirection:'column', alignItems:'center', paddingBottom:50}}>
            <AppButton buttonText="Guardar" onPress={() => {
                
                setUser({...user, payInfo:{
                    cardNumber: cardNumber,
                    CVV: CVV,
                    expDate: expDate,
                    titularName: titularName,
                    cardType: cardType,
                    cardAdress: cardAdress,
                    cardPostalCode: cardPostalCode
                }
                })
                navigation.goBack()
                }}/>
            <AppButton buttonText="Cancelar" onPress={() => navigation.goBack()}/>
        </View>
      
    </ScrollView>  
  )
}

export default PayInfo

const styles = StyleSheet.create({
  title:{
    paddingLeft:20,
    paddingTop:20,
    paddingBottom:10,
    backgroundColor:primaryColor,
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
    marginLeft:40,
    marginRight:20
  },
  profile:{
    flexDirection:'row',
    borderBottomWidth:1,
    paddingTop:40,
    paddingBottom:20
  },
  name:{
    fontFamily:'lato-regular',
    fontSize:30,
    marginLeft:-2
  },
  form:{
    flexDirection:'column',
    alignItems:'center',
    paddingTop:20,
    paddingBottom:10,
  },
})