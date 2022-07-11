import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    ActivityIndicator,
    Alert
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Arrow, AppButton, FormTextInput, Dropdown } from "../../components/Components";
import { dataFetcher } from "../../constants/dataFetcher";
import { primaryColor } from "../../constants/Colors";

const Register = ({ navigation }) => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    /* const [sex, setSex] = useState('');
    const [bornDate, setBornDate] = useState('');
    const [phone, setPhone] = useState(''); */
    const [isLoading, setIsLoading] = useState(false);
    const [isTutor, setIsTutor] = useState(false);
    const [state, setState] = useState("");

    //Para el registro de tutor
    const [fee, setFee] = useState("");
    const [category, setCategory] = useState("");
    const [specialization, setSpecialization] = useState("default");

    const onSubmitHandler = async (e) => {
        if (password !== confirmPassword) {
            Alert.alert("Error", "La contraseñas no encajan");
        } else if (
            password === "" ||
            confirmPassword === "" ||
            name === "" ||
            username === "" ||
            email === "" ||
            lastname === "" /* ||
            sex === '' ||
            bornDate === ''||
            phone === '' */
        ) {
            Alert.alert("Error", "Llene los campos correctamente");
        } else if (
            password.length < 4 ||
            confirmPassword.length < 4 ||
            name.length < 1 ||
            username.length < 5 ||
            email.length < 6 ||
            lastname.length < 1 /* ||
            sex .length < 3 ||
            bornDate.length < 6||
            phone .length < 10 */
        ) {
            Alert.alert("Error", "Llene los campos correctamente");
        } else if (!email.includes("@")) {
            Alert.alert("Email", "Tu email está incompleto, necesita un @");
        } else if (!email.includes(".")) {
            Alert.alert("Email", "Tu email está incompleto, necesita un .");
        } else {
            setIsLoading(true);
            try {
                //Esto son los datos comunes entre las dos entidades
                const commonData = {
                    username,
                    email,
                    password,
                    name,
                    lastname
                };

                if (isTutor) {
                    //Datos que se enviarán al endpoint de tutores
                    //MENTIRA HAY QUE CAMBIAR ESTA MADRE PORQUE SIGUEN MAS PANTALLAS
                    const tutorData = {
                        ...commonData,
                        fee,
                        category,
                        specialization
                    };

                    
                    const response = await dataFetcher.post(
                        "api/tutors/",
                        tutorData
                    );
                    if (response.status === 201) {
                        setIsLoading(false);
                        navigation.navigate("Advertisement");
                    } else {
                        Alert.alert(
                            "Pre-registro fallido",
                            "EL pre-registro falló.",
                            [{}]
                        );
                        console.log(response.status);
                    }
                } else {
                    //Datos que se enviarán al endpoint de usuarios
                    const userData = {
                        ...commonData,
                        profile_picture:
                            "https://imgs.search.brave.com/GBLxonEYI_OAMfApYU2-OV4YFKkMARAbq8mFZoscPbo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZWFj/b3BpbmlvbmVzLmVz/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzAzL3VzZXItNi5w/bmc",
                        myTutors: [],
                    };

                    const response = await dataFetcher.post(
                        "api/users/",
                        userData
                    );
                    if (response.status === 201) {
                        setIsLoading(false);
                        setTimeout(() => {
                            Alert.alert(
                                "Registro exitoso",
                                "Ha sido registrado exitosamente.",
                                [{}]
                            );
                        }, 3000);
                        navigation.navigate("Login");
                    } else {
                        console.log(response.status);
                    }
                }
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        }
    };

    const onChange = () => {
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setName("");
        setLastname("");
        setCategory("default");
        setSpecialization("");
        setFee("")
        setIsTutor(isTutor ? false : true);
    };
    return (
        <ScrollView>
            <StatusBar backgroundColor="black" />
            <LinearGradient
                colors={["rgb(28,50,82)", "transparent"]}
                style={styles.page}
            >
                <View style={styles.arrow}>
                    <TouchableOpacity onPress={() => navigation.popToTop()}>
                        <Arrow color="#fff" />
                    </TouchableOpacity>

                    <Text style={[styles.text, styles.h1]}>
                        {!isTutor ? "Registrar" : "Pre-registro"}
                    </Text>
                    {/* Cambiar el texto segun sea tutor o estudiante */}
                    <Text style={styles.text}>
                        {!isTutor
                            ? "Ingresa tus datos para el registro."
                            : "Ingresa tus datos para el pre-registro."}
                    </Text>
                </View>
                <View style={tutorOrStudent.squareContainer}>
                    <TouchableOpacity
                        style={[
                            tutorOrStudent.square,
                            { borderBottomColor: isTutor ? "#948e8e" : "#fff" },
                        ]}
                        onPress={onChange}
                        disabled={!isTutor}
                        activeOpacity={0.7}
                    >
                        <Text
                            style={[
                                tutorOrStudent.text,
                                { color: isTutor ? "#948e8e" : "#fff" },
                            ]}
                        >
                            Estudiante
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            tutorOrStudent.square,
                            {
                                color: isTutor ? "#fff" : "#948e8e",
                                borderBottomColor: isTutor ? "#fff" : "#948e8e",
                            },
                        ]}
                        disabled={isTutor}
                        onPress={onChange}
                        activeOpacity={0.7}
                    >
                        <Text
                            style={[
                                tutorOrStudent.text,
                                { color: !isTutor ? "#948e8e" : "#fff" },
                            ]}
                        >
                            Tutor
                        </Text>
                    </TouchableOpacity>
                </View>
                {!isTutor ? (
                    <View style={styles.form}>
                        <FormTextInput
                            placeholder="Escribe tu nombre de usuario"
                            fieldName="Nombre de usuario"
                            setProp={setUserName}
                            value={username}
                        />
                        <FormTextInput
                            placeholder="Escribe tu correo electrónico"
                            fieldName="Correo Electrónico"
                            setProp={setEmail}
                            value={email}
                        />
                        <FormTextInput
                            placeholder="Escribe tu contraseña"
                            fieldName="Contraseña"
                            isPassword={true}
                            setProp={setPassword}
                            value={password}
                        />
                        <FormTextInput
                            placeholder="Confirmar contraseña"
                            fieldName="Confirmar contraseña"
                            isPassword={true}
                            setProp={setConfirmPassword}
                            value={confirmPassword}
                        />
                        <FormTextInput
                            placeholder="Escribe tu nombre"
                            fieldName="Nombre"
                            setProp={setName}
                            value={name}
                        />
                        <FormTextInput
                            placeholder="Escribe tu apellido"
                            fieldName="Apellido"
                            setProp={setLastname}
                            value={lastname}
                        />
                        {/* <FormTextInput placeholder="Selecciona tu sexo" fieldName="Sexo" setProp={setSex} value={sex}/>
                        <FormTextInput placeholder="Selecciona tu fecha de nacimiento" fieldName="Fecha de nacimiento" setProp={setBornDate} value={bornDate}/>
                        <FormTextInput placeholder="Escribe tu número de teléfono" fieldName="Número de teléfono" setProp={setPhone} value={phone}/> */}
                    </View>
                ) : (
                    <View style={styles.form}>
                        <FormTextInput
                            placeholder="Escribe tu nombre de usuario"
                            fieldName="Nombre de usuario"
                            setProp={setUserName}
                            value={username}
                        />
                        <FormTextInput
                            placeholder="Escribe tu correo electrónico"
                            fieldName="Correo Electrónico"
                            setProp={setEmail}
                            value={email}
                        />
                        <FormTextInput
                            placeholder="Escribe tu contraseña"
                            fieldName="Contraseña"
                            isPassword={true}
                            setProp={setPassword}
                            value={password}
                        />
                        <FormTextInput
                            placeholder="Confirmar contraseña"
                            fieldName="Confirmar contraseña"
                            isPassword={true}
                            setProp={setConfirmPassword}
                            value={confirmPassword}
                        />
                        <FormTextInput
                            placeholder="Escribe tu nombre"
                            fieldName="Nombre"
                            setProp={setName}
                            value={name}
                        />
                        <FormTextInput
                            placeholder="Escribe tu apellido"
                            fieldName="Apellido"
                            setProp={setLastname}
                            value={lastname}
                        />
                        <FormTextInput
                            placeholder="Escribe tu cuota"
                            fieldName="Cuota por sesion (MXN)"
                            maxLength={3}
                            setProp={setFee}
                            value={fee}
                            numeric={true}
                        />
                        <Dropdown
                            fieldName='Categoria'
                            setProp={setCategory}
                            value={category}
                            customPrompt="Selecciona una categoría"
                            items={[
                                { id: 8, name: "Seleccione una categoría", value: "default" },
                                { id: 1, name: "Ciencias Sociales", value: "social sciences" },
                                { id: 2, name: "Ciencia", value: "science" },
                                { id: 3, name: "Tecnología", value: "technology" },
                                { id: 4, name: "Idiomas", value: "languages" },
                            ]}
                        />
                        <FormTextInput
                            placeholder="Selecciona tu especializacion"
                            fieldName="Especialización"
                            setProp={setSpecialization}
                            value={specialization}
                        />
                    </View>
                )}
                <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                >
                    <AppButton
                        onPress={onSubmitHandler}
                        buttonText={isTutor ? "Pre-registrar" : "Registrar"}
                    />
                </View>

                <View style={styles.buttonTextDown}>
                    <Text style={{ color: "#1c3252" }}>
                        ¿Ya tienes una cuenta?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={styles.link}>Ingresa aquí</Text>
                    </TouchableOpacity>
                </View>
                {isLoading && (
                    <ActivityIndicator
                        style={{}}
                        size={70}
                        color={primaryColor}
                    />
                )}
                <View style={styles.bottomTextContainer}>
                    <Text style={styles.bottomText}>Tutorea</Text>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    text: {
        color: "#fff",
    },
    link: {
        color: "#1c3252",
        textDecorationLine: "underline",
        textDecorationColor: "#1c3252",
    },
    h1: {
        fontSize: 30,
        marginTop: 20,
    },
    arrow: {
        flexDirection: "column",
        marginLeft: 50,
        marginTop: "20%",
    },
    form: {
        flexDirection: "column",
        marginTop: 60,
    },
    buttonTextDown: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
        paddingBottom: 50,
    },
    bottomTextContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 20,
    },
    bottomText: {
        fontFamily: "lato-bold",
        color: "#1c3252",
        fontSize: 35,
    },
});

const tutorOrStudent = StyleSheet.create({
    squareContainer: {
        marginTop: 30,
        flexDirection: "row",
        flex: 1,
    },
    square: {
        width: "50%",
        justifyContent: "center",
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 14,
        marginVertical: 9,
        fontFamily: "lato-regular",
        textAlign: "center",
    },
});

export { Register };
