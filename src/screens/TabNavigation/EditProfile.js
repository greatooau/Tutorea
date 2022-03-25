import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import{ primaryColor, secondaryColor }from '../../constants/Colors'

const user = {
  name: 'Eugenio',
  middleName:'',
  lastname: 'Torres',
  profilePic: 'https://imgs.search.brave.com/kJKQlgpWW1xyG9ktsinvjydfB1zC-gnHV6uZMG7-Mxw/rs:fit:439:493:1/g:ce/aHR0cHM6Ly9sYWNv/bHVtbmFyaWFibG9n/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNS8wNy9rb25h/bjAuanBn'
};

const MyProfile = () => {
  return (
    <>
      <View style={styles.title}>
          <Text style={styles.titleText}>Tutorea</Text>
          <View style={{flexDirection:'row',flex:1, justifyContent:'flex-end', alignItems:'center'}}>
            <TouchableOpacity><IonIcon style={{marginRight:20}} size={30} name="notifications-outline" color="#fff"/></TouchableOpacity>
            
          </View>
      </View>

      <View style={styles.profile}>
        <TouchableOpacity><Image source={{uri:user.profilePic}} style={styles.userImage}/></TouchableOpacity>
          <View style={{paddingTop:20}}>
            <Text style={[styles.name, styles.profileText]}>{user.name} {user.lastname}</Text>
            <Text style={styles.profileText}>Perfil</Text>
          </View>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.individualOption}>
          <IonIcon style={styles.icon} size={50} name="settings-outline" color={secondaryColor}/>
          <Text style={styles.secondaryColorText}>Configuración</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.individualOption}>
          <IonIcon style={styles.icon} size={50} name="key-outline" color={secondaryColor}/>
          <Text style={styles.secondaryColorText}>Cambiar contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.individualOption}>
          <MatIcon style={styles.icon} size={50} name="payment" color={secondaryColor}/>
          <Text style={styles.secondaryColorText}>Información de pago</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.individualOption}>
          <MatIcon style={styles.icon} size={50} name="logout" color={secondaryColor}/>
          <Text style={styles.secondaryColorText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
      
    </>  
  )
}

export default MyProfile

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
  }
})