import { View, Text , Touchable} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const Arrow = ({ color }) => {
  return (
    <View>
      <Icon name="arrowleft" size={20} color={color}/>
    </View>
  );
}
export default Arrow;