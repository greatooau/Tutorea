import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import { primaryColor, secondaryColor }from '../../../constants/Colors'
import { AccountContext } from '../../../context/AccountContext'
import { useContext, useState } from 'react'
import { FormTextInput, AppButton } from '../../../components/Components'
const Hiring = ({navigation, route}) => {
  const [user, setUser] = useContext(AccountContext);
  const tutor = route.params.tutor
  const [sesion, setSesion] = useState('1')
  return (
    <>
      <View style={styles.title}>
          <Text style={styles.titleText}>Tutorea</Text>
          <View style={{flexDirection:'row',flex:1, justifyContent:'flex-end', alignItems:'center'}}>
            <TouchableOpacity activeOpacity={0.7}><IonIcon style={{marginRight:10}} size={30} name="notifications-outline" color="#fff"/></TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}><Image source={{uri: user.profilePic}} style={styles.userImage}/></TouchableOpacity>
          </View>
      </View>
      <View style={styles.rectangle}>

        <View style={styles.titleJuan}>
          <Text style={[styles.titleJuanText, {fontSize:30, color:primaryColor, fontFamily:'lato-regular'}]}>Contratación</Text>
          <FormTextInput center={false} maxLength={2} fieldName="Sesiones" fieldNameColor={primaryColor} setProp={setSesion} value={sesion}/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <View style={card.card}>
            <View style={card.imageContainer}>
              <Image 
                source={{uri: 'https://imgs.search.brave.com/FhbJiSn6NSkWqmbH1urdvlS2eRdIPr4-hmoKdg_noNQ/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly93d3cu/c2tpbGxhc3RpY3Mu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzAzL2xlZnQt/b3Zlci1tb25leS5q/cGc'}}
                style={card.image}
              />
            </View>
          
            <View style={card.studyInfo}>
                <Text style={card.studyInfoText}>Costo por sesión</Text>
                <Text style={{color:'#707070', marginTop:20, fontSize:20}}>TOTAL: {parseInt(sesion) < 1 || isNaN(parseInt(sesion)) || !Number.isInteger(parseInt(sesion)) ? 0 : tutor.fee * sesion} MXN</Text>
            </View>

          </View>
         
        </View>
        <AppButton secondary={true} onPress={()=>navigation.navigate('Home')} buttonText="Confirmar pago"/>
      </View>
      
    </>  
  )
}

export default Hiring

const card = StyleSheet.create({
  card:{
    backgroundColor:'#fff',
    width:'90%',
    height:150,
    borderRadius:9,
    flexDirection:'row',
    marginTop:20,
    borderBottomWidth:2,
    borderRightWidth:1,
    borderRightColor:'#d9d9d9',
    borderBottomColor:'#d9d9d9',
  },
  imageContainer:{
    width:'40%',
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:'70%',
    height:'70%',
    borderRadius:5,
  },
  studyInfo:{
    marginLeft:'3%',
    marginVertical:'6%',
    flexDirection:'column'
  },
  studyInfoText: {
    fontFamily:'lato-bold',
    fontSize:20,
    width:'100%'
  },
})

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
  options:{
    flexDirection:'column',
    paddingTop:40
  },
  individualOption:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:30
  },
  secondaryColorText: {
    color: secondaryColor,
    fontSize:20
  },
  icon: {
    marginLeft:50,
    marginRight:35
  },
  userImage:{
    width:40,
    height:40,
    borderRadius:40,
    marginHorizontal:20
  },
  titleJuan: {
    marginTop:'10%',
    paddingLeft:'5%'
  },
})

