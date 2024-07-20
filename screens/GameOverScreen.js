import { View, Text, Image, StyleSheet } from 'react-native'
import Title from '../components/ui/Title'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import PrimaryButton from '../components/ui/PrimaryButton'

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
  return (
    <View>
        <Title>Game Over</Title>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/images/success.png')}/>
        </View>
          <Text  style={styles.summaryText}> 
            your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds ro guess the number right{''}<Text style={styles.highlight}>{userNumber}</Text>
          </Text>
          <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  rootContainer: {
   flex: 1,
   padding: 24,
   justifyContent: 'center',
   alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
    color: Colors.yellow200
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: 'purple'
  }
})