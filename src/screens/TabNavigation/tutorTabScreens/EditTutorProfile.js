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
import { AppButton, Dropdown } from "../../../components/Components";
import { AccountContext } from "../../../context/AccountContext";
import { useContext, useState } from "react";
import { dataFetcher } from "../../../constants/dataFetcher";

const EditTutorProfile = ({ navigation }) => {
    const [account, setAccount] = useContext(AccountContext);

    const [username, setUserName] = useState(
        account.username ? account.username : ""
    );
    const [email, setEmail] = useState(account.email ? account.email : "");
    const [name, setName] = useState(account.name ? account.name : "");
    const [lastname, setLastname] = useState(
        account.lastname ? account.lastname : ""
    );
    const [sex, setSex] = useState(account.sex ? account.sex : "default");
    const [bornDate, setBornDate] = useState(
        account.born_date ? account.born_date : ""
    );
    const [category, setCategory] = useState(
        account.category ? account.category : ""
    );
    const [fee, setFee] = useState(account.fee ? `${account.fee}` : "");
    const [specialization, setSpecialization] = useState(
        account.specialization ? account.specialization : ""
    );
    const [bankAccount, setBankAccount] = useState(
        account.bank_account ? account.bank_account : ""
    );

    const onSubmitHandler = async () => {
        if (
            name === "" ||
            username === "" ||
            email === "" ||
            lastname === "" ||
            sex === "default" ||
            bornDate === "" ||
            category === ""
        ) {
            Alert.alert("Error", "Llene los campos correctamente");
        } else {
            const config = {
                headers: {
                    Authorization: `Bearer ${account.token}`,
                },
            };
            const body = {
                username,
                email,
                name,
                lastname,
                sex,
                born_date: bornDate,
                category,
                specialization,
                fee,
                bank_account: bankAccount,
            };
            const response = await dataFetcher.put(
                "api/tutors/" + account.id,
                body,
                config
            );
            if (response.status === 200) {
                
                navigation.navigate("TabTutor");
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
                    <Text style={styles.profileText}>Editar perfil</Text>
                </View>
            </View>

            <View style={styles.form}>
                
                
                <FormTextInput
                    placeholder="Escribe tu nombre de usuario"
                    fieldName="Nombre de usuario"
                    fieldNameColor={primaryColor}
                    value={username}
                    setProp={setUserName}
                />
                <FormTextInput
                    placeholder="Escribe tu correo electrónico"
                    fieldName="Correo Electrónico"
                    fieldNameColor={primaryColor}
                    value={email}
                    setProp={setEmail}
                />
                <FormTextInput
                    placeholder="Escribe tu nombre"
                    fieldName="Nombre"
                    fieldNameColor={primaryColor}
                    value={name}
                    setProp={setName}
                />
                <FormTextInput
                    placeholder="Escribe tu apellido"
                    fieldName="Apellido"
                    fieldNameColor={primaryColor}
                    value={lastname}
                    setProp={setLastname}
                />

                <Dropdown
                    fieldName='Sexo'
                    fieldNameColor={primaryColor}
                    setProp={setSex}
                    value={sex}
                    items={[
                        { id: 1, name: "Selecciona tu sexo", value: "default" },
                        { id: 2, name: "masculino", value: "masculino" },
                        { id: 3, name: "femenino", value: "femenino" },
                    ]}
                />
                
                <FormTextInput
                    placeholder="Selecciona tu fecha de nacimiento"
                    fieldName="Fecha de nacimiento"
                    fieldNameColor={primaryColor}
                    value={bornDate}
                    setProp={setBornDate}
                />
                <Dropdown
                    fieldName='Categoria'
                    fieldNameColor={primaryColor}
                    setProp={setCategory}
                    value={category}
                    items={[
                        { id: 1, name: "Ciencias Sociales", value: "social sciences" },
                        { id: 2, name: "Ciencia", value: "science" },
                        { id: 3, name: "Tecnología", value: "technology" },
                        { id: 4, name: "Idiomas", value: "languages" },
                    ]}
                />
                <FormTextInput
                    placeholder="Escribe tu especializacion"
                    fieldName="Especializacion"
                    fieldNameColor={primaryColor}
                    value={specialization}
                    setProp={setSpecialization}
                />
                <FormTextInput
                    placeholder="Escribe el costo por sesion"
                    fieldName="Costo por sesion (MXN)"
                    fieldNameColor={primaryColor}
                    value={fee}
                    setProp={setFee}
                    numeric={true}
                    maxLength={3}
                />

                <FormTextInput
                    placeholder="Escribe tu cuenta bancaria"
                    fieldName="Cuenta bancaria"
                    fieldNameColor={primaryColor}
                    value={bankAccount}
                    setProp={setBankAccount}
                    maxLength={20}
                    numeric={true}
                />
            </View>

            <Text style={styles.sections}>Estudios</Text>
            <AppButton
                secondary={true}
                buttonText="Agregar"
                onPress={() => navigation.navigate("AddStudies")}
            />
            <Text style={[styles.sections, { marginTop: 20 }]}>
                Conocimientos
            </Text>
            <AppButton
                secondary={true}
                buttonText="Agregar"
                onPress={() => navigation.navigate("AddInsights")}
            />
            <Text style={[styles.sections, { marginTop: 20 }]}>Contactos</Text>
            <AppButton
                style={{ marginBottom: 60 }}
                secondary={true}
                buttonText="Agregar"
                onPress={() => navigation.navigate("AddContacts")}
            />

            <View
                style={{
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: 50,
                }}
            >
                <AppButton
                    buttonText="Guardar"
                    onPress={() => {
                        onSubmitHandler();
                        setAccount({
                            ...account,
                            username,
                            email,
                            name,
                            lastname,
                            sex,
                            born_date: bornDate,
                            specialization,
                            fee,
                            category,
                            bank_account: bankAccount,
                        });

                        navigation.goBack();
                    }}
                />
                <AppButton
                    buttonText="Cancelar"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </ScrollView>
    );
};

export { EditTutorProfile };

const styles = StyleSheet.create({
    title: {
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: primaryColor,
        flexDirection: "row",
    },
    sections: { marginLeft: "15%", fontFamily: "lato-regular", fontSize: 15 },
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
