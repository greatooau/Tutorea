import {
    TouchableHighlight,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    ActivityIndicator,
    Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useCallback } from "react";
import {
    Arrow,
    AppButton,
    FormTextInput,
} from "../../components/Components";
import { dataFetcher } from "../../constants/dataFetcher";
import { primaryColor, secondaryColor } from "../../constants/Colors";
//import DocPicker, { types } from "react-native-document-picker";
import * as DocumentPicker from 'expo-document-picker';
import AntIcon from "react-native-vector-icons/AntDesign";

const Advertisement = ({ navigation, route }) => {
    //Estos son los datos del usuario que se pasaron a través de react navigation.
    //const { tutorData } = route.params;

    //Para saber si está cargando
    const [isLoading, setIsLoading] = useState(false);
    const [fileResponse, setFileResponse] = useState([]);

    const onSubmitHandler = async (e) => {
        /* setIsLoading(true);
        try{

            //navigation.navigate('UploadFiles', { tutorData })
            
            const response = await dataFetcher.post("api/tutors/", tutorData);

            if (response.status === 201) {
                setIsLoading(false);
                navigation.navigate('Login');
            }
            else {
                console.log(response.status)
            } 
            
                
        } catch(error) {
            
            setIsLoading(false)
            console.log(error)
        } */
    };

    
    
    return (
        <ScrollView>
            <StatusBar backgroundColor="black" />
            <LinearGradient
                colors={["rgb(28,50,82)", "transparent"]}
                style={styles.page}
            >
                <View style={styles.arrow}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Arrow color="#fff" />
                    </TouchableOpacity>

                    <Text style={[styles.text, styles.h1]}>
                        {"Pre-registro"}
                    </Text>
                    {/* Cambiar el texto segun sea tutor o estudiante */}
                    <Text style={[styles.text, {fontFamily:'lato-regular'}]}>
                        {"Sube los archivos que avalen tus estudios."}
                    </Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "center",
                        marginVertical: 30,
                    }}
                >
                    <View
                        style={{
                            width: "80%",
                            height: 500,
                            backgroundColor: "white",
                            borderRadius: 12,
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <AntIcon
                            style={{ marginVertical: 30 }}
                            color={primaryColor}
                            name="checkcircle"
                            size={70}
                        />
                        <Text
                            style={{
                                width: "70%",
                                textAlign: "center",
                                color: primaryColor,
                                fontSize: 20,
                                fontFamily:'lato-regular'
                            }}
                        >
                            Tu pre-registro concluyó con éxito.
                        </Text>
                        <Text
                            style={[styles.textInSquare, {fontSize:20, marginTop:30, marginBottom:10}]}
                        >
                            RECUERDA!
                        </Text>
                        <Text style={styles.textInSquare}>
                            Necesitas enviar los documentos que avalen tu conocimiento para que sean evaluados por un pedagogo al siguiente correo: 
                        </Text>
                        <Text style={[styles.textInSquare, { marginVertical:20,color:secondaryColor, fontSize:19, fontFamily:'lato-bold'}]}>sergioarangag@gmail.com</Text> 
                        <Text style={[styles.textInSquare, {color:secondaryColor, fontFamily:'lato-bold', marginTop:20}]}>Tus documentos tienen que ser enviados con el correo que hiciste tu pre-registro.</Text>
                    </View>
                </View>

                
                
                <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                >
                    <AppButton
                        onPress={() => navigation.navigate('LoginRegister')}
                        buttonText="Continuar"
                    />
                </View>

                <View style={styles.buttonTextDown}>
                    {/* <Text style={{ color: "#1c3252" }}>
                        ¿Ya tienes una cuenta?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={styles.link}>Ingresa aquí</Text>
                    </TouchableOpacity> */}
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
    textInSquare: {
        width: "90%",
        textAlign: "center",
        color: primaryColor,
        fontSize: 15,
        fontFamily:'lato-regular'
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
        textAlign: "center",
        justifyContent: "center",
        color: "#fff",
        fontFamily: "lato-regular",
        borderBottomWidth: 1,
        fontSize: 14,
    },
});

export { Advertisement };
