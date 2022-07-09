import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    StatusBar,
    View,
    Alert,
} from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import MatIcon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { primaryColor, secondaryColor } from "../../../constants/Colors";
import { FormTextInput } from "../../../components/Components";
import { AppButton } from "../../../components/Components";
import { AccountContext } from "../../../context/AccountContext";
import { useContext, useState } from "react";
import { dataFetcher } from "../../../constants/dataFetcher";

const AddInsights = ({ navigation }) => {
    const [account, setAccount] = useContext(AccountContext);

    const [name, setName] = useState('');

    const onSubmitHandler = async () => {
        if (
            name === ""
        ) {
            Alert.alert("Error", "Llene el campo");
        } else {
            const config = {
                headers: {
                    Authorization: `Bearer ${account.token}`,
                },
            };
            const body = {
                name
            };
            const response = await dataFetcher.post(
                "api/tutors/insights",
                body,
                config
            );
            if (response.status === 200) {
                let ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>
                s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h))
                Alert.alert("Enhorabuena", "El conocimiento ha sido agregado con éxito");
                account.insights.push({
                    id:ObjectId,
                    name
                })
            } else {
                Alert.alert("Error", "El conocimiento no pudo ser agregado con éxito");
            }
        }
    };

    return (
        <View style={styles.rectangle}>
            <StatusBar backgroundColor="#000" />
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
                    {/*             <TouchableOpacity onPress={() => navigation.navigate('Notifications')}><IonIcon style={{marginRight:20}} size={30} name="notifications-outline" color="#fff"/></TouchableOpacity>
                     */}
                </View>
            </View>

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
                            ? account.name.charAt(0) + ". " + account.lastname
                            : account.name + " " + account.lastname}
                    </Text>
                    <Text style={styles.profileText}>Agregar Conocimientos</Text>
                </View>
            </View>

            <View style={styles.form}>
                <FormTextInput
                    placeholder="Ingrese el conocimiento"
                    fieldName="Nombre"
                    fieldNameColor={primaryColor}
                    value={name}
                    setProp={setName}
                />
                {/* <FormTextInput
                    placeholder="Escribe tu correo electrónico"
                    fieldName="Correo Electrónico"
                    fieldNameColor={primaryColor}
                    value={email}
                    setProp={setEmail}
                /> */}
                
            </View>
            
                
            
            <View
                style={{
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: 50,
                }}
            >
                <AppButton
                    buttonText="Agregar"
                    onPress={() => {
                        onSubmitHandler();
                    }}
                />
                <AppButton
                    buttonText="Cancelar"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View>
    );
};

export { AddInsights  };

const styles = StyleSheet.create({
    title: {
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: primaryColor,
        flexDirection: "row",
    },
    sections: {marginLeft:'15%', fontFamily:'lato-regular', fontSize:15},
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
    form: {
        flexDirection: "column",
        paddingTop: 20,
        paddingBottom: 50,
    },
});
