import { useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import  StartGameScreen from './screens/StartGameScreen'
import { LinearGradient }  from 'expo-linear-gradient'
import GameScreen from './screens/GameScreen';
import Colors from './util/colors.js'
import GameOverScreen from './screens/GameOverScreen.js';


export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true)

  function pickedNumberHandler(pickedNumber){
    console.log("hello, picked number", pickedNumber)
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  
  function gameOverHAndler(){
    setGameIsOver(true)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHAndler}/>
  }

  if(gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }


  return (
    <LinearGradient
     colors={[Colors.assent, Colors.yellow100]}
     style={styles.rootScreen}
     >
      <ImageBackground 
      source={require('./assets/images/nice.jpg')} 
      resizeMode='cover'
      style={styles.backgroundImage}
      // imageStyle={styles.backgroundImage}
      >
        <SafeAreaView
         style={styles.container}
        >
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.primary700,
  },
  backgroundImage: {
    opacity: 0.4,
    flex: 1,
    resizeMode: 'cover'
  },
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
});
