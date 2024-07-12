import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../util/colors.js'

function NumberContainer({children}){
    return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
)}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.yellow100,
        padding: 14,
        margin: 24,
        boderRadius: 8, 
        alignItems: 'center',
        justifyContent: 'center'        
    },
    numberText: {
        color:Colors.white,
        fontSize: 46,
        fontWeight: 'bold'
    }
})