import { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { NumberContainer } from '../components/game/NumberContainer';
import { Card } from '../components/ui/Card';
import { CustomButton } from '../components/ui/CustomButton';
import { InstructionText } from '../components/ui/InstructionText';
import { Title } from '../components/ui/Title';
import { generateRandomBetween } from '../utils/randomNumber';

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
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <CustomButton text="-" onPress={nextGuessHander.bind(this, 'lower')} />
          </View>
          <View style={styles.button}>
            <CustomButton text="+" onPress={nextGuessHander.bind(this, 'greater')} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 20,
  },
});
