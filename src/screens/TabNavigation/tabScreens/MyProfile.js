import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import MatIcon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { primaryColor, secondaryColor } from "../../../constants/Colors";
import { AccountContext } from "../../../context/AccountContext";
import { useContext } from "react";
const MyProfile = ({ navigation }) => {
    const [account, setUser] = useContext(AccountContext); //{user.name} {user.lastname.length > 7 ? user.lastname.charAt(0) + '.' : user.lastname}
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
                    {/*             <TouchableOpacity onPress={() => navigation.navigate('Notifications')} activeOpacity={0.7}><IonIcon style={{marginRight:20}} size={30} name="notifications-outline" color="#fff"/></TouchableOpacity>
                     */}
                </View>
            </View>
            <View style={styles.rectangle}>
                <View style={styles.profile}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Image
                            source={{ uri: account.profile_picture }}
                            style={styles.userImage}
                        />
                    </TouchableOpacity>
                    <View style={{ paddingTop: 20 }}>
                        <Text style={[styles.name, styles.profileText]}>
                            {(account.name + " " + account.lastname).length > 18
                                ? account.name.charAt(0) +
                                  ". " +
                                  account.lastname
                                : account.name + " " + account.lastname}
                        </Text>
                        <Text style={styles.profileText}>Perfil</Text>
                    </View>
                </View>

                <View style={styles.options}>
                    <TouchableOpacity
                        onPress={() => {
                            if(account.role === "user")
                                navigation.navigate("EditProfile");
                            else if(account.role === "tutor")
                                navigation.navigate('EditTutorProfile')
                        }}
                        activeOpacity={0.7}
                        style={styles.individualOption}
                    >
                        <IonIcon
                            style={styles.icon}
                            size={50}
                            name="settings-outline"
                            color={secondaryColor}
                        />
                        <Text style={styles.secondaryColorText}>
                            Editar Perfil
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ChangePassword")}
                        activeOpacity={0.7}
                        style={styles.individualOption}
                    >
                        <IonIcon
                            style={styles.icon}
                            size={50}
                            name="key-outline"
                            color={secondaryColor}
                        />
                        <Text style={styles.secondaryColorText}>
                            Cambiar contraseña
                        </Text>
                    </TouchableOpacity>
                    {/*<TouchableOpacity onPress={()=> navigation.navigate('PayInfo')} activeOpacity={0.7} style={styles.individualOption}>
          <MatIcon style={styles.icon} size={50} name="payment" color={secondaryColor}/>
          <Text style={styles.secondaryColorText}>Información de pago</Text>
</TouchableOpacity>*/}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("LoginRegister")}
                        activeOpacity={0.7}
                        style={styles.individualOption}
                    >
                        <MatIcon
                            style={styles.icon}
                            size={50}
                            name="logout"
                            color={secondaryColor}
                        />
                        <Text style={styles.secondaryColorText}>
                            Cerrar sesión
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default MyProfile;

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
    profileText: {
        color: primaryColor,
    },
    rectangle: {
        flex: 1,
        backgroundColor: "#CAD7DF".toLowerCase(),
    },
    userImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginLeft: 20,
        marginRight: 20,
    },
    profile: {
        flexDirection: "row",
        borderBottomWidth: 1,
        paddingTop: 40,
        paddingBottom: 20,
    },
    name: {
        fontFamily: "lato-regular",
        fontSize: 30,
        marginLeft: -2,
    },
    options: {
        flexDirection: "column",
        paddingTop: 40,
    },
    individualOption: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    secondaryColorText: {
        color: secondaryColor,
        fontSize: 20,
    },
    icon: {
        marginLeft: 50,
        marginRight: 35,
    },
});
