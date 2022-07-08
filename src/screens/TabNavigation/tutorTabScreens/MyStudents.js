import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    FlatList,
} from "react-native";
import React from "react";
import { primaryColor } from "../../../constants/Colors";
import { SearchBar, Category, StudentCard} from "../../../components/Components";

import { useContext, useState, useEffect } from "react";
import { TutorsStudentsContext } from "../../../context/TutorsContext";
import { AccountContext } from "../../../context/AccountContext";
import { dataFetcher } from "../../../constants/dataFetcher";

const MyStudents = ({ navigation }) => {
    const [account, setUser] = useContext(AccountContext);
    const [students, setStudents] = useContext(TutorsStudentsContext);
     useEffect(() => {
        let isMounted = true;
        const fetchTutors = async () => {
            const response = await dataFetcher.get("api/tutors/students", {
                headers: {
                    Authorization: `Bearer ${account.token}`,
                },
            });
            if (isMounted) setStudents(response.data);
        };
        fetchTutors();
        return () => {
            isMounted = false;
        };
    }, []);
    const header = () => {
        return (
            <>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Tutorea</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            flex: 1,
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }}
                    >
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Notifications')}><IonIcon style={{marginRight:10}} size={30} name="notifications-outline" color="#fff"/></TouchableOpacity> */}
                        <TouchableOpacity>
                            <Image
                                source={{ uri: account.profile_picture }}
                                style={styles.userImage}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* <View style={styles.pinkRectangle}>
          <Image style={styles.image} source={require('../../../../assets/img/png/study.png')}/>
          <Text style={{color:'#fff', fontFamily:'lato-bold', fontSize:35}}>Mis alumnos</Text>
        </View> */}
                <View style={styles.greeting}>
                    <Text style={[styles.greetingText, {fontSize:14, marginBottom:5}]}>Bienvenid@,</Text>
                    <Text style={[styles.greetingText, {fontSize:30}]}>{account.name} {account.lastname} !</Text>
                    <Text style={{marginTop:30, fontFamily:'lato-bold', fontSize:26, color:primaryColor}}>Mis alumnos</Text>
                </View>

            </>
        );
    };

    return (
        <>
            <StatusBar backgroundColor="black" />
            <View style={styles.rectangle}>
                <FlatList
                
                    nestedScrollEnabled={true}
                    data={students}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                                }}
                            >
                                <StudentCard
                                    /* onPress={() =>
                                        navigation.navigate(
                                            "DetailTutorNoPay",
                                            { id: item._id }
                                        )
                                    } */
                                    profilePhoto={item.student.profile_picture}
                                    name={item.student.name}
                                    lastname={item.student.lastname}
                                    /* stars={item.stars} */
                                    sesions={item.sesions}
                                    phone={item.student.phone}
                                />
                            </View>
                        );
                    }}
                    ListHeaderComponent={header}
                    initialNumToRender={4}
                />
            </View>
        </>
    );
};

export { MyStudents };

const styles = StyleSheet.create({
    greeting: {
        marginVertical:'5%',
        paddingLeft:'5%'
    },
    greetingText: {
        color: primaryColor,
        fontFamily: 'lato-regular'
    },
    title: {
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: primaryColor,
        flexDirection: "row",
    },
    titleText: {
        color: "#fff",
        fontFamily: "lato-bold",
        fontSize: 35,
    },
    rectangle: {
        flex: 1,
        backgroundColor: "#CAD7DF".toLowerCase(),
    },
    pinkRectangle: {
        height: 340,
        backgroundColor: "#AF478C".toLowerCase(),
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 20,
    },
    image: {
        width: "80%",
        height: 250,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
        marginHorizontal: 20,
    },
});
