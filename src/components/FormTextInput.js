import { StyleSheet, View, TextInput, Text, Touchable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';

const FormTextInput = ({ placeholder, fieldName, isPassword }) => {

    const [ visible, setVisible ] = useState(false);

    return(

        <View style={styles.container}>
            <Text style={styles.fieldName}>{fieldName}</Text>

            <View style={[styles.form, styles.shadowProp]}>
                
                
                <TextInput secureTextEntry={isPassword} style={styles.textInput} placeholder={placeholder}/>
            
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    fieldName:{
        color: '#fff',
        fontSize:14,
        marginVertical:10
    },
    form: {
        
        flexDirection:'row',
        backgroundColor: '#fff',
        borderRadius:9,
        width:284,
        height:40
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: .2, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 3,
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

export default FormTextInput;