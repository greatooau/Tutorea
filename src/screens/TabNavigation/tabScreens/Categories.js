import { StyleSheet, Text, View, FlatList, StatusBar, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { TutorsStudentsContext } from '../../../context/TutorsContext';
import IonIcon from 'react-native-vector-icons/Ionicons'
import { TutorCard, Arrow } from '../../../components/Components'
import { primaryColor } from '../../../constants/Colors';
import { AccountContext } from '../../../context/AccountContext';

import AntIcon from 'react-native-vector-icons/AntDesign';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { dataFetcher } from '../../../constants/dataFetcher';
const Categories = ({ navigation, route }) => {
    let icon;
    const [user, setUser] = useContext(AccountContext);
    const [requestCategory, setRequestCategory ] = useState("")
    const category = route.params.category;
    const [tutors, setTutors] = useState([])

    useEffect(() => {


        const fetchTutors = async() =>{
            try{
                const response = await dataFetcher.get(`api/tutors/category/${encodeURI(category === 'Tecnología' ? 'technology' : category === 'Ciencia' ? 'science' : category === 'Ciencias sociales' ? 'social sciences' : category === 'Idiomas' && 'languages')}`,{
                    headers:{
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                setTutors(response.data)
            }catch(error) {
                console.log(error)
            }
            
    
            
        };
        fetchTutors();
      },[])

    switch(route.params.iconSource){
        case 'fa':
          icon = <FaIcon name={route.params.icon} size={72} color={route.params.color? route.params.color.toLowerCase() : '#000'}/>;
          break;
        case 'Ant':
          icon = <AntIcon name={route.params.icon} size={71} color={route.params.color? route.params.color.toLowerCase() : '#000'}/>;
          break;
        case 'Ent':
          icon = <EntypoIcon name={route.params.icon} size={71} color={route.params.color? route.params.color.toLowerCase() : '#000'}/>;
          break;
        case 'Mat':
          icon = <MatIcon name={route.params.icon} size={71} color={route.params.color? route.params.color.toLowerCase() : '#000'}/>;
          break;
    }

    
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
                <View>
                    <TouchableOpacity style={headerList.arrow} onPress={() => navigation.goBack()}><Arrow color={primaryColor}/></TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                        <View style={{marginLeft:'5%'}}>
                            <Text style={[ headerList.text, headerList.smallerText,]}>Categoría:</Text>
                            <Text style={[headerList.text,headerList.biggerText]}>{category}</Text>
                        </View>
                        <View style={headerList.icon}>
                            {icon}
                        </View>
                    </View>
                </View>
            </>
        )
    };

    return (
        tutors.length > 0 ?(<>
            <StatusBar backgroundColor="black"/>
            <View style={styles.rectangle}>
                <FlatList
                    nestedScrollEnabled={true}
                    data={ tutors }
                    renderItem={({ item }) => { return <View style={{flexDirection:'row', justifyContent:'center'}}><TutorCard onPress={()=> navigation.navigate('DetailTutorPay',{id: item._id})} profilePhoto={item.profile_picture} name={item.name} lastname={item.lastname} stars={item.stars} specialization={item.specialization}/></View> }}
                    keyExtractor={(item) => item._id}
                    ListHeaderComponent={header}
                    initialNumToRender={4}
                />
            </View>
        </>) :(
            <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator color={primaryColor} size={80}/>
            </View>)
    );

};

export default Categories;

const headerList = StyleSheet.create({
    text:{
        color:primaryColor,
        fontFamily:'lato-regular'
    },
    biggerText:{
        fontSize:30,
    },
    smallerText:{
        fontSize:18,
        marginBottom:10
    },
    
    icon:{
        flex:1, 
        flexDirection:'row', 
        justifyContent:'flex-end', 
        marginRight:'5%'
    },
    arrow:{
        marginTop:'5%',
        marginLeft:'5%',
        marginBottom:10
    }
});

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
    userImage:{
      width:40,
      height:40,
      borderRadius:40,
      marginHorizontal:20
    }
});