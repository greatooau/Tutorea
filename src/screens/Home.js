import { StyleSheet, Text, View, StatusBar, Image, FlatList, ScrollView } from 'react-native';
import React from 'react';
import TutorCard from '../components/TutorCard';
import { LinearGradient } from 'expo-linear-gradient';
import TutorsList from '../components/TutorsList';
import Category from '../components/Category';
import primaryColor from '../../constants/Colors';
import SearchBar from '../components/SearchBar';
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
  lastname: 'Torres'
}

const Home = ({navigation}) => {
  return (
      <LinearGradient colors={['rgb(28,50,82)', 'transparent']} style={styles.page}>
          
          <StatusBar backgroundColor="black"/>

          <View style={styles.title}>
              <Text style={styles.titleText}>Tutorea</Text>
          </View>
          
          <View style={styles.rectangle}>
            <View style={styles.greeting}>
              <Text style={[styles.greetingText, {fontSize:14, marginBottom:5}]}>Bienvenido,</Text>
              <Text style={[styles.greetingText, {fontSize:30}]}>{user.name} {user.lastname} !</Text>
            </View>
            <SearchBar placeholder="Busque un tutor"/>
            <View style={styles.categories}>
              <Category categoryName="Tecnología" iconName="laptop" iconSource="Ent" color='#000000'/>
              <Category categoryName="Ciencia" iconName="science" iconSource="Mat" color='#126D15'/>
              <Category categoryName="Ciencias sociales"  iconName="book" iconSource="fa" color="#2587be" />
              <Category categoryName="Idiomas" iconName="language" iconSource="Ent" color='#9A0D0D'/>
            </View>
            

            <TutorsList tutors={tutors}/>
          </View>
      </LinearGradient>
  )
}

export default Home

const styles = StyleSheet.create({
  page:{
    flex:1,
  },
  title:{
      marginLeft:20,
      marginTop:20,
      marginBottom:10
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
    borderWidth:1,
    flexDirection:'row',
    justifyContent:'center',
    height:'60%',
    flexWrap:'wrap',
  }
})