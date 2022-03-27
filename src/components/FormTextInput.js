import { StyleSheet, View, TextInput, Text, Touchable, } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';

const FormTextInput = ({ placeholder, fieldName, fieldNameColor, isPassword, value, setProp, maxLength}) => {
    /* const [ visible, setVisible ] = useState(false);
    const [text, setText] = useState(''); */

    return(

        <View style={styles.container}>
            <Text style={[styles.fieldName, {color: fieldNameColor ? fieldNameColor : '#fff',}]}>{fieldName ? fieldName : ''}</Text>

            <View style={[styles.form]}>
                
                <TextInput maxLength={maxLength} value={value && value} secureTextEntry={isPassword ? isPassword : false} style={styles.textInput} placeholder={placeholder ? placeholder : ''} onChangeText={(newText) => setProp(newText)}/>
            
            </View>
        </View>
        
    );
};

export default FormTextInput;

const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    fieldName:{
        fontSize:14,
        marginVertical:10
    },
    form: {
        
        flexDirection:'row',
        backgroundColor: '#fff',
        borderRadius:9,
        width:'75%',
        height:40
    },
    icon:{
        padding:10
    },
    textInput: {
        flex:1,
        fontSize:14,
        marginLeft:15
    }
});
