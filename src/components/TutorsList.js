import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import TutorCard from './TutorCard'

const TutorsList = ({ tutors }) => {
  return (
    <FlatList
      nestedScrollEnabled={true}
        data={tutors}
        renderItem={({item})=>{return <View style={{flexDirection:'row', justifyContent:'center'}}><TutorCard profilePhoto={item.profilePic} name={item.name} middleName={item.middleName} lastname={item.lastname} stars={item.stars} specialization={item.specialization}/></View>}}
        keyExtractor={(item) => item.id}
    />
  )
};

export default TutorsList
