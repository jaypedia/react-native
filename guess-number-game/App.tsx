import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { StartGamePage } from './src/pages/StartGamePage';

export default function App() {
  return (
    <LinearGradient colors={['#fbeec1', '#659dbd']} style={styles.container}>
      <ImageBackground
        source={require('./assets/image/mountain.jpeg')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.image}
      >
        <StartGamePage />
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
