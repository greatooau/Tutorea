import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

const Category = ({iconName, iconSource, categoryName, color}) => {

  let icon;

  switch(iconSource){
    case 'fa':
      icon = <FaIcon name={iconName} size={72} color={color? color.toLowerCase() : '#000'}/>;
      break;
    case 'Ant':
      icon = <AntIcon name={iconName} size={71} color={color? color.toLowerCase() : '#000'}/>;
      break;
    case 'Ent':
      icon = <EntypoIcon name={iconName} size={71} color={color? color.toLowerCase() : '#000'}/>;
      break;
    case 'Mat':
      icon = <MatIcon name={iconName} size={71} color={color? color.toLowerCase() : '#000'}/>;
      break;
  }

  return (
    <View style={styles.card}>
        {icon && icon}
        <Text style={styles.text}>{categoryName}</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
    card:{
        paddingVertical:'13%',
        marginHorizontal:'1%',
        flexDirection:'column',
        alignItems:'center',
        borderWidth:1,
        width:'45%',
        height:'45%',
        borderRadius:9,
        marginTop:'2%',
    },
    text:{
      fontFamily:'lato-regular',
      fontSize:14
    }
})