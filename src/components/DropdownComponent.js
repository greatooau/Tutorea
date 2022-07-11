import { StyleSheet, View, TextInput, Text, Touchable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import {Picker} from '@react-native-picker/picker';
import { primaryColor } from "../constants/Colors";

const Dropdown = ({
    fieldName,
    fieldNameColor,
    value,
    setProp,
    center,
    items,
    customPrompt
}) => {
    /* const [ visible, setVisible ] = useState(false);
    const [text, setText] = useState(''); */

    return (
        <View style={styles.container}>
            <Text
                style={[
                    styles.fieldName,
                    { color: fieldNameColor ? fieldNameColor : "#fff" },
                    { paddingLeft: center == false ? 0 : "13%" },
                ]}
            >
                {fieldName ? fieldName : ""}
            </Text>

            <View
                style={{
                    alignItems: center == false ? "flex-start" : "center",
                }}
            >
                <View style={[styles.form]}>
                <Picker
                    
                    mode="dialog"
                    prompt={customPrompt}
                    style={{width:'100%', color:'#707070', fontFamily:'lato-regular'}}
                    dropdownIconColor={primaryColor}
                    //ref={pickerRef}
                    selectedValue={value}
                    onValueChange={(itemValue, itemIndex) =>
                        setProp(itemValue)
                    }>
                        
                    {items.map(item => <Picker.Item key={item.id} label={item.name} value={item.value} />)}
                       
                </Picker>
                </View>
            </View>
        </View>
    );
};

export { Dropdown };

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        flexDirection: "column",
    },
    fieldName: {
        fontSize: 14,
        marginVertical: 10,
    },
    form: {
        width: "75%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 9,
    },
    icon: {
        padding: 10,
    },
    textInput: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        backgroundColor: "#fff",
        color: "#424242",
        borderRadius: 9,
    },
});
