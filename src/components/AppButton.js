import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default AppButton = ({ buttonText, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50,
        borderRadius:15,
        height: 48,
        backgroundColor: '#1c3252',
        marginTop:17
    },
    buttonText: {
        fontFamily:'lato-regular',
        color:'#fff',
        fontSize:20,
    }
});