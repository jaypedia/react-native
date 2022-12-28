import { useState } from 'react';
import { Pressable, View, Text, StyleSheet, Alert } from 'react-native';
import { NumberContainer } from '../components/game/NumberContainer';
import { CustomButton } from '../components/ui/CustomButton';
import { Title } from '../components/ui/Title';
import { generateRandomBetween } from '../util/randomNumber';

let minBoundary = 1;
let maxBoundary = 100;

type GamePageProps = {
  userNumber: number;
  onGameOver: () => void;
};

export const GamePage = ({ userNumber, onGameOver }: GamePageProps) => {
  const initialNumber = generateRandomBetween(minBoundary, maxBoundary, userNumber);
  const [currentNumber, setCurrentNumber] = useState(initialNumber);

  const nextGuessHander = (direction: string) => {
    if (
      (direction === 'lower' && currentNumber < userNumber) ||
      (direction === 'greater' && currentNumber > userNumber)
    ) {
      Alert.alert(`Don't lie!`, 'You know that this is wrong...', [
        {
          text: 'Sorry!',
          style: 'cancel',
        },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentNumber;
    } else {
      minBoundary = currentNumber + 1;
    }

    const newNumber = generateRandomBetween(minBoundary, maxBoundary, currentNumber);
    setCurrentNumber(newNumber);
    if (newNumber === userNumber) {
      onGameOver();
    }
  };

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentNumber}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <CustomButton text="-" onPress={nextGuessHander.bind(this, 'lower')} />
        <CustomButton text="+" onPress={nextGuessHander.bind(this, 'greater')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
