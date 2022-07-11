import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    StatusBar,
    ScrollView,
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
const ChangePassword = ({ navigation }) => {
    const [account, setUser] = useContext(AccountContext);

    const [actualPassword, setActualPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const onSubmitHandler = async () => {
        if (
            newPassword === confirmNewPassword &&
            newPassword !== "" &&
            confirmNewPassword !== "" &&
            actualPassword !== ""
        ) {
            console.log('pipi')
            const config = {
                headers: {
                    Authorization: `Bearer ${account.token}`,
                },
            };
            const body = {
                oldPassword: actualPassword,
                newPassword,
            };

            const response = await dataFetcher.post(
                "api/" + account.role + "s/password",
                body,
                config
            );

            if (response.status === 200) {
                Alert.alert(
                    "Cambio exitoso",
                    "El cambio de tu contraseña ha sido exitoso."
                );
                setActualPassword("");
                setNewPassword("");
                setConfirmNewPassword("");
            } else {
                Alert.alert(
                    "Error",
                    "Tu contraseña no ha podido ser cambiada debido a que tu contraseña actual no coincide."
                );
            }
        }
    };

    return (
        <ScrollView style={styles.rectangle}>
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
                    {/*                     <TouchableOpacity onPress={() => navigation.navigate('Notifications')}><IonIcon style={{marginRight:20}} size={30} name="notifications-outline" color="#fff"/></TouchableOpacity>
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
                    <Text style={styles.profileText}>Cambiar contraseña</Text>
                </View>
            </View>

            <View style={styles.form}>
                <FormTextInput
                    placeholder="Escribe tu contraseña actual"
                    fieldName="Contraseña actual"
                    fieldNameColor={primaryColor}
                    value={actualPassword}
                    setProp={setActualPassword}
                />
                <FormTextInput
                    placeholder="Escribe una nueva contraseña"
                    fieldName="Nueva contraseña"
                    fieldNameColor={primaryColor}
                    value={newPassword}
                    setProp={setNewPassword}
                />
                <FormTextInput
                    placeholder="Vuelve a escribir tu nueva contraseña"
                    fieldName="Confirmar contraseña"
                    fieldNameColor={primaryColor}
                    value={confirmNewPassword}
                    setProp={setConfirmNewPassword}
                />
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
                <AppButton buttonText="Guardar" onPress={onSubmitHandler} />
                <AppButton
                    buttonText="Cancelar"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </ScrollView>
    );
};

export { ChangePassword };

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
    form: {
        flexDirection: "column",
        paddingTop: 20,
        paddingBottom: 30,
    },
});
