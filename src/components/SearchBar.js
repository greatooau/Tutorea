import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons'
import { useState } from 'react';
import {primaryColor} from '../constants/Colors';

const SearchBar = ({ placeholder, setProp, value, onSubmitEditing}) => {
    return(

        <View style={styles.container}>

                <View style={styles.searchSection}>
                    <TextInput
                        style={styles.input}
                        placeholder={placeholder}
                        value={value && value}
                        onChangeText={(newText) => setProp(newText)}
                        underlineColorAndroid="transparent"
                        onSubmitEditing={onSubmitEditing}
                    />
                    <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
                </View>

                <TouchableOpacity activeOpacity={0.7} style={styles.filter}>
                    <IonIcon name="filter" size={25} color="#fff"/>
                </TouchableOpacity>
        </View>
        
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container:{
        marginBottom:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    searchSection: {
        width:'75%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        
        borderRadius:9,
        borderBottomWidth:2,
        borderRightWidth:1,
        borderRightColor:'#d9d9d9',
        borderBottomColor:'#d9d9d9',
    },
    searchIcon: {
        padding: 10,
        marginRight:10
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        backgroundColor: '#fff',
        color: '#424242',
        borderRadius:9
    },
    filter:{
        backgroundColor:primaryColor,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:50,
        borderRadius:9,
        marginLeft:10
    }
});
