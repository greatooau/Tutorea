import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const StudentCard = ({
    name,
    lastname,
    phone,
    profilePhoto,
    schedule,
    sesions,
    onPress,

}) => {
    
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            delayPressIn={100}
            style={styles.card}
        >
            <View style={styles.imageContainer}>
                <Image source={{ uri: profilePhoto }} style={styles.image} />
            </View>

            <View style={styles.tutorInfo}>
                <Text style={styles.tutorInfoText}>
                    {name} {lastname}
                </Text>
                <View style={styles.starsContainer}>
                    
                </View>
                <Text style={{ color: "#707070" }}>Sesiones contratadas</Text>
                <Text>{sesions}</Text>
                <Text style={{ color: "#707070" }}>Contacto</Text>
                <Text> + 52 {phone}</Text>
                <Text>{schedule !== null ? "Fecha:" + schedule.split("##")[0] : ""}</Text>
                <Text>{schedule !== null ? "Hora: " + schedule.split("##")[1] : ""}</Text>
                
            </View>
        </TouchableOpacity>
    );
};

export {StudentCard};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        width: "90%",
        height: 180,
        borderRadius: 9,
        flexDirection: "row",
        marginTop: 30,
        borderBottomWidth: 2,
        borderRightWidth: 1,
        borderRightColor: "#d9d9d9",
        borderBottomColor: "#d9d9d9",
    },
    imageContainer: {
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "70%",
        height: "70%",
        borderRadius: 5,
    },
    tutorInfo: {
        marginLeft: "3%",
        marginVertical: "6%",
        flexDirection: "column",
    },
    tutorInfoText: {
        fontFamily: "lato-bold",
        fontSize: 20,
    },
    starsContainer: {
        flexDirection: "row",
        marginTop: "0%",
        marginBottom: "5%",
    },
});
