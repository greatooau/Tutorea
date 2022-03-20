import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default AppButton = ({ buttonText }) => {
    return (
        <TouchableOpacity style={styles.button}>
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
        fontFamily:'Lato',
        color:'#fff',
        fontSize:20,
    }
});