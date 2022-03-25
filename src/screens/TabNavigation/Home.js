import { StyleSheet, Text, View, StatusBar, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import {primaryColor} from '../../constants/Colors';
import { SearchBar, Category, TutorsList } from '../../components/Components';
import IonIcon from 'react-native-vector-icons/Ionicons'

const tutors = [
  {
    id:'fernanelcrackcarajo',
    name: 'Luis',
    middleName: 'Fernando',
    lastname:'Flores',
    specialization: 'Web Development',
    profilePic: 'https://imgs.search.brave.com/nPKsMRFSLZZ76NxLK0Ac1nyKEyE1X7r5fKxAv2s5LIc/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKd3Q4eWJT/WnFLcnNqX3Jwa0pI/OTE4c09rRnNocnBC/Wmt1TT1zOTAwLWMt/ay1jMHhmZmZmZmZm/Zi1uby1yai1tbw',
    stars:4
  },
  {
    id:'mamasitachulaprec3iosanalgona',
    name: 'Bryce',
    middleName: '',
    lastname:'Howard',
    specialization: 'Acting',
    profilePic:'https://imgs.search.brave.com/-w_CnUK-xpjq7jgXIZ8Fifyh3DtFNZB_T7SNnkQ1rEA/rs:fit:1200:1200:1/g:ce/aHR0cDovL2ltYWdl/LnRtZGIub3JnL3Qv/cC9vcmlnaW5hbC9w/N1cwRTVKNkZwVE1P/RHhPT0Zid3NkeE9Q/bWwuanBn',
    stars:5
  },
  {
    id:'asidfqpniewnipfone3iofe',
    name: 'John',
    middleName: '',
    lastname:'Smith',
    specialization:'Basktetball',
    profilePic: 'https://imgs.search.brave.com/SMswVKwY3R1-mQWMHp7o9aDseLC-7VeMWJ0l9u379Ls/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly90b3du/c3F1YXJlLm1lZGlh/L3NpdGUvODEyL2Zp/bGVzLzIwMTcvMDMv/bWV0aG9kLW1hbjEu/anBnP3c9MTIwMCZo/PTAmemM9MSZzPTAm/YT10JnE9ODk',
    stars:2
  },
  {
    id:'fernanelcrack2carajo',
    name: 'Luis',
    middleName: 'Fernando',
    lastname:'Flores',
    specialization: 'Web Development',
    profilePic: 'https://imgs.search.brave.com/nPKsMRFSLZZ76NxLK0Ac1nyKEyE1X7r5fKxAv2s5LIc/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKd3Q4eWJT/WnFLcnNqX3Jwa0pI/OTE4c09rRnNocnBC/Wmt1TT1zOTAwLWMt/ay1jMHhmZmZmZmZm/Zi1uby1yai1tbw',
    stars:1
  },
  {
    id:'mamasitachulapreciosanalgona',
    name: 'Bryce',
    middleName: '',
    lastname:'Howard',
    specialization: 'Acting',
    profilePic:'https://imgs.search.brave.com/-w_CnUK-xpjq7jgXIZ8Fifyh3DtFNZB_T7SNnkQ1rEA/rs:fit:1200:1200:1/g:ce/aHR0cDovL2ltYWdl/LnRtZGIub3JnL3Qv/cC9vcmlnaW5hbC9w/N1cwRTVKNkZwVE1P/RHhPT0Zid3NkeE9Q/bWwuanBn',
    stars:4
  },
  {
    id:'asidfqpniewnipfoneiofe',
    name: 'John',
    middleName: '',
    lastname:'Smith',
    specialization:'Basktetball',
    profilePic: 'https://imgs.search.brave.com/SMswVKwY3R1-mQWMHp7o9aDseLC-7VeMWJ0l9u379Ls/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly90b3du/c3F1YXJlLm1lZGlh/L3NpdGUvODEyL2Zp/bGVzLzIwMTcvMDMv/bWV0aG9kLW1hbjEu/anBnP3c9MTIwMCZo/PTAmemM9MSZzPTAm/YT10JnE9ODk',
    stars:4
  }
]

const user = {
  name: 'Eugenio',
  middleName:'',
  lastname: 'Torres',
  profilePic: 'https://imgs.search.brave.com/kJKQlgpWW1xyG9ktsinvjydfB1zC-gnHV6uZMG7-Mxw/rs:fit:439:493:1/g:ce/aHR0cHM6Ly9sYWNv/bHVtbmFyaWFibG9n/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNS8wNy9rb25h/bjAuanBn'
};

const header = () => {
  return (
    <>
      <View style={styles.title}>
          <Text style={styles.titleText}>Tutorea</Text>
          <View style={{flexDirection:'row',flex:1, justifyContent:'flex-end', alignItems:'center'}}>
            <TouchableOpacity><IonIcon style={{marginRight:10}} size={30} name="notifications-outline" color="#fff"/></TouchableOpacity>
            <TouchableOpacity><Image source={{uri: user.profilePic}} style={styles.userImage}/></TouchableOpacity>
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
  return (
      <>
          <StatusBar backgroundColor="black"/>
          <View style={styles.rectangle}>
            <TutorsList tutors={tutors} header={header}/>
          </View>
      </>
  )
};

export default Home

const styles = StyleSheet.create({
  page:{
    flex:1,
  },
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