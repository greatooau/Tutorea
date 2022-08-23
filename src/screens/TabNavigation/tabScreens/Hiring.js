import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { primaryColor, secondaryColor }from '../../../constants/Colors'
import { AccountContext } from '../../../context/AccountContext'
import { useContext, useState } from 'react'
import { FormTextInput, AppButton, Arrow, Dropdown } from '../../../components/Components'
import { dataFetcher } from '../../../constants/dataFetcher'
import { TutorsStudentsContext } from '../../../context/TutorsContext'

const Hiring = ({navigation, route}) => {

    const [schedule, setSchedule] = useState({});
    const [user, setUser] = useContext(AccountContext);
    const tutor = route.params.tutor
    const [sesion, setSesion] = useState('1')
    const [ isLoading, setIsLoading ] = useState(null);
    const [tutors,setTutors ] = useContext(TutorsStudentsContext)
    const [hours, setHours] = useState([
        { id: 99, name: "Seleccione una hora", value: "default" },
        { id: 1, name: "8:00 - 9:00", value: "H1" },
        { id: 2, name: "9:00 - 10:00", value: "H2" },
        { id: 3, name: "10:00 - 11:00", value: "H3" },
        { id: 4, name: "11:00 - 12:00", value: "H4" },
        { id: 5, name: "12:00 - 13:00", value: "H5" },
        { id: 6, name: "13:00 - 14:00", value: "H6" },
        { id: 7, name: "14:00 - 15:00", value: "H7" },
        { id: 8, name: "15:00 - 16:00", value: "H8" },
        { id: 9, name: "16:00 - 17:00", value: "H9" },
        { id: 10, name: "17:00 - 18:00", value: "H10" },
        { id: 11, name: "18:00 - 19:00", value: "H11" },
        { id: 12, name: "19:00 - 20:00", value: "H12"}]);
    const [sessions, setSessions] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        const getSessions = async() => {
            const response = await dataFetcher.get("api/tutors/"+ tutor._id + "/sessions")
            if(response.status === 200) {
                setIsLoading(false)
                setSessions(response.data)
            }
        }
        getSessions()
    },
    [])
    const onSubmitHandler = async (e) => {
      setIsLoading(true);
      try{
            const config = {
                headers:{
                'Authorization': `Bearer ${user.token}`
                }
            }
          const response = await dataFetcher.post("api/users/mytutors", {
              tutorId: tutor._id,
          }, 
          config);
          if (response.status === 200) {
              await dataFetcher.post(
               'api/transactions',
               { tutor: tutor._id, user: user.id, sesions:sesion, total: `${tutor.fee * parseInt(sesion)} MXN`, activo:1 },
               config)
              const response2 = await dataFetcher.get(
              `api/tutors/${tutor._id}`,
              config);
              const data = response2.data;
              tutors.push(data)
              user.myTutors.push(tutor._id)
              console.log(schedule)
              await dataFetcher.post('api/tutors/sessions',{
                  code:schedule,
                  tutor:tutor._id
              })
              setIsLoading(false);
              navigation.navigate('Home')
          }
          else {
              console.log(response.status)
          }
      }catch(error){
          console.log(error)
          Alert.alert("Error", "Ha ocurrido un error.", [{}])
      }
  };

  return (
    <ScrollView style={styles.rectangle}>
      <View style={styles.title}>
          <Text style={styles.titleText}>Tutorea</Text>
          <View style={{flexDirection:'row',flex:1, justifyContent:'flex-end', alignItems:'center'}}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Notifications')} activeOpacity={0.7}><IonIcon style={{marginRight:10}} size={30} name="notifications-outline" color="#fff"/></TouchableOpacity> */}
            <TouchableOpacity activeOpacity={0.7}><Image source={{uri: user.profile_picture}} style={styles.userImage}/></TouchableOpacity>
          </View>
      </View>
      <View >

        <View style={styles.titleJuan}>
            <TouchableOpacity onPress={() => navigation.goBack()}><Arrow color={primaryColor}/></TouchableOpacity>
            <Text style={[styles.titleJuanText, {fontSize:30, color:primaryColor, marginBottom:20, fontFamily:'lato-regular'}]}>Contratación</Text>
                <Dropdown
                    fieldName='Hora'
                    setProp={setSchedule}
                    value={schedule}
                    customPrompt="Selecciona el horario de tu sesion"
                    items={hours}
                    fieldNameColor={primaryColor}
                    //TODO: FALTA MANDAR LA POST REQUEST PARA HACER UNA ASIGNACION DE HORARIO
                />
        </View>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <View style={card.card}>
            <View style={card.imageContainer}>
              <Image 
                source={{uri: 'https://imgs.search.brave.com/FhbJiSn6NSkWqmbH1urdvlS2eRdIPr4-hmoKdg_noNQ/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly93d3cu/c2tpbGxhc3RpY3Mu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzAzL2xlZnQt/b3Zlci1tb25leS5q/cGc'}}
                style={card.image}
              />
            </View>
          
            <View style={card.studyInfo}>
                <Text style={card.studyInfoText}>Costo por sesión</Text>
                <Text style={{color:'#707070', marginTop:20, fontSize:20}}>{tutor.fee} MXN</Text>
                <Text style={{color:'#707070', marginTop:20, fontSize:20}}>TOTAL: {parseInt(sesion) < 1 || isNaN(parseInt(sesion)) || !Number.isInteger(parseInt(sesion)) ? 0 : tutor.fee * sesion} MXN</Text>
            </View>

          </View>
         
        </View>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
          {/* <View style={notice.noticeContainer}>
              <Text style={notice.noticeHey}>Hey!</Text>
              <Image source={require('../../../../assets/img/png/sms.png')} style={notice.noticeImage}/>
              <Text style={notice.description}>Al concretarse el pago, un mensaje SMS llegará al número asociado a esta cuenta, con el contacto de tu tutor.</Text>
          </View> */}
        </View>
        <View style={{paddingBottom:50, marginTop:30}}><AppButton secondary={true} onPress={onSubmitHandler} buttonText="Confirmar pago"/></View>
        
      </View>
      
    </ScrollView>  
  )
}

export default Hiring

const notice = StyleSheet.create({
    noticeContainer:{
      flexDirection:'column',
      alignItems:'center',
      borderWidth:1,
      borderColor:'#bbbbbb',
      width:'90%',
      borderRadius:12,
      marginVertical:20,
      paddingVertical:50,
      backgroundColor:'white'
    },
    noticeHey:{
      fontSize:30,
      fontFamily:'lato-bold'
    },
    noticeImage:{
      width:150,
      height:130
    },
    description:{
      fontFamily:'lato-regular',
      width:'70%',
      textAlign:'center',
      marginTop:40,
      fontSize:16
    }
});

const card = StyleSheet.create({
  card:{
    backgroundColor:'#fff',
    width:'90%',
    height:150,
    borderRadius:9,
    flexDirection:'row',
    marginTop:20,
    borderBottomWidth:2,
    borderRightWidth:1,
    borderRightColor:'#d9d9d9',
    borderBottomColor:'#d9d9d9',
  },
  imageContainer:{
    width:'40%',
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:'70%',
    height:'70%',
    borderRadius:5,
  },
  studyInfo:{
    marginLeft:'3%',
    marginVertical:'6%',
    flexDirection:'column'
  },
  studyInfoText: {
    fontFamily:'lato-bold',
    fontSize:20,
    width:'100%'
  },
})

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
  profileText:{
    color: primaryColor
  },
  rectangle:{
    flex:1,
    backgroundColor:'#CAD7DF'.toLowerCase(),
    borderWidth:1
  },
  userImage:{
    width:80,
    height:80,
    borderRadius:40,
    marginLeft:40,
    marginRight:20
  },
  profile:{
    flexDirection:'row',
    borderBottomWidth:1,
    paddingTop:40,
    paddingBottom:20
  },
  name:{
    fontFamily:'lato-regular',
    fontSize:30,
    marginLeft:-2
  },
  options:{
    flexDirection:'column',
    paddingTop:40
  },
  individualOption:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:30
  },
  secondaryColorText: {
    color: secondaryColor,
    fontSize:20
  },
  icon: {
    marginLeft:50,
    marginRight:35
  },
  userImage:{
    width:40,
    height:40,
    borderRadius:40,
    marginHorizontal:20
  },
  titleJuan: {
    marginTop:'10%',
    paddingLeft:'5%'
  },
})

