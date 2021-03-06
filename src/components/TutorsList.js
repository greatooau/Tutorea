import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import TutorCard from './TutorCard'

import { TutorProvider, TutorsStudentsContext } from '../context/TutorsContext';
import { useContext } from 'react';
const TutorsList = ({ header}) => {
  const tutors = useContext(TutorsStudentsContext)
  return (
      <FlatList
        nestedScrollEnabled={true}
          data={tutors}
          renderItem={({item})=>{return <View style={{flexDirection:'row', justifyContent:'center'}}><TutorCard profilePhoto={item.profile_picture} name={item.name} middleName={item.middleName} lastname={item.lastname} stars={item.stars} specialization={item.specialization}/></View>}}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={header}
          initialNumToRender={4}
      />
  )
};

export default TutorsList
