import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Cards from '../util/Cards';
import InstructionText from '../components/ui/InstructionText';



function generatRandomBetween(min, max, exclude) {
    let rndNum = Math.floor(Math.random() * (max - min)) + min;

    // if(rndNum === exclude) {
    //     return generatRandomBetween(min, max, exclude);
    // } else {
    //     return rndNum;
    // }
    while(rndNum === exclude) {
        rndNum = Math.floor(Math.random() * (max - min)) + min;
    }
    return rndNum
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){
const initialGuess = generatRandomBetween(
    1, 
    100, 
    userNumber
);
const [currentGuess, setCurrentGuess] = useState(initialGuess);
useEffect(() => {
  if(currentGuess === userNumber){
    onGameOver();
  }
}, [currentGuess, userNumber, onGameOver])

function nextGuessHandler(direction){
    if( 
        (direction === 'lower' && currentGuess < userNumber) || 
        (direction === 'greater' && currentGuess > userNumber)
        ){
            Alert.alert("Don't lie, You know that this is wrong...",[
                {text: 'Sorry', style: 'cancel'}
            ]);
            return;
        }

    if(direction === 'lower'){
        maxBoundary = currentGuess;
        } else {
        minBoundary = currentGuess + 1;
        }
    console.log(minBoundary, maxBoundary, currentGuess)
    const newRndNumber = generatRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber)
}


    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Cards>
                <InstructionText>Higer or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                       <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </View>
                    <View>
                       <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                    </View>
                </View>
            </Cards>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
      flex: 1,
      marginHorizontal: 8
    }
})