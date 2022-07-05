import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import { primaryColor } from "../../../constants/Colors";
import FaIcon from "react-native-vector-icons/FontAwesome";
import { TutorsContext } from "../../../context/TutorsContext";
import { AccountContext } from "../../../context/AccountContext";
import {
  Arrow,
  AppButton,
  StudyCard,
  Insights,
} from "../../../components/Components";
import { dataFetcher } from "../../../constants/dataFetcher";

const DetailTutorNoPay = ({ navigation, route }) => {
    const [tutor, setTutor] = useState({ insights: [], studies: [] });
    const [tutors, setTutors] = useContext(TutorsContext)
    const [user, setUser] = useContext(AccountContext);
    useEffect(() => {
        const fetchTutors = async () => {
            const response = await dataFetcher.get(`api/tutors/${route.params.id}`, {
                headers: {
                Authorization: `Bearer ${user.token}`,
                },
            });
            const data = response.data;
            setTutor(data);
        };
        fetchTutors();
    }, []);

    const starsDisplayed = [];

    for (let i = 0; i < 5; ++i) {
        if (i < tutor.stars) {
        starsDisplayed.push(
            <FaIcon
            style={{ marginHorizontal: 1 }}
            key={i}
            name="star"
            size={44}
            color="#f2ae00"
            />
        );
        } else {
        starsDisplayed.push(
            <FaIcon
            style={{ marginHorizontal: 1 }}
            key={i}
            name="star"
            size={44}
            color="#6e6e6d"
            />
        );
        }
    }

    const onEndTutory = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        }
        const body = {
            tutorId:`${route.params.id}`
        }
        const response = await dataFetcher.post(`/api/users/mytutors/delete`, body, config)
        
            setTutors(tutors.length > 1  ? tutors.filter(item => item._id !== route.params.id): [])
            const newMyTutors = user.myTutors.filter(item => item !== route.params.id)
            setUser({...user, myTutors: newMyTutors})
            navigation.goBack()
        
        

    }

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
                {/* <TouchableOpacity onPress={() => navigation.navigate('Notifications')} activeOpacity={0.7}><IonIcon style={{marginRight:10}} size={30} name="notifications-outline" color="#fff"/></TouchableOpacity> */}
                <TouchableOpacity activeOpacity={0.7}>
                <Image
                    source={{ uri: user.profile_picture }}
                    style={styles.userImage}
                />
                </TouchableOpacity>
            </View>
            </View>

            <View style={styles.tutorImage}>
            <ImageBackground
                source={{ uri: tutor.profile_picture }}
                resizeMode="cover"
                style={{ flex: 1, flexDirection: "column" }}
            >
                <View style={styles.arrow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Arrow color="#fff"></Arrow>
                </TouchableOpacity>
                </View>

                <View style={styles.tutorImgTextContainer}>
                <Text style={styles.tutorImgText}>
                    {tutor.name} {tutor.lastname}
                </Text>
                </View>
            </ImageBackground>
            </View>

            <Text style={styles.studies}>Estudios</Text>
        </>
        );
    };
    return tutor.insights.length > 0 && tutor.studies.length > 0 ? (
        <>
        <StatusBar backgroundColor="black" />
        <View style={styles.rectangle}>
            <FlatList
                nestedScrollEnabled={true}
                data={tutor.studies}
                renderItem={({ item }) => {
                    return (
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <StudyCard
                        photo={item.img}
                        name={item.study}
                        schoolName={item.school}
                        />
                    </View>
                    );
                }}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={header}
                ListFooterComponent={
                        <View>
                            <Text style={styles.studies}>Puntuación {tutor.stars}/5</Text>
                            <View style={styles.starsContainer}>
                                {starsDisplayed.map((element) => element)}
                            </View>
                            <Text style={styles.studies}>Conocimientos</Text>
                            <View style={styles.insights}>
                                {tutor.insights.map((element) => (
                                <Insights key={element.id} name={element.name} />
                                ))}
                            </View>
                            <View style={{paddingBottom:'20%', paddingTop:'10%'}}>
                            <AppButton buttonText="Terminar tutoría" onPress={onEndTutory} secondary={true}/>
                            <AppButton buttonText="Reportar" onPress={() => navigation.navigate('ReportTutor',{tutor:{...tutor}})} secondary={true}/>
                            </View>
                        </View>
                }
                initialNumToRender={4}
            />
        </View>
        </>
    ) : (
        <View
        style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <ActivityIndicator color={primaryColor} size={80} />
        </View>
    );
    };

    export default DetailTutorNoPay;

    const styles = StyleSheet.create({
    title: {
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: primaryColor,
        flexDirection: "row",
    },
    rectangle: {
        flex: 1,
        backgroundColor: '#CAD7DF'.toLowerCase(),
    },
    titleText: {
        color: "#fff",
        fontFamily: "lato-bold",
        fontSize: 35,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
        marginHorizontal: 20,
    },
    tutorImage: {
        height: 370,
    },
    arrow: {
        flexDirection: "column",
        flex: 1,
        paddingTop: "8%",
        paddingLeft: "4%",
    },
    tutorImgTextContainer: {
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
    },
    tutorImgText: {
        fontFamily: "lato-bold",
        color: "#fff",
        fontSize: 35,
    },
    studies: {
        marginLeft: 20,
        fontFamily: "lato-regular",
        fontSize: 20,
        marginTop: 30,
    },
    starsContainer: {
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 20,
    },
    insights: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: 30,
        paddingBottom: "20%",
    },
});
