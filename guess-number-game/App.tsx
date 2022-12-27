import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { StartGamePage } from './src/pages/StartGamePage';
import { GamePage } from './src/pages/GamePage';
import { COLOR } from './src/styles/color';

export default function App() {
  const [userNumber, setUserNumber] = useState<null | number>(null);

  const handlePickedNumber = (number: number) => {
    setUserNumber(number);
  };

  return (
    <LinearGradient colors={[COLOR.yellow500, COLOR.blue500]} style={styles.container}>
      <ImageBackground
        source={require('./assets/image/mountain.jpeg')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.image}
      >
        <SafeAreaView style={styles.container}>
          {userNumber ? <GamePage /> : <StartGamePage onPickNumber={handlePickedNumber} />}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    opacity: 0.3,
  },
});
