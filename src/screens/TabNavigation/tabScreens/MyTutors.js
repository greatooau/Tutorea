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
import { SearchBar, Category, TutorCard } from "../../../components/Components";

import { useContext, useState, useEffect } from "react";
import { TutorsStudentsContext } from "../../../context/TutorsContext";
import { AccountContext } from "../../../context/AccountContext";
import { dataFetcher } from "../../../constants/dataFetcher";
import MaIcon from 'react-native-vector-icons/MaterialIcons'

const MyTutors = ({ navigation }) => {
    const [user, setUser] = useContext(AccountContext);
    const [tutors, setTutors] = useContext(TutorsStudentsContext);
    useEffect(() => {
        let isMounted = true;

        const fetchTutors = async () => {
            const response = await dataFetcher.get("api/users/mytutors", {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            if (isMounted) setTutors(response.data);
        };
        if (user.myTutors.length > 0) {
            fetchTutors();
        }

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
                                source={{ uri: user.profile_picture }}
                                style={styles.userImage}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.pinkRectangle}>
                    <Image
                        style={styles.image}
                        source={require("../../../../assets/img/png/study.png")}
                    />
                    <Text
                        style={{
                            color: "#fff",
                            fontFamily: "lato-bold",
                            fontSize: 35,
                        }}
                    >
                        Mis tutores
                    </Text>
                </View>
            </>
        );
    };

    return (
        <>
            <StatusBar backgroundColor="black" />
            <View style={styles.rectangle}>
                {user.myTutors.length === 0 ? (
                    <>
                        {header()}
                        <View
                            style={{
                                flexDirection: "column",
                                flex: 1,
                                alignItems: "center",
                                marginTop:'15%',
                                
                            }}
                        >
                            <MaIcon name="mood-bad" size={100} color={primaryColor}/>
                            <Text
                                style={{
                                    fontFamily: "lato-regular",
                                    fontSize: 20,
                                    width:'60%',
                                    textAlign:'center',
                                    color:primaryColor
                                }}
                            >
                                Usted no cuenta con tutores actualmente.
                            </Text>
                            
                        </View>
                    </>
                ) : (
                        <FlatList
                            nestedScrollEnabled={true}
                            data={tutors}
                            renderItem={({ item }) => {
                                return (
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <TutorCard
                                            onPress={() =>
                                                navigation.navigate(
                                                    "DetailTutorNoPay",
                                                    { id: item._id }
                                                )
                                            }
                                            profilePhoto={item.profile_picture}
                                            name={item.name}
                                            lastname={item.lastname}
                                            stars={item.stars}
                                            specialization={item.specialization}
                                        />
                                    </View>
                                );
                            }}
                            keyExtractor={(item) => item._id}
                            ListHeaderComponent={header}
                            initialNumToRender={4}
                        />
                    
                )}
            </View>
        </>
    );
};

export default MyTutors;

const styles = StyleSheet.create({
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
