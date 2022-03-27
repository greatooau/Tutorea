import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const StudyCard = ({name, photo, schoolName}) => {

  return (
    <TouchableOpacity activeOpacity={0.7} delayPressIn={100} style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{uri: photo}} style={styles.image}/>
        </View>

        <View style={styles.studyInfo}>
          <Text style={styles.studyInfoText}>{name}</Text>
          <Text style={{color:'#707070', marginTop:20}}>Escuela</Text>
          <Text>{schoolName}</Text>
        </View>
    </TouchableOpacity>
  );
}

export default StudyCard;

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
  studyInfo:{
    marginLeft:'3%',
    marginVertical:'6%',
    flexDirection:'column'
  },
  studyInfoText: {
    fontFamily:'lato-bold',
    fontSize:20,
    width:'90%'
  },
});