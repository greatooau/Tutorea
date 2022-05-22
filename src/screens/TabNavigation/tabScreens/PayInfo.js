import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import{ primaryColor, secondaryColor }from '../../../constants/Colors'
import { FormTextInput } from '../../../components/Components'
import { AppButton } from '../../../components/Components'
import { AccountContext } from '../../../context/AccountContext';
import { useContext, useState } from 'react';
import { dataFetcher } from '../../../constants/dataFetcher'
const PayInfo = ({ navigation }) => {

  const [user, setUser] = useContext(AccountContext);

  const [cardNumber, setCardNumber] = useState(user.payData ? user.payData.cardNumber : '');
  const [CVV, setCVV] = useState(user.payData ? user.payData.CVV : '');
  const [expDate, setExpDate] = useState(user.payData ? user.payData.expDate : '');
  const [titularName, setTitularName] = useState(user.payData ? user.payData.titularName : '');
  const [cardType, setCardType] = useState(user.payData ? user.payData.cardType : '');
  const [cardAdress, setCardAdress] = useState(user.payData ? user.payData.cardAdress : '');
  const [cardPostalCode, setCardPostalCode] = useState(user.payData ? user.payData.cardPostalCode : '');
  console.log(user)
  const onSubmitHandler = async() => {
      if(
        cardNumber !== ''  ||
        CVV !== '' ||
        expDate !== '' ||
        titularName !== '' ||
        cardType !== '' ||
        cardAdress !== '' ||
        cardPostalCode !== '' ||
        cardNumber.length === 16 ||
        CVV.length === 3
      ){
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        }
        const body = {
            cardNumber,
            CVV,
            expDate,
            titularName,
            cardType,
            cardAdress,
            cardPostalCode,
            update:false
        }
        const response = user.payData ? await dataFetcher.post(
         'api/users/payData',
         { ...body, update:true},
         config) : await dataFetcher.post(
          'api/users/payData',
          body,
          config)
        if (response.status === 200) {
          setUser({...user, payData: body})
          navigation.goBack()
        }
      }
  }
  return (
    <ScrollView>
      <StatusBar backgroundColor="#000"/>
      <View style={styles.title}>
          <Text style={styles.titleText}>Tutorea</Text>
          <View style={{flexDirection:'row',flex:1, justifyContent:'flex-end', alignItems:'center'}}>
           {/*  <TouchableOpacity onPress={() => navigation.navigate('Notifications')}><IonIcon style={{marginRight:20}} size={30} name="notifications-outline" color="#fff"/></TouchableOpacity> */}
            
          </View>
      </View>

      <View style={styles.profile}>
        <TouchableOpacity activeOpacity={0.7}><Image source={{uri:user.profile_picture}} style={styles.userImage}/></TouchableOpacity>
          <View style={{paddingTop:20}}>
            <Text style={[styles.name, styles.profileText]}>{(user.name + ' ' + user.lastname).length > 18 ? user.name.charAt(0) + '. ' + user.lastname : user.name + ' ' + user.lastname}</Text>
            <Text style={styles.profileText}>Información de pago</Text>
          </View>
      </View>

      <View style={styles.form}>
        <FormTextInput placeholder="Escribe tu número de tarjeta" maxLength={16} fieldName="Número de tarjeta" fieldNameColor={primaryColor} value={cardNumber} setProp={setCardNumber}/>
        <FormTextInput placeholder="Escribe el CVV" maxLength={3} fieldName="CVV" fieldNameColor={primaryColor} value={CVV} setProp={setCVV}/>
        <FormTextInput placeholder="Escribe la fecha de expiración" maxLength={10} fieldName="Fecha de expiración" fieldNameColor={primaryColor} value={expDate} setProp={setExpDate}/>
        <FormTextInput placeholder="Escribe el nombre del titular" fieldName="Nombre del titular" fieldNameColor={primaryColor} value={titularName} setProp={setTitularName}/>
        <FormTextInput placeholder="Selecciona el tipo de tarjeta" fieldName="Tipo de tarjeta" fieldNameColor={primaryColor} value={cardType} setProp={setCardType}/>
        <FormTextInput placeholder="Escribe la dirección de la tarjeta" fieldName="Dirección" fieldNameColor={primaryColor} value={cardAdress} setProp={setCardAdress}/>
        <FormTextInput placeholder="Escribe el código postal de la tarjeta" maxLength={5} fieldName="Código Postal" fieldNameColor={primaryColor} value={cardPostalCode} setProp={setCardPostalCode}/>
        
        </View>
        <View style={{flexDirection:'column', alignItems:'center', paddingBottom:50}}>
            <AppButton buttonText="Guardar" onPress={onSubmitHandler}/>
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
    marginLeft:20,
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
    paddingTop:20,
    paddingBottom:10,
  },
})