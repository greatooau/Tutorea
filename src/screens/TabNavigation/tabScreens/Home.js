import { StyleSheet, Text, View, StatusBar, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import {primaryColor} from '../../../constants/Colors';
import { SearchBar, Category, TutorsList, TutorCard } from '../../../components/Components';
import IonIcon from 'react-native-vector-icons/Ionicons'
import { NavigationActions } from 'react-navigation';

import { useContext, useState } from 'react';
import { AccountContext } from '../../../context/AccountContext';

import { TutorsContext } from '../../../context/TutorsContext';


const Home = ({navigation}) => {
  const header = () => {
  
  
    const [ user, setUser ] = useContext(AccountContext)
    const [ search, setSearch ] = useState('');
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
  
        <SearchBar placeholder="Busque un tutor" value={search} setProp={setSearch}/>
        <Text style={[styles.interests, {fontSize:20, marginBottom:15}]}>Categorías</Text>
        <View style={styles.categories}>
          <Category onPress={() => navigation.navigate('Categories', { icon:"laptop", category:"Tecnología", color:"#000", iconSource:"Ent" })} categoryName="Tecnología" iconName="laptop" iconSource="Ent" color='#000'/>
          <Category onPress={() => navigation.navigate('Categories', { icon:"science", category:"Ciencia", color:"#126D15", iconSource:"Mat" })} categoryName="Ciencia" iconName="science" iconSource="Mat" color='#126D15'/>
          <Category onPress={() => navigation.navigate('Categories', { icon:"book", category:"Ciencias sociales", color:"#2587be", iconSource:"fa" })} categoryName="Ciencias sociales"  iconName="book" iconSource="fa" color="#2587be" />
          <Category onPress={() => navigation.navigate('Categories', { icon:"language", category:"Idiomas", color:"#9A0D0D", iconSource:"Ent" })} categoryName="Idiomas" iconName="language" iconSource="Ent" color='#9A0D0D'/>
        </View>
        <Text style={styles.interests}>Tutores que te pueden interesar</Text>
      </>  
    );
  };
  const tutors = useContext(TutorsContext);
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
