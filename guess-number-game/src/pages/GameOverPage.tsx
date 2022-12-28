import { View, Image, StyleSheet, Text } from 'react-native';
import { CustomButton } from '../components/ui/CustomButton';
import { Title } from '../components/ui/Title';
import { COLOR } from '../styles/color';

export const GameOverPage = ({ onRestart, userNumber, rounds }) => {
  return (
    <View style={styles.outerButtonContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../assets/image/star.jpeg')} />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to guess the
          number <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
      </View>
      <CustomButton onPress={onRestart}>Start New Game</CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  outerButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
    margin: 30,
    borderWidth: 3,
    borderColor: COLOR.yellow500,
  },
  summaryText: {
    fontSize: 24,
    fontFamily: 'roboto',
    textAlign: 'center',
    marginBottom: 20,
  },
  highlight: {
    fontFamily: 'roboto-bold',
    color: COLOR.yellow500,
  },
});
