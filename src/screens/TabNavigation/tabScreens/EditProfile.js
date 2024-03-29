import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, ScrollView, Alert } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import{ primaryColor, secondaryColor }from '../../../constants/Colors'
import {FormTextInput} from '../../../components/Components'
import { AppButton } from '../../../components/Components'
import { AccountContext } from '../../../context/AccountContext';
import { useContext, useState } from 'react';
import { dataFetcher } from '../../../constants/dataFetcher'

const EditProfile = ({navigation}) => {

  const [user, setUser] = useContext(AccountContext);

  const [username, setUserName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [lastname, setLastname] = useState(user.lastname);
  const [sex, setSex] = useState(user.sex);
  const [bornDate, setBornDate] = useState(user.born_date);
  const [phone, setPhone] = useState(user.phone);
  const onSubmitHandler = async() => {
    if (
        name === '' ||
        username === '' ||
        email === '' ||
        lastname === '' ||
        sex === '' ||
        bornDate === ''||
        phone === ''){
            Alert.alert("Error", "Llene los campos correctamente")
    }else{

      const config = {
        headers:{
          'Authorization':`Bearer ${user.token}`
        }
      }
      const body = {
          username,
          email,
          name,
          lastname,
          sex,
          born_date:bornDate,
          phone
      }
      const response = await dataFetcher.put(
       'api/users/editUser/' + user.id,
       body,
       config
      )
      if(response.status === 200) {
        navigation.navigate('Tab')
      }
    }
  }

  return (
    <ScrollView style={styles.rectangle}>
      <StatusBar backgroundColor="#000"/>
      <View style={styles.title}>
          <Text style={styles.titleText}>Tutorea</Text>
          <View style={{flexDirection:'row',flex:1, justifyContent:'flex-end', alignItems:'center'}}>
{/*             <TouchableOpacity onPress={() => navigation.navigate('Notifications')}><IonIcon style={{marginRight:20}} size={30} name="notifications-outline" color="#fff"/></TouchableOpacity>
 */}            
          </View>
      </View>

      <View style={styles.profile}>
        <TouchableOpacity activeOpacity={0.7}><Image source={{uri:user.profile_picture}} style={styles.userImage}/></TouchableOpacity>
          <View style={{paddingTop:20}}>
            <Text style={[styles.name, styles.profileText]}>{(user.name + ' ' + user.lastname).length > 18 ? user.name.charAt(0) + '. ' + user.lastname : user.name + ' ' + user.lastname}</Text>
            <Text style={styles.profileText}>Editar perfil</Text>
          </View>
      </View>

      <View style={styles.form}>
      <FormTextInput placeholder="Escribe tu nombre de usuario" fieldName="Nombre de usuario" fieldNameColor={primaryColor} value={username} setProp={setUserName}/>
      <FormTextInput placeholder="Escribe tu correo electrónico" fieldName="Correo Electrónico" fieldNameColor={primaryColor} value={email} setProp={setEmail}/>
      <FormTextInput placeholder="Escribe tu nombre" fieldName="Nombre" fieldNameColor={primaryColor} value={name} setProp={setName}/>
      <FormTextInput placeholder="Escribe tu apellido" fieldName="Apellido" fieldNameColor={primaryColor} value={lastname} setProp={setLastname}/>
      <FormTextInput placeholder="Selecciona tu sexo" fieldName="Sexo" fieldNameColor={primaryColor} value={sex} setProp={setSex}/>
      <FormTextInput placeholder="Selecciona tu fecha de nacimiento" fieldName="Fecha de nacimiento" fieldNameColor={primaryColor} value={bornDate} setProp={setBornDate}/>
      <FormTextInput placeholder="Escribe tu número de teléfono" fieldName="Número de teléfono" fieldNameColor={primaryColor} value={phone} setProp={setPhone}/>
      
      </View>
      <View style={{flexDirection:'column', alignItems:'center',  paddingBottom:50}}>
        <AppButton buttonText="Guardar" onPress={() => {
          onSubmitHandler()
          setUser({...user, username:username, email:email, name:name, lastname: lastname, sex:sex, bornDate: bornDate, phone: phone})
          
          navigation.goBack()
        }}/>
          <AppButton buttonText="Cancelar" onPress={() => navigation.goBack()}/>
      </View>
      
    </ScrollView>  
  )
}

export default EditProfile

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
    backgroundColor:'#CAD7DF'.toLowerCase(),
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
    paddingBottom:50,
  },
})