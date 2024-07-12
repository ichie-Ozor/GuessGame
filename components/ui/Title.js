import { Text, StyleSheet } from 'react-native'
import Colors from '../../util/colors'

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.yellow100,
        paddingHorizontal: 25,
        paddingVertical: 8
    }
})