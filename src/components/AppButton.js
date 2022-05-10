import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { primaryColor, secondaryColor } from '../constants/Colors';

const AppButton = ({ buttonText, onPress, secondary, disabled}) => {

    if (disabled) {
        return (
        <View style={[styles.button, {backgroundColor: !secondary ? '#063970' : '#ce98bb',}]} onPress={onPress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </View>
        )
    }else {
        return (
            <TouchableOpacity activeOpacity={0.7} style={[styles.button, {backgroundColor: !secondary ? primaryColor : secondaryColor,}]} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        );
    }
    
};

export default AppButton;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50,
        borderRadius:15,
        height: 48,
        width:'75%',
        
        marginTop:17
    },
    buttonText: {
        fontFamily:'lato-regular',
        color:'#fff',
        fontSize:20,
    }
});