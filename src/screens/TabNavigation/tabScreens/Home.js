import { StyleSheet, Text, View, StatusBar, Image, FlatList, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import {primaryColor} from '../../../constants/Colors';
import { SearchBar, Category, TutorsList, TutorCard } from '../../../components/Components';
import IonIcon from 'react-native-vector-icons/Ionicons'

import { useContext, useState, useEffect } from 'react';
import { AccountContext } from '../../../context/AccountContext';

import { TutorsContext } from '../../../context/TutorsContext';
import { dataFetcher } from '../../../constants/dataFetcher';

const Home = ({navigation}) => {

    const [ user, setUser ] = useContext(AccountContext)
    const [tutors, setTutors] = useState([])
    const [ search, setSearch ] = useState('');
    
    useEffect(() => {
        let isMounted = true; 

        const fetchTutors = async() =>{
            
            const response = await dataFetcher.get('api/tutors',{
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            });
            if (isMounted){ setTutors(response.data)}
        };

        fetchTutors();

        return () => { isMounted = false };
    },[])
    const header = () => {
        
        return (
            <>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Tutorea</Text>
                    <View style={{flexDirection:'row',flex:1, justifyContent:'flex-end', alignItems:'center'}}>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Notifications')} activeOpacity={0.7}><IonIcon style={{marginRight:10}} size={30} name="notifications-outline" color="#fff"/></TouchableOpacity> */}
                        <TouchableOpacity activeOpacity={0.7}><Image source={{uri: user.profile_picture}} style={styles.userImage}/></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.greeting}>
                    <Text style={[styles.greetingText, {fontSize:14, marginBottom:5}]}>Bienvenid@,</Text>
                    <Text style={[styles.greetingText, {fontSize:30}]}>{user.name} {user.lastname} !</Text>
                </View>
            
                <SearchBar placeholder="Busque un tutor" value={search} setProp={setSearch}/>
                {search === '' && (  
                <>
                    <Text style={[styles.interests, {fontSize:20, marginBottom:15}]}>Categorías</Text>
                    <View style={styles.categories}>
                        <Category onPress={() => navigation.navigate('Categories', { icon:"laptop", category:"Tecnología", color:"#000", iconSource:"Ent" })} categoryName="Tecnología" iconName="laptop" iconSource="Ent" color='#000'/>
                        <Category onPress={() => navigation.navigate('Categories', { icon:"science", category:"Ciencia", color:"#126D15", iconSource:"Mat" })} categoryName="Ciencia" iconName="science" iconSource="Mat" color='#126D15'/>
                        <Category onPress={() => navigation.navigate('Categories', { icon:"book", category:"Ciencias sociales", color:"#2587be", iconSource:"fa" })} categoryName="Ciencias sociales"  iconName="book" iconSource="fa" color="#2587be" />
                        <Category onPress={() => navigation.navigate('Categories', { icon:"language", category:"Idiomas", color:"#9A0D0D", iconSource:"Ent" })} categoryName="Idiomas" iconName="language" iconSource="Ent" color='#9A0D0D'/>
                    </View>
                </>)}
            </>  
        );
    };
    const [elements, setElements] = useState(null);

    return (
        
        tutors.length > 0 ?(<>
            <StatusBar backgroundColor="black"/>
            <View style={styles.rectangle}>
            <FlatList
                nestedScrollEnabled={true}
                data={search !== '' && tutors.filter(tutor => (tutor.name + ' ' + tutor.lastname).toLowerCase().includes(search.toLowerCase()) && tutor)}
                renderItem={({item})=>{
                    return (
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <TutorCard onPress={()=> navigation.navigate('DetailTutorPay',{id: item._id})} profilePhoto={item.profile_picture} name={item.name}  lastname={item.lastname} stars={item.stars} specialization={item.specialization}/>
                        </View>
                    )}}
                keyExtractor={(item)=>item._id}
                ListHeaderComponent={header}
                initialNumToRender={4}
            />
            </View>
        </>):(
            <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator color={primaryColor} size={80}/>
            </View>)
    )
};

export default Home

const styles = StyleSheet.create({
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
        backgroundColor:'#CAD7DF'.toLowerCase(),
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
