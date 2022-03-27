import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const TutorCard = ({name, lastname, middleName, profilePhoto, stars, specialization, onPress}) => {
  
  const starsDisplayed = [];
  for(let i = 0; i < 5; ++i){
    if (i < stars) {
      starsDisplayed.push(<Icon style={{marginHorizontal:1}} key={i} name="star" size={20} color="#f2ae00"/>);
    } else {
      starsDisplayed.push(<Icon style={{marginHorizontal:1}} key={i} name="star" size={20} color="#6e6e6d"/>);
    }
  }
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} delayPressIn={100} style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{uri: profilePhoto}} style={styles.image}/>
        </View>

        <View style={styles.tutorInfo}>
          <Text style={styles.tutorInfoText}>{name} {middleName !== '' ? middleName.charAt(0) + '. ' : ''}{lastname}</Text>
          <View style={styles.starsContainer}>{starsDisplayed.map(element => element)}</View>
          <Text style={{color:'#707070'}}>Especialización</Text>
          <Text>{specialization}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default TutorCard;

const styles = StyleSheet.create({
  card:{
    backgroundColor:'#fff',
    width:'90%',
    height:150,
    borderRadius:9,
    flexDirection:'row',
    marginTop:30,
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
  tutorInfo:{
    marginLeft:'3%',
    marginVertical:'6%',
    flexDirection:'column'
  },
  tutorInfoText: {
    fontFamily:'lato-bold',
    fontSize:20
  },
  starsContainer:{
    flexDirection:'row',
    marginTop:'10%',
    marginBottom:'20%'
  }
});