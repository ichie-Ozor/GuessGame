import { View, StyleSheet } from 'react-native'
import Colors from './colors'

function Cards({children}){
    return <View style={styles.card}>{children}</View>
}

export default Cards

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center', 
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        marginTop: 100,
        // borderBottomColor: '#3b021f',
        backgroundColor: Colors.primary600,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 3, height: 2},
        shadowRadius: 10,
        shadowOpacity: 0.25
    },
})