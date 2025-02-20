import { Text, StyleSheet} from 'react-native'
import Colors from '../../util/colors';

function InstructionText({children, style}){
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.yellow100,
        fontSize: 24
    },
})