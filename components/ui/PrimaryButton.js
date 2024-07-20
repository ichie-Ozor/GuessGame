//this is a custom button which can be used in different component
import { View, Text, Pressable, StyleSheet} from 'react-native'
import  Colors from '../../util/colors.js'

function PrimaryButton({children, onPress}){
    
    return (
        <Pressable 
        //////you can use this to style something conditionally. 
        //you can also give it more than one style
        //    style={({pressed}) => 
        //      pressed 
        //    ? [styles.buttonInnerContainer, styles.pressed]
        //    : styles.buttonInnerContainer
        //    }
            onPress={onPress} 
            android_ripple={{color: Colors.white}}
        >
            <View style={styles.buttoncontainer}>
            <Text style={styles.buttonText}>{children}</Text>
            </View>
       </Pressable>
    )}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonInnerContainer:{
        backgroundColor: Colors.primary500,
        color: '#ffbb5a'
    },
    buttoncontainer: {
        backgroundColor: '#27063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        margin: 4
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})