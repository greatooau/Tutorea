import { StyleSheet, Text, View, StatusBar, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import {primaryColor} from '../../constants/Colors';
import { SearchBar, Category, TutorsList, TutorCard } from '../../components/Components';
import IonIcon from 'react-native-vector-icons/Ionicons'


import { useContext } from 'react';
import { AccountContext } from '../../context/AccountContext';

import { TutorsContext } from '../../context/TutorsContext';
const header = () => {
  
  const [user, setUser] = useContext(AccountContext)

  return (
    <>
      <View style={styles.title}>
          <Text style={styles.titleText}>Tutorea</Text>
          <View style={{flexDirection:'row',flex:1, justifyContent:'flex-end', alignItems:'center'}}>
            <TouchableOpacity activeOpacity={0.7}><IonIcon style={{marginRight:10}} size={30} name="notifications-outline" color="#fff"/></TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}><Image source={{uri: user.profilePic}} style={styles.userImage}/></TouchableOpacity>
          </View>
      </View>
      <View style={styles.greeting}>
        <Text style={[styles.greetingText, {fontSize:14, marginBottom:5}]}>Bienvenido,</Text>
        <Text style={[styles.greetingText, {fontSize:30}]}>{user.name} {user.lastname} !</Text>
      </View>

      <SearchBar placeholder="Busque un tutor"/>
      <Text style={[styles.interests, {fontSize:20, marginBottom:15}]}>Categorías</Text>
      <View style={styles.categories}>
        <Category categoryName="Tecnología" iconName="laptop" iconSource="Ent" color='#000000'/>
        <Category categoryName="Ciencia" iconName="science" iconSource="Mat" color='#126D15'/>
        <Category categoryName="Ciencias sociales"  iconName="book" iconSource="fa" color="#2587be" />
        <Category categoryName="Idiomas" iconName="language" iconSource="Ent" color='#9A0D0D'/>
      </View>
      <Text style={styles.interests}>Tutores que te pueden interesar</Text>
    </>  
  );
};

const Home = ({navigation}) => {

  
  const tutors = useContext(TutorsContext);
  console.log(tutors)
  return (
    
      <>
          <StatusBar backgroundColor="black"/>
          <View style={styles.rectangle}>
          <FlatList
            nestedScrollEnabled={true}
              data={tutors}
              renderItem={({item})=>{return <View style={{flexDirection:'row', justifyContent:'center'}}><TutorCard onPress={()=> navigation.navigate('DetailTutorPay',{id: item.id})} profilePhoto={item.profilePic} name={item.name} middleName={item.middleName} lastname={item.lastname} stars={item.stars} specialization={item.specialization}/></View>}}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={header}
              initialNumToRender={4}
          />
          </View>
      </>
  )
};

export default Home

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
  rectangle:{
    flex:1,
    backgroundColor:'#ececec',
  },
  greeting: {
    marginVertical:'5%',
    paddingLeft:'5%'
  },
  greetingText: {
    color: primaryColor,
    fontFamily: 'lato-regular'
  },
  categories:{
    flexDirection:'row',
    justifyContent:'center',
    flexWrap:'wrap',
  },
  interests:{
    marginLeft:20,
    marginTop:20,
    fontSize:15,
    fontFamily:'lato-regular'
  },
  userImage:{
    width:40,
    height:40,
    borderRadius:40,
    marginHorizontal:20
  }
})