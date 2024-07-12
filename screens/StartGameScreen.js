import { useState } from 'react'
import { TextInput, View, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton.js'
import  Colors  from '../util/colors.js';
import Title from '../components/ui/Title.js';
import Cards from '../util/Cards.js';
import InstructionText from '../components/ui/InstructionText.js';

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText)
    }

    function resetInputHandler(){
        setEnteredNumber('')
        console.log("reset clicked")
    }

    function confirmedInputHandler(){
      const chosenNumber = parseInt(enteredNumber);

      if(isNaN(chosenNumber) ||  chosenNumber <= 0 || chosenNumber > 99){
        // show alert
        Alert.alert('Invalid Number',
            'Number has to be a number between 1 and 99',
            [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
        )
        return;
      }
      console.log('valid number')
      onPickNumber(chosenNumber)
    }
    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Cards>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput 
                    style={styles.numberInput} 
                    maxLength={2} 
                    keyboardType='number-pad' 
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton whenPressed={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                    <PrimaryButton whenPressed={confirmedInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Cards>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.yellow100,
        borderBottomWidth: 2,
        color: Colors.yellow100,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
      flex: 1,
      marginHorizontal: 8
    }
})