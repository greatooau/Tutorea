import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { primaryColor } from '../constants/Colors'

const Insights = ({name}) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

export default Insights

const styles = StyleSheet.create({
    badge:{
        borderRadius:9,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'40%',
        marginHorizontal:10,
        height:40,
        marginVertical:2,
        borderBottomWidth:2,
        borderRightWidth:1,
        borderRightColor:'#d9d9d9',
        borderBottomColor:'#d9d9d9',
    },
    text:{
        color:primaryColor,
        fontFamily:'lato-regular',
        fontSize:20
    }
})